(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.moveUp', ['$scope', 'Core', '$uibModalInstance',HomeController]);

    function HomeController($scope, Core, $uibModalInstance){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            context.data = [
                'red',
                'yellow',
                'green',
                'blue',
                'pink',
                'skyblue',
                'orange',
                '#123456',
                '#d23456',
                '#e457fd',
                '#f457fd',
                '#7457fd',
                '#af57fd',
                '#945744',
                '#f45733',
                '#f45711',
                '#7557fd',
                '#a447fd',
                '#933744',
                '#f22a33',
                '#f11711',
            ];
        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());