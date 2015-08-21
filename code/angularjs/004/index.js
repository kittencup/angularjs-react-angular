(function () {
    var APP = angular.module('app', []);

    // service
    APP.service('User', User);

    function User() {
        this.username = '蒋子龙';
        this.password = 'dapigu';
    }

    // directive
    APP.directive('login', login);

    function login() {
        return {
            restrict: 'E',
            templateUrl: './login.html',
            replace: true,
            controllerAs: 'login',
            controller: ['User', function (User) {
                this.username = User.username;
                this.password = User.password;
            }]
        };
    }

})();