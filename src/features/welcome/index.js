import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './welcome.routes';
import WelcomeController from './welcome.controller';

export default angular.module('app.welcome', [ngRoute])
    .config(routing)
    .controller('WelcomeController', WelcomeController)
    .name;
