const express = require('express');
const stocksController = require('../controllers/stocksController');

const router = express.Router();

router.get(
  '/stocks/:id',
  stocksController.getBuys,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys, favs: res.locals.favs });
  }
);

router.post(
  '/stocks/buys/:id',
  stocksController.getBuys,
  stocksController.addBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

router.delete(
  '/stocks/buys/:id',
  stocksController.getBuys,
  stocksController.deleteBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

module.exports = router;