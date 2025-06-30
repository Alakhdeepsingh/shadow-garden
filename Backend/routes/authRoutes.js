const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { validateSignup, validateLogin } = require("../middlewares/authValidation");

const router = express.Router();

router.post("/register", validateSignup, registerUser);
router.post("/login", validateLogin, loginUser);

module.exports = router;
