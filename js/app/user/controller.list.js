(function () {
    angular
        .module('app')
        // .controller('hello.helloController', ['$scope', 'Core', HomeController]);
        .controller('user.listController', ['$scope','Core', HomeController]);

    function HomeController($scope, Core) {
        var context = $scope;
        console.log("账号管理");

        context.refreshTable = refreshTable;

        init();

        function init(){
            context.params = {
                page:1,
                limit:10
            };
            refreshTable();
        }

        function refreshTable(page){
            console.log(page);
            context.params.page = page || 1;
            Core.Api.NormalApi.User.list(context.params).then(function(response) {
                context.totalPage = response.model.totalPage;
                context.data = response.model.dataList;
            },function(err) {
            });
        }
    }
})();