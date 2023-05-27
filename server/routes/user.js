const express = require('express');
const router = express.Router();
const { User } = require('../database/models');
const { isUserAuthenticated } = require('../middlewares/auth');


router.get('/user', async (req, res) => {
    const users = User.findAll()
    res.json(users)
});

router.get('/auth/user', isUserAuthenticated, (req, res) => {
    res.json(req.user)
})

router.get('/user/:id', async (req, res) => {
    const oneUser = await User.findByPk(req.params.id);
    res.json(oneUser);
});

router.post('/user/:id', async (req, res) => {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, {
        where:{
            id,
        }
    });
    res.json(updatedUser);
});

router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id,
        }
    });
    res.json(deletedUser);
});


module.exports = router;