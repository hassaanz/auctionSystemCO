// webpack.config.js
var path = require('path');
var nodeModules = path.resolve(__dirname, '../node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../client/app.js')],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'       
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ],
        noParse: [pathToAngular]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'angular': 'angular'
    //     })
    // ],
    resolve: {
    // to simply require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee'],
        alias: {
            'angular': pathToAngular
        }
  }
};