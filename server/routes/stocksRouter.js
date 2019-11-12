const express = require('express');
const stocksController = require('../controllers/stocksController');
const router = express.Router();

// router.get('/pastStocks', stocksController.savePastStocks, (req, res) => {
//   res.status(200).json(res.locals.pastStock);
// });

router.get('/buys', stocksController.getBuys, (req, res) => {
  res.status(200).json({ stocks: res.locals.buys });
});

router.get('/getAllPastStocks/:stockId',
 stocksController.getAllPastStock, 
 (req,res) => {
   res.status(200).send(res.locals.pastStock);
 }
)

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


module.exports = router;
