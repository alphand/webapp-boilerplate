var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: "web",
  cache: false,
  context: __dirname,
  devtool:false,
  entry: ["./src/client"],
  output:{
    path: path.join(__dirname, "static/dist"),
    filename: "client.js",
    chunkFilename: ["[name].[id].js"],
    publicPath: "dist/"
  },
  plugins:[
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
  ],
  module:{
    loaders:[
      {include: /\.json$/, loaders: ["json-loader"]},
      {include: /\.(js|jsx)$/, loaders: ["babel-loader?stage=1&optional=runtime"], exclude: /node_modules/}
    ]
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: ["", ".json", ".js", ".jsx"]
  },
  node:    {
    __dirname: true,
    fs:        'empty'
  }
};