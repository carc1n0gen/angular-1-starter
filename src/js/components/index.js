const angular = require('angular');

const HomePage = require('./HomePage');
const EncodePage = require('./EncodePage');

angular.module('app').component('appHomePage', HomePage);
angular.module('app').component('appEncodePage', EncodePage);
