const express = require("express");
const cors = require("cors");
require("dotenv").config(); // ⬅️ Very important

require("./Models/db");

const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes); // 👈 change /api/auth to /auth


app.get('/ping', (req, res) => {
    res.send('PONGING');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
