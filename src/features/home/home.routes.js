import homeTemplate from './home.html';

export default ($routeProvider) => {
    $routeProvider
        .when('/', {
            template: homeTemplate,
            controller: 'HomeController',
            controllerAs: 'home'
        });
}
