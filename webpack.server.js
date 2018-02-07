var net = require('net')
var webpack = require('webpack');
var config = require("./webpack.config.docs.js");
var WebpackDevServer = require('webpack-dev-server');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

(function createDevServer() {
    var port = parseInt(Math.random() * 10000 + 8000)
    var server = net.createServer();
    server.listen({
        port: port
    }, function () {
        server.close()

        const host = "zuitest.zhichou.com"
        config.entry.index.unshift("webpack-dev-server/client?http://"+host+':'+port);
        config.plugins.push(new OpenBrowserPlugin({url: 'http://'+host+':'+port})); 
        var webpackDevServer = new WebpackDevServer(webpack(config), {
            contentBase: 'build/docs',
        });
        webpackDevServer.listen(port, host);
        console.log('opening webpack-dev-server(http://'+host+':'+port+')...')
    })
    server.on('error', function(err){
        if(err.code=='EADDRINUSE'){
            createDevServer()
        }else{
            console.log(err)
        }
    })
})()
