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

// userController.getFavs = (req, res, next) => {
//     models.Favs

// }





userController.addFavs = (req, res, next) => {


}

userController.deleteFav = (req, res, next) => {

}
 


userController.verifyUser  = (req, res, next) => {
  const {email_address, password} = req.body;
  // console.log('req.body is', req.body)
  models.User.findOne({email_address}, (err, result) => {
    // console.log(typeof password)
    // console.log(typeof result.password)
    console.log('result in verifyuser', result)
    // if(result === null) res.render('./../signup');
    // if (err) res.render('/user/signup').json('No Such User!!')
    if (result === null) {
      res.locals.userInfo = {message: 'No Such User'}
      next();
    } else {
      if (result.password === JSON.stringify(password)) {
        res.locals.userInfo = result
        next();
      }
      if (result.password !== JSON.stringify(password)) {
        res.locals.userInfo = {message: 'Wrong password'}
        next();
      }  
    }
  })
}

module.exports = userController;