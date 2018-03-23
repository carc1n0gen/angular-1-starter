import template from './banner.html';

export default {
  template,
  bindings: {
    heading: '=',
    subheading: '=',
  },
  controller: 'BannerController',
};
