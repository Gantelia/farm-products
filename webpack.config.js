const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      {
        test: /\.cmp.svg$/,
        use: {
          loader: "@svgr/webpack",
          options: {
            exportType: "named",
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /(.png|((?<!.cmp).svg)|.jpg|.jpeg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  sourceType: "module",
  performance: { hints: false },
};
