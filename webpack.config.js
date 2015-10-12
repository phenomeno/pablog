var path = require('path');

module.exports = [{
    entry: path.resolve(__dirname, './app.client.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'client.js'
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /.+\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel?stage=0'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']        
    }
},
{
    entry: path.resolve(__dirname, './app.server.jsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /.+\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel?stage=0'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']        
    }
}]
