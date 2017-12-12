(function () {
    angular
        .module('app')
        // .controller('hello.helloController', ['$scope', 'Core', HomeController]);
        .controller('user.listController', ['$scope', HomeController]);

    function HomeController($scope, Core) {
        var context = $scope;
        console.log("账号管理");
    }
})();