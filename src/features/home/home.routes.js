import template from './home.html';

export default ($routeProvider) => {
  $routeProvider
    .when('/', {
      template,
      controller: 'HomeController as home',
    });
};
