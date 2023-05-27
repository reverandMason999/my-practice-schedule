const express = require('express');
const passport = require('passport');

const router = express.Router();

const successfulLoginUrl = 'http://localhost:3000/Login/Success'
const errorLoginUrl = 'http://localhost:3000/login/error'

router.get('/login/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/auth/google/callback', passport.authenticate('google', { 
    failureMessage: 'Cannot log in with google',
    failureRedirect: errorLoginUrl,
    successRedirect: successfulLoginUrl
}),
    (req, res) => {
        console.log('User: ', req.user);
        res.send('Thank you for signing in!');
    }
);

module.exports = router;