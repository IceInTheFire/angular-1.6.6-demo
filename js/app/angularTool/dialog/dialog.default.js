(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.default', ['$scope', 'Core', '$uibModalInstance','$timeout','scope',HomeController]);

    function HomeController($scope, Core, $uibModalInstance,$timeout,scope){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            console.log("测试");
            console.log("测试2");
            console.log(scope);  //父级传的参数
            context.loading = true;

            context.settime = $timeout(function() {

                context.loading = false;
                $timeout.cancel(context.settime);
            },3000);

        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());