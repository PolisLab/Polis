const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

router.post('/signup',
    userController.createUser,
    (req, res) => res.status(200).json(res.locals.userInfo)
)

router.post('/login',
    userController.verifyUser,
    // userController.getFavs,
    (req, res) => res.status(200).json(res.locals.userInfo)
)

router.post('/addfav',
    userController.addFavs, 
    (req, res) => res.status(200).json(res.locals.addedFav)
)

router.post('/removefav', 
    userController.removeFav,
    (req, res) => res.status(200).json(res.locals.removedFav)
)

module.exports = router;