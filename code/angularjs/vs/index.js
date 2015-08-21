(function () {
    var APP = angular.module('app', []);

    var randomMillis = function() {
        return Math.floor(Math.random() * 300);
    }

    var getRandomColor = function(){
        return  '#' +
            (function(color){
                return (color += '0123456789abcdef'[Math.floor(Math.random()*16)])
                && (color.length == 6) ?  color : arguments.callee(color);
            })('');
    }

    APP.directive('tdContent',function(){
        return {
            restrict: 'E',
            template:'<span style="background:{{background}}">{{value.value}}</span>',
            replace: true,
            scope:{
                n:'=',
                m:'='
            },
            controller: ['$scope','$timeout',function ($scope,$timeout) {
                $scope.value =  {value:randomMillis()};
                $scope.background = '#fff';

                $scope.$on('loadAll',function(){
                    var r = randomMillis();
                    $timeout(function(){
                        $scope.value = {value:r};
                        $scope.background = getRandomColor();
                    },0)
                })
            }]
        }
    });

    // controller
    APP.controller('tableController', tableController);

    tableController.$inject = ['$scope'];

    function tableController($scope){

        $scope.range = function(min, max, step){
            if(max < 1){
                return [];
            }
            step = step || 1;
            var input = [];
            for (var i = min; i < max; i += step) input.push(i);
            return input;
        };

        $scope.tr = 0;
        $scope.td = 0;

        $scope.load = function(){
            $scope.tr = 50;
            $scope.td = 50;
        }

        $scope.loadAll = function(){
            $scope.$broadcast('loadAll');
        }

    }

})();