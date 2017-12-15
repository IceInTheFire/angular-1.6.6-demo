(function () {
    angular
        .module('app')
        .controller('dialog.confirm', ['$scope', 'Core', '$uibModalInstance','params',HomeController]);

    function HomeController($scope, Core, $uibModalInstance,params){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            context.params = params;
            context.params.header = context.params.header || '确认框';
            // context.loading = true;
        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());