const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(cookieParser());
app.use(bodyParser());
app.use(express.json());

const stocksRouter = require('./routes/stocksRouter');
const usersRouter = require('./routes/userRouter');
const pastStockRouter = require('./routes/pastStocksRouter');

//WEBPACK BUILD
app.use('/build', express.static(path.join(__dirname, '../build')));


// ROUTE HANDLING
app.use('/user', usersRouter);
app.use('/stocks', stocksRouter);
app.use('/pastStock', pastStockRouter)
// app.use('/api', apiRouter);

//MAIN PAGE
app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

//CATCH-ALL HANDLER
app.use('*', (req, res, err) => {
  res.sendStatus(404);
});

//GLOBAL ERROR HANDLING
app.use((err, req, res, next) => {
  return res.status(400).json('Global Error');
});

//SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
