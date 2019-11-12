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

//WEBPACK BUILD
app.use('/build', express.static(path.join(__dirname, '../build')));

<<<<<<< HEAD
// api will be our homepage and we will run middlewater funcs in api router
app.use('/user', userRouter)
app.use('/pastStock', pastStockRouter)
// api/user will be /user
// app.use('/api/user', userRouter)
// app.use('/api/current', currentRouter );
//catches all routes for any requests for unknown route
=======
>>>>>>> e1498e6e5715881fc1b057a7b13ae1dd5ce45acf

// ROUTE HANDLING
app.use('/users', usersRouter);
app.use('/stocks', stocksRouter);
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
