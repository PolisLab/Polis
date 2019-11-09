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

module.exports = router;