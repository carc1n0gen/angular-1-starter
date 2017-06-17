require('../sass/index.scss');

const angular = require('angular');
require('angular-route');
require('angular-resource');

angular.module('app', ['ngRoute', 'ngResource'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/home', { template: '<app-home-page></app-home-page>' })
            .when('/encode/:arg', { template: '<app-encode-page></app-encode-page>' })
            .otherwise('/home');
    });

require('./controllers');
require('./components');
require('./services');
