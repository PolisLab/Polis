const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');
// getting api router
// const apiRouter = require('./routes/api');
const userRouter = require('./routes/userRouter')


app.use('/build', express.static(path.join(__dirname, '../build')));
// app.use(express.static(path.resolve(__dirname, '../static/images')));
app.use(cookieParser());
app.use(express.json());

app.use('/stocks');

// api will be our homepage and we will run middlewater funcs in api router
app.use('/user', userRouter)

// api/user will be /user
// app.use('/api/user', userRouter)
// app.use('/api/current', currentRouter );
//catches all routes for any requests for unknown route

app.use('/', (req,res) => {
  res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
})


app.use((res, next) => res.sendStatus(404))

//global error handler
app.use((err, req, res, next) => {
  return res.status(400).json('Global Error')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
