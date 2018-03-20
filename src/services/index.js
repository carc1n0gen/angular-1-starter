import angular from 'angular'

import upperCase from './upperCase'

export default angular.module('app.services', [])
	.service('upperCase', upperCase)
    .name
