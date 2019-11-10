const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');


app.use('/build', express.static(path.join(__dirname, '../build')));
// app.use('/client', express.static(path.resolve(__dirname, '../client/')));
app.use(cookieParser());
app.use(express.json());
app.use('/', (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
  })
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;