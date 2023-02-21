const path = require("path");

module.exports = {
  entry: {
    App: "./App.js",
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },

  plugins: [],

  resolve: {
    extensions: [".js"],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // just omitting the following doesn't work:
        // exclude: /node_modules/,
        include: path.resolve(__dirname, "node_modules/chart.js"),
        loader: "babel-loader",
      },
      {
        test: /\.(html|css|png)$/,
        loader: "file-loader",
        options: { name: "[path][name].[ext]" },
      },
    ],
  },
};
