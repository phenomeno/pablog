var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app.jsx'),
    loader: 'babel',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /.+\.jsx$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']        
    }
}
