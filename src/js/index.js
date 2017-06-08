const angular = require('angular');
const angularRoute = require('angular-route');

window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');

angular.module('app', ['ngRoute'])
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
