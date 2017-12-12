(function() {

    angular.module('app')
        .controller('angularTool.cropperController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("裁剪");
    }
})();