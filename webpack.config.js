const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templateParameters = require('./templateParameters.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require("glob");
const PATHS = {
  src: glob.sync("./src/**/*", { nodir: true }),
};

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.hbs',
      filename: 'index.html',
      templateParameters: templateParameters
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new PurgeCSSPlugin({
      paths: glob.sync("./src/**/*.{hbs,js,html}", { nodir: true }),
      safelist: [
        /^slds-size_/,
        /^slds-col/,
        /^slds-grid/,
        /^slds-order/,
        /^slds-medium/,
        /^slds-large/,
        /^slds-icon/
      ]
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
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          partialDirs: [
            path.resolve(__dirname, "src/form")
          ]          
        }
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