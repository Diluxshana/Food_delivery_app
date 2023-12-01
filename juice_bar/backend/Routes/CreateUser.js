const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

router.post("/createuser", [
    body('name', 'Your name must contain minimum 5 letters').isLength({ min: 5 }),
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Incorrect password').isLength({ min: 5 })
], async (req, res) => {
    console.log(req.body); // Log the request body to check received data

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location // Assuming location is passed in the request body
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

module.exports = router;
