const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Add contentBase option
    compress: true, // Enable gzip compression
    port: 9000, // Specify port
    allowedHosts: ['localhost', '127.0.0.1'], // Define allowed hosts directly as an array of non-empty strings
  },
};
