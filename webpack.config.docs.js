var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    entry: {
        index: './docs/index.js',
        vendors: [
            'react',
            'react-dom',
            'react-router',
        ]
    },

    output: {
        path: __dirname + '/build/docs',
        filename: '[name].min.js',
        chunkFilename: '[name].min.js?[chunkHash]',
        publicPath: './'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(css|less)$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            env: 'dev',
            filename: __dirname+'/build/docs/index.html',
            template: './docs/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', 
            filename: 'vendors.min.js'
        }),
        new webpack.DefinePlugin({
            ENV: `'dev'`,
            'process.env.NODE_ENV': '"dev"'
        })
    ]
}
