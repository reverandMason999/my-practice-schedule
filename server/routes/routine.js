const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const { Routine } = require('./../database/models');

router.post('/routine', async (req, res) => {
    const { name, dayOfWeek, bpm, description, duration, userId } = req.body
    const newRoutine = await Routine.create({
        name,
        dayOfWeek,
        bpm,
        description,
        duration,
        userId 
    });
    res.json({
        id: newRoutine.id
    });
});

router.get('/routine', async (req, res) => {
    const routines = await Routine.findAll()
    res.json(routines);
});

router.get('/routine/:id', async (req, res) => {
    const oneRoutine = await Routine.findByPk(req.params.id);
    res.json(oneRoutine);
});

router.post('/routine/:id', async (req, res) => {
    const { id } = req.params;
    const updatedRoutine = await Routine.update(req.body, {
        where: {
            id,
        }
    });
    res.json(updatedRoutine);
});

router.delete('/routine/:id', async (req, res) => {
    const { id } = req.params;
    const deletedRoutine = await Routine.destroy({
        where: {
            id,
        }
    });
    res.json(deletedRoutine);
});




module.exports = router;