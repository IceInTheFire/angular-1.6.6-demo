(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.moveLeft', ['$scope', 'Core', '$uibModalInstance',HomeController]);

    function HomeController($scope, Core, $uibModalInstance){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {

        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());