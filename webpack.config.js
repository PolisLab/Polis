const path = require('path');
module.exports = {
    entry : [ './client/index.js'],
    output : {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
       
    },
    mode: process.env.NODE_ENV,
    module:{
        rules:[
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                loader:'babel-loader'
              },
            },
            {
                test: /.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                    {loader:'style-loader'},
                    {loader: 'css-loader'},
                    {loader:'sass-loader'}],
              },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      publicPath: '/build',
      proxy:{
        
      
        '/':'http://localhost:3000',
     
       }
      },
};