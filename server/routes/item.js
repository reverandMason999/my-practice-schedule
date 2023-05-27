const express = require('express');
const sequelize = require('sequelize');
const router = express.Router()
const { Item } = require('./../database/models')

router.post('/item', async (req, res) => {
    const { name, duration, bpm, type, routId } = req.body
    const newItem = await Item.create({
        name,
        duration,
        bpm,
        type,
        routId
    });
    res.json({
        id: newItem.id
    });
});

router.get('/item', async(req, res) => {
    const items = await Item.findAll()
    res.json(items);
});

router.get('/item/:id', async (req, res) => {
    const oneItem = Item.findByPk(req.params.id)
    res.json(oneItem);
});

router.post('/item/:id', async (req, res) => {
    const { id } = req.params
    const updatedItem = await Item.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedItem)
});

router.delete('/item/:id', async (req, res) => {
    const { id } = req.params
    const deletedItem = await Item.destroy({
        where: {
            id,
        }
    })
    res.json(deletedItem)
})


module.exports = router;