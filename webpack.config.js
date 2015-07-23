var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
      path: path.join(__dirname, 'build'),
      filename: "bundle.js"
    },
    module: {
      loaders: [{ 
            test: path.join(__dirname, 'app'),
            loader: 'babel-loader' 
          }
      ]
    }
};