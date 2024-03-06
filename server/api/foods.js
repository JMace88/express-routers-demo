const express = require('express');

const router = express.Router();

const { getAllFoods, addNewFood } = require('../db/foods');

// The endpoint is /api/foods
router.get('/', async (req, res, next) => {
  try {
    const allFoods = await getAllFoods();
    res.send(allFoods);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('REQ.BODY:', req.body)
    const newFood = await addNewFood(req.body);
    res.send(newFood);
  } catch (err) {
    next(err);
  }
});

// Full route: /api/foods/:name
router.get('/:name', (req, res) => {});

// Full route: /api/foods/:id
router.delete('/:id', (req, res) => {});

module.exports = router;
