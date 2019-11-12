const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://sungdo1004:codesmith1004@cluster0-2sjwa.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'stock'
  })
  .then(() => console.log(`Connected to Sung's Mongo DB`))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email_address: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  favorites: [String]
});

const User = mongoose.model('user', userSchema);

const buySchema = new Schema({
  email_address: String,
  boughtStockId: String,
  date: String,
  purchasedPrice: Number,
  numberOfShares: Number,
  prediction: Number
});

const Buy = mongoose.model('buy', buySchema);

const pastStockSchema = new Schema({
  stockSymbol: String,
  changes: [Object]
});
const PastStock = mongoose.model('pastStocks', pastStockSchema);

module.exports = {
    User, 
    Buy, 
    PastStock
};
