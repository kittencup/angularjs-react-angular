(function () {
    angular
        .module('app', [])
        .controller('Test', Test);

    function Test($scope) {

        $scope.a = 1;
        $scope.b = 2;

        $scope.$watch('b',function(newValue,oldValue){
            ++$scope.a;
        })

        $scope.$watch('a',function(newValue,oldValue){
            ++$scope.b;
        })


    }

})();