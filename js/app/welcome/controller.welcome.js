(function () {
    angular
        .module('app')
        // .controller('welcome.welcomeController', ['$scope', 'Core', HomeController]);
        .controller('welcome.welcomeController', ['$scope','Core', HomeController]);

    function HomeController($scope, Core) {
        console.log("welcome");
        console.log("我进来了没啊")
        console.log(Core);
        // console.log("??")
    }
})();