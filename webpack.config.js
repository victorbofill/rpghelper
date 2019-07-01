const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const buildDir = 'dist';
const path = `${__dirname}/${buildDir}`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};