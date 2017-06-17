require('./home-page.scss');

module.exports = {
    template: require('./home-page.html'),
    controller: ($scope) => {
        $scope.msg = 'Angular Starter';
    }
};
