import angular from 'angular';

import home from './home';
import welcome from './welcome';

export default angular.module('app.features', [home, welcome])
  .name;
