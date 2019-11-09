const models = require('../models/polisModels');
// bcrypt or cookies for stretch

const userController = {};

userController.createUser = (req, res, next) => {
    const {email_address, password, first_name, last_name} = req.body
    console.log(req.body)
    console.log(typeof email_address)
    models.User.create({email_address, password, first_name, last_name})
            .then(result => {
                res.locals.userInfo = result
                console.log('result is', result)
                next();
            })
            .catch(err => {
                next({
                  log: `starWarsController.addCharacter: ERROR: ${err}`,
                  message: { err: 'Error occurred in starWarsController.addCharacter Check server logs for more details.' }
                });
              });
};

userController.getFavs = (req, res, next) => {
    res.body = 'sup'
    next();
}
 


userController.verifyUser  = (req, res, next) => {
    const {email_address, password} = req.body;
    User.find({email_address}, (err, result) => {
        if (err) res.status(400).send('email doesnt exist')
    



    });
    next();
}

module.exports = userController;