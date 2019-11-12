const models = require('../models/polisModels');

const stocksController = {};

stocksController.getBuys = (req, res, next) => {
  const email_address= req.params.email;
  models.Buy.find({ email_address }, (err, buys) => {
    if (err)
      return next('Error in stocksController.getBuys: ' + JSON.stringify(err));
    res.locals.buys = buys;
    return next();
  });
};

stocksController.addBuy = (req, res, next) => {
  console.log(req.body);
  models.Buy.create({ 
    email_address: req.body.email_address, 
    boughtStockID: req.body.boughtStockID, 
    date: req.body.date, 
    purchasedPrice: req.body.purchasedPrice,
    numberOfShares : req.body.numberOfShares
  },(err, buys) => {
    if (err)
      return next('Error in stocksController.addBuy: ' + JSON.stringify(err));
    console.log(buys);
    res.locals.buys = buys;
    return next();
  });
};

stocksController.deleteBuy = (req, res, next) => {
  const { email_address, boughtStockID } = req.body;
  models.Buy.remove({ email_address, boughtStockID }, (err, buys) => {
    if (err)
      return next(
        'Error in stocksController.deleteBuy: ' + JSON.stringify(err)
      );
    res.locals.buys = buys;
    return next();
  });
};

stocksController.savePastStocks = (req, res, next) => {
  const { symbol } = req.body;
  fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=VRFP7Q7L5C1DU3EH`
  )
    .then(result => result.json())
    .then(result => {
      console.log(result);
    });
  //build for in loop to pull out closing costs for each day
  //check if stocks already exist in db
};


module.exports = stocksController;