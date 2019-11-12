const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const stockController = require('../controllers/')

router.post('/signup', userController.createUser, (req, res) =>
  res.status(200).json(res.locals.userInfo)
);

<<<<<<< HEAD
router.post('/login',
    userController.verifyUser,

    // userController.getFavs,
    (req, res) => res.status(200).json(res.locals.userInfo)
)

router.post('/addfav',
    userController.addFavs,

    (req, res) => res.status(200).json(res.locals.addedFav)
)
=======
router.post(
  '/login',
  userController.verifyUser,
  //   stocksController.getBuys,
  (req, res) => res.status(200).json(res.locals.userInfo)
);

router.post('/addfav', userController.addFavs, (req, res) =>
  res.status(200).json(res.locals.addedFav)
);
>>>>>>> e1498e6e5715881fc1b057a7b13ae1dd5ce45acf

router.post('/removefav', userController.removeFav, (req, res) =>
  res.status(200).json(res.locals.removedFav)
);

module.exports = router;
