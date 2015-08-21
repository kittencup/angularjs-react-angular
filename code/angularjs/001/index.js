(function () {
    angular
        .module('app', [])
        .controller('Login', Login);

    function Login($scope) {
        $scope.username = '蒋子龙';
        $scope.password = 'dapigu';
    }

})();