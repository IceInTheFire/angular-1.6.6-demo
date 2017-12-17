(function () {
    angular
        .module('app')
        // .controller('hello.helloController', ['$scope', 'Core', HomeController]);
        .controller('user.listController', ['$scope','Core', HomeController]);

    function HomeController($scope, Core) {
        var context = $scope;
        console.log("账号管理");
        context.loading = true;
        Core.Api.NormalApi.User.list({}).then(function(response) {
            context.data = response.model.dataList;
            context.loading = false;
        },function(err) {
            context.loading = false;
        });
        // Core.Api.User.list({}).then(function(response){
        //
        // },function(error) {
        //
        // });
    }
})();