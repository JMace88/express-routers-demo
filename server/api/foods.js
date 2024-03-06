const express = require('express');

const router = express.Router();

const { getAllFoods, addNewFood, getFoodById } = require('../db/foods');

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
    console.log('REQ.BODY:', req.body);
    const newFood = await addNewFood(req.body);
    res.send(newFood);
  } catch (err) {
    next(err);
  }
});

// Full route: /api/foods/:id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  let food = await getFoodById(id);
  res.send(food);
});

// Full route: /api/foods/:id
router.delete('/:id', (req, res) => {});

module.exports = router;
