export default class HomeController {
  constructor($location, $sanitize) {
    this.$location = $location;
    this.$sanitize = $sanitize;
    this.name = '';
    this.msg = 'Angular Starter';
  }

  onSubmit() {
    this.$location.path(`/welcome/${this.$sanitize(this.name)}`);
  }
}
