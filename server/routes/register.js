const express = require('express');
const { User } = require('./../database/models');



const router = express.Router()

router.post('/register', async (req, res) => {
    try{
    const { username, password, email, googleId} = req.body
    const newUser = await User.create({
        username,
        password,
        googleId,
        email
        
    });
    // res.json({
    //    username: newUser.username
    // });
    console.log(newUser.username)
} catch (e) {
    console.log(e);
    res.status(500).json({
        message: 'user not created',
    })
}
});

module.exports = router;