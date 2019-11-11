const db = require('../models/polisModel');

const stocksController = {};

stocksController.getBuys = (req, res, next) => {
  const id = req.params.id;
  Buy.find({ userID: id }, (err, buys) => {
    if (err)
      return next('Error in stocksController.getBuys: ' + JSON.stringify(err));
    res.locals.buys = buys;
    return next();
  });
};

stocksController.getFavs = (req, res, next) => {
  const id = req.params.id;
  User.favorites.find({ userID: id }, (err, favs) => {
    if (err)
      return next('Error in stocksController.getFavs: ' + JSON.stringify(err));
    res.locals.favs = favs;
    return next();
  });
};

stocksController.addBuy = (req, res, next) => {
  const id = req.params.id;
  Buy.create(
    { userID: id, boughtStockID: req.body.boughtStockID },
    (err, buys) => {
      if (err)
        return next('Error in stocksController.addBuy: ' + JSON.stringify(err));
      res.locals.buys = buys;
      return next();
    }
  );
};

stocksController.deleteBuy = (req, res, next) => {
  const id = req.params.id;
  Buy.remove(
    { userID: id, boughtStockID: req.body.boughtStockID },
    (err, buys) => {
      if (err)
        return next(
          'Error in stocksController.deleteBuy: ' + JSON.stringify(err)
        );
      res.locals.buys = buys;
      return next();
    }
  );
};

stocksController.addFav = (req, res, next) => {
  const id = req.params.id;
  User.favorites.create(
    { userID: id, favorites: req.body.favorites },
    (err, favs) => {
      if (err)
        return next('Error in stocksController.addFav: ' + JSON.stringify(err));
      res.locals.favs = favs;
      return next();
    }
  );
};

stocksController.deleteFav = (req, res, next) => {
  const id = req.params.id;
  Buy.remove(
    { userID: id, boughtStockID: req.body.boughtStockID },
    (err, favs) => {
      if (err)
        return next(
          'Error in stocksController.deleteFav: ' + JSON.stringify(err)
        );
      res.locals.favs = favs;
      return next();
    }
  );
};
