const express = require('express');
const stocksController = require('../controllers/stocksController');
const router = express.Router();

router.get('/pastStocks', stocksController.savePastStocks, (req, res) => {
  res.status(200).json(res.locals.pastStock);
});

router.get('/buys/:email',
  stocksController.getBuys,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys});
  }
);

router.post(
  '/buys',
  stocksController.getBuys,
  stocksController.addBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

router.delete(
  '/buys',
  stocksController.getBuys,
  stocksController.deleteBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> e1498e6e5715881fc1b057a7b13ae1dd5ce45acf
