import angular from 'angular'
import ngRoute from 'angular-route'
import ngSanitize from 'angular-sanitize'

import routing from './welcome.routes'
import WelcomeController from './welcome.controller'

export default angular.module('app.features.welcome', [ngRoute, ngSanitize])
    .config(routing)
    .controller('WelcomeController', WelcomeController)
    .name
