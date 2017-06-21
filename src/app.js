import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import './app.scss';
import routing from './app.config';
import services from './services';
import components from './components';
import home from './features/home';
import welcome from './features/welcome';

angular.module('app', [ngRoute, ngResource, services, components, home, welcome])
    .config(routing);
