const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Create Token
const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};


const registerUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.status(400).json({ error: "Username already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ name, password: hashedPassword });

        const token = createToken(user._id);
        res.status(201).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};



// Login User
const loginUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        const user = await User.findOne({ name });
        if (!user) {
            throw new Error("Invalid username or password");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid username or password");
        }

        const token = createToken(user._id);
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = { registerUser, loginUser };
