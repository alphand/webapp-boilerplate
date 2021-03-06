var webpack = require('webpack');
var path = require('path');

module.exports = {
  target:   "web",
  cache:    false,
  context:  __dirname,
  devtool:  false,
  entry:    ["./src/client"],
  output:{
    path:           path.join(__dirname, "static/dist"),
    filename:       "client.js",
    chunkFilename:  "[name].[id].js",
    publicPath:     "dist/"
  },
  plugins:[
    new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
    new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:{
    loaders: [
      {include: /\.json$/, loaders: ["json"]},
      {include: /\.(js|jsx)$/, loaders: [ "babel?stage=1&optional=runtime"], exclude: /node_modules/},
      {include: /\.(scss|sass)$/, loaders:["style", "css", "sass"], exclude: /node_modules/},
      {include: /\.(css)$/, loaders:["style", "css"], exclude: /node_modules/}
    ]
  },
  resolve: {
    modulesDirectories: [
      "src",
      "node_modules",
      "web_modules"
    ],
    extensions: ["", ".json", ".js", ".jsx", ".scss"]
  },
  node:{
    __dirname: true,
    fs:        'empty'
  }
};