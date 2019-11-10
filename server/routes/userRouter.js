const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();


// router.post('/',
//     userController.createUser,
//     (req, res) => res.status(200).json({
//         // resultIs : res.locals.id
//         apple: 'hi' 
//     })
// )

router.post('/signup',
    userController.createUser,
    (req, res) => res.status(200).json(res.locals.userInfo)
)

router.post('/login',
    userController.verifyUser,
    (req, res) => res.status(200).json(res.locals.userInfo)
)

// router.post('/addFav', 
//     userController.getFavs,
//     userController.addFavs,
//     (req, res) => res.status(200).json(res.locals.userFavs)
// )


module.exports = router;