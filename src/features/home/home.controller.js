export default class HomeController {
  constructor($window, $sanitize) {
    this.$window = $window;
    this.$sanitize = $sanitize;
    this.name = '';
    this.msg = 'Angular Starter';
  }

  onSubmit() {
    this.$window.location.hash = `!/welcome/${this.$sanitize(this.name)}`;
  }
}
