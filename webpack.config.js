var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {

    entry: {
        index: './src/index.js'
    },

    output: {
        path: __dirname + '/build/packages',
        filename: '[name].js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    },

    plugins: [
        new ExtractTextPlugin(
            'react-zui.css'
        ),
        new webpack.DefinePlugin({
            ENV: `'dev'`,
            'process.env.NODE_ENV': '"dev"'
        })
    ]
}
