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

        config.entry.index.unshift("webpack-dev-server/client?http://localhost:" + port);
        config.plugins.push(new OpenBrowserPlugin({url: 'http://localhost:' + port}));
        var webpackDevServer = new WebpackDevServer(webpack(config), {
            contentBase: 'build/docs',
        });
        webpackDevServer.listen(port);
        console.log('webpack-dev-server started, listenning at http://localhost:' + port)
        console.log('opening browser... ... please wait... ...')
    })
    server.on('error', function(err){
        if(err.code=='EADDRINUSE'){
            createDevServer()
        }else{
            console.log(err)
        }
    })
})()
