const express = require('express');
const { User } = require('./../database/models');
const jwt = require('jsonwebtoken')

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password, id} = req.body;

    const userMatch = await User.findOne({ where: { username } }).catch((err) => {
        console.log('Error: ', err);
    })
    if(!userMatch){
        return res.json({ message: 'username or password does not match'})
    }
    if(userMatch.password !== password){
        return res.json({ message: 'username or password does not match'})
    }

    const jwtToken = jwt.sign({ id: userMatch.id, username: userMatch.username }, process.env.JWT_SECRET)

    res.json({ message: 'Welcome back!', token: jwtToken});
});

router.post('/logout', async (req, res) => {
    req.logout();
})

module.exports= router;