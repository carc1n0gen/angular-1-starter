require('../sass/index.scss');

const angular = require('angular');
require('angular-route');
require('angular-resource');
window.jQuery = window.$ = require('jquery');

angular.module('app', ['ngRoute', 'ngResource'])
    .config(($routeProvider) => {
        $routeProvider
            .when('/home', {
                template: '<app-home-page></app-home-page>'
            })
            .otherwise('/home');
    });

require('./controllers');
require('./components');
require('./services');
