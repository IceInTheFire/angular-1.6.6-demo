(function() {

    angular.module('app')
        .controller('angularTool.tinymceController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("富文本编辑器");
    }
})();