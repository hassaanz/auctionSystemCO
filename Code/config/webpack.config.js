// webpack.config.js
var path = require('path');
var nodeModules = path.resolve(__dirname, '../node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

var deps = [
  'angular/angular.min.js',
  'moment/min/moment.min.js',
  'underscore/underscore-min.js',
];

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../client/app.js')],
    resolve: {
        // to simply require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee'],
        alias: {}
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'bundle.js'       
    },
    module: {
        loaders: [
            // js-babel loader for ES5 awesomeness
            { test: /\.js$/, loader: 'babel'},
            // html / ng-template loader
            {test: /\.html$/, loader: 'ngtemplate!html'},
            // css, less, sass loaders
            { test: /\.sass$/, loader: 'style!css!sass' },
            { test: /\.less$/, loader: 'style!css!less' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style!css' },
            // image loaders
            { test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
            // Font loaders
            { test: /\.woff$/, loader: 'url?limit=100000'},
            { test: /\.woff2$/, loader: 'url?limit=100000'},
            { test: /\.ttf$/, loader: 'url?limit=100000'},
            { test: /\.eot$/, loader: 'file'},
            { test: /\.svg$/, loader: 'url?limit=100000'}
        ],
        noParse: [pathToAngular]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'angular': 'angular'
    //     })
    // ],
    
};

// Run through deps and extract the first part of the path, 
// as that is what you use to require the actual node modules 
// in your code. Then use the complete path to point to the correct
// file and make sure webpack does not try to parse it
deps.forEach(function (dep) {
    var depPath = path.resolve(nodeModulesDir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;