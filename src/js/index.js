const angular = require('angular');
const angularRoute = require('angular-route');
const angularResource = require('angular-resource');

window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');

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
