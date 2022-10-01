const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.cmp.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                    },
                },
            },
            {
                test: /(.png|(?<!.cmp).svg|.jpg|.jpeg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
                type: 'asset/resource'
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    }
}