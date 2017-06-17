const angular = require('angular');

const HomeCtrl = require('./HomeCtrl');
const EncodeCtrl = require('./EncodeCtrl');

angular.module('app').controller('HomeCtrl', HomeCtrl);
angular.module('app').controller('EncodeCtrl', EncodeCtrl);
