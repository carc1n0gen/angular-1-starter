export default ($locationProvider, $routeProvider) => {
    // $locationProvider.html5Mode(true); // Havn't fully figured out how this works yet
    $routeProvider.otherwise('/');
}
