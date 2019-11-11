const express = require('express');
const stocksController = require('../controllers/stocksController');

const router = express.Router();

router.get(
  '/stocks/:id',
  stocksController.getBuys,
  stocksController.getFavs,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys, favs: res.locals.favs });
  }
);

router.post(
  '/stocks/buys/',
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

router.post(
  '/stocks/favs/:id',
  stocksController.getFavs,
  stocksController.addFav,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.favs });
  }
);

router.delete(
  '/stocks/favs/:id',
  stocksController.getFavs,
  stocksController.deleteFav,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.favs });
  }
);
