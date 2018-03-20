import template from './banner.html'

export default {
    template: template,
    bindings: {
        heading: '=',
        subheading: '='
    },
    controller: 'BannerController'
}
