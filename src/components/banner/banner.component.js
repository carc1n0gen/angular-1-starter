import template from './banner.html';

export default {
    template: template,
    bindings: {
        title: '=',
        subtitle: '='
    },
    controller: 'BannerController',
    controllerAs: 'banner'
};
