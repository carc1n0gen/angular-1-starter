export default ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise('/');
};
