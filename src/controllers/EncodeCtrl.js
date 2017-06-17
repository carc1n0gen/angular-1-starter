
module.exports = ($scope, $routeParams) => {
    $scope.encoded = btoa($routeParams['arg']);
};
