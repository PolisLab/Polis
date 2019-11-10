const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://sungdo1004:entjddms0770@cluster0-2sjwa.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'starwars'
})
.then(()=>console.log(`Connected to Sung's Mongo DB`))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email_address : {type: String, required: true},
    password: {type: String, required: true},
    first_name : {type:String, required:true},
    last_name: String,
    array: [],
    favorites: [String]
})

const User = mongoose.model('user', userSchema);

const favStockSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    favStockId : String
})

const Fav = mongoose.model('favs', favStockSchema);

const buySchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId, 
        ref: 'user'
    },
    boughtStockId : String,
    date : Date,
    purchasedPrice : Number,
    prediction: Number
})

const Buy = mongoose.model('buy', buySchema)

module.exports = {
    User, 
    Fav, 
    Buy
}