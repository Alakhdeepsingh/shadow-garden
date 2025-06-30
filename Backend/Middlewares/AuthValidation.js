const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(4).max(100).required()
});

const validateSignup = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateLogin = validateSignup;

module.exports = {
    validateSignup,
    validateLogin
};
