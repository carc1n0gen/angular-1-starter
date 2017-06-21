import template from './welcome.html';

export default ($routeProvider) => {
    $routeProvider
        .when('/welcome/:name', {
            template: template,
            controller: 'WelcomeController',
            controllerAs: 'welcome'
        });
}