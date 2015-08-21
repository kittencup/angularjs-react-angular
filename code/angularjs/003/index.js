(function () {
    angular
        .module('app', [])
        .controller('Test', Test);

    function Test($scope,$interval) {

        $scope.i = 0;

        $interval(function(){
            ++$scope.i;
        },1000)
    }

})();