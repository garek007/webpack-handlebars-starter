const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templateParameters = require('./templateParameters.json');


module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.hbs',
      filename: 'index.html',
      templateParameters: templateParameters
    }),
  ],  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules:[
      {
        test: /\.css$/i,
        use:['style-loader','css-loader'],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },      
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf)$/i,
        type: 'asset/resource',
      },      
    ]
  }
};