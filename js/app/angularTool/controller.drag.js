(function() {

    angular.module('app')
        .controller('angularTool.dragController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("拖拽");
    }
})();