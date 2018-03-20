import angular from 'angular'

import BannerController from './banner.controller'
import banner from './banner.component'

export default angular.module('app.components.banner', [])
    .controller('BannerController', BannerController)
    .component('banner', banner)
    .name
