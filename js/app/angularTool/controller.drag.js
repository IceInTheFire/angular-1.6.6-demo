(function() {

    angular.module('app')
        .controller('angularTool.dragController', ['$scope','Core', HomeController]);

    function HomeController($scope,Core) {
        var context = $scope;
        console.log("拖拽");
        context.onClickLog = onClickLog;
        context.onClickMoveUp = onClickMoveUp;
        context.onClickMoveLeft = onClickMoveLeft;

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

        function onClickLog() {
            console.log(context.data);
        }

        function onClickMoveUp() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogMoveUp",
                controller: 'angularTool.dialog.moveUp',
                templateUrl: './WEB/app/angularTool/dialog/dialog.moveUp.html',
                resolve: {
                }
            });

            modalInstance.result.then(function (data) {
                console.log("你点击了确定");
            }, function (data) {
                console.log("你点击了取消");
            });
        }

        function onClickMoveLeft() {

        }
    }
})();