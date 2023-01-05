// const webpack = require('webpack');

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true
  },
  devtool: "cheap-module-source-map",
  plugins: [
    // Specify development API URL
    // new webpack.DefinePlugin({
    //     "process.env": {
    //         NODE_ENV: JSON.stringify("development"),
    //     },
    // }),
  ]
};
