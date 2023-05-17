const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { sendOTP, verifyOTP } = require('./authy');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'YOUR_SESSION_SECRET', resave: false, saveUninitialized: true }));

app.post('/login', (req, res) => {
    const { phoneNumber, countryCode, otp } = req.body;

    // Verify the OTP
    verifyOTP(phoneNumber, countryCode, otp, (err, response) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to verify OTP' });
        } else if (response.success) {
            // OTP is verified, proceed with login logic
            req.session.loggedIn = true; // Set a session variable to indicate successful login
            res.json({ message: 'Login successful' });
        } else {
            res.status(400).json({ error: 'Invalid OTP' });
        }
    });
});

app.get('/logout', (req, res) => {
    req.session.loggedIn = false; // Clear the session variable to indicate logout
    res.json({ message: 'Logout successful' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});