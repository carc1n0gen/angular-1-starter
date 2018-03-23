import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import './app.scss';
import routing from './app.config';
import services from './services';
import components from './components';
import features from './features';

angular.module('app', [ngRoute, ngResource, services, components, features])
  .config(routing);
