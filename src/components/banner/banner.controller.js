export default class BannerController {
  constructor($window) {
    this.$window = $window;
  }

  onClick() {
    this.$window.alert('I got clicked!');
  }
}
