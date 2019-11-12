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
        log: `userController.createUser: ERROR: ${err}`,
        message: { err: 'Error occurred in userController.createUser Check server logs for more details.' }
      });
    });
};


userController.addFavs = (req, res, next) => {
  console.log('req.body that was passed from getFavs now in addFav is', req.body);
  // console.log(res.locals.favList)
  const {email_address, favStockId} = req.body
  models.User.updateOne(
    // {email_address}, 
    {$addToSet: {
      favorites: favStockId
    }}, (err)=> {
    // console.log('result in addFav', result);
    if (err) return next('Error in userController: addFavs: ' + JSON.stringify(err));
  })
  models.User.findOne({email_address}, (err, result)=> {
    console.log(result.favorites)
    res.locals.addedFav = result.favorites
    console.log("res.locals.addedFav ===========", res.locals.addedFav)
  });
  next();
  
}

userController.removeFav = (req, res, next) => {
  console.log(req.body);
  const {email_address, removeStockId} = req.body;
  models.User.updateOne(
    // {email_address}, 
    {$pull : {
      favorites: removeStockId
    }}, (err) => {
      if (err) return next('Error in userController: removeFav: ' + JSON.stringify(err));
    }
  );
  models.User.findOne({email_address}, (err, result)=> {
    console.log(result.favorites)
    res.locals.removedFav = result.favorites
    console.log("res.locals.removedFav ===========", res.locals.removedFav)
  });
  next();
}

userController.verifyUser  = (req, res, next) => {
  const {email_address, password} = req.body;
  console.log('received req body',  req.body);
  console.log('email' ,email_address)
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
      if (result.password === password) {
        res.locals.userInfo = result;
        next();
      }
      else {
        res.locals.userInfo = {message: 'Wrong password'}
        next();
      }  
    }
  })
}

module.exports = userController;