const path = require('path');

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
                test: /(.png|(?<!.cmp).svg|.jpg|.jpeg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
                type: 'asset/resource'
            }
        ]
    }

}