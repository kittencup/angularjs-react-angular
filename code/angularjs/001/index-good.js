(function () {

    // https://github.com/johnpapa/angular-styleguide

    var APP = angular.module('app', []);

    // service
    APP.service('User', User);

    function User() {
      this.username = '蒋子龙';
      this.password = 'dapigu';
    }


    // controller
    APP.controller('Login', [Login]);

    Login.$inject = ['User'];

    function Login(User) {
        this.username = User.username;
        this.password = User.password;
    }


})();