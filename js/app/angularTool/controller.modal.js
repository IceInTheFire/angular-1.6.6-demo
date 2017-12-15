(function() {

    angular.module('app')
        .controller('angularTool.modalController', ['$scope','Core', HomeController]);

    function HomeController($scope, Core) {
        var context = $scope;
        console.log("模态框");

        context.title = "模态框";  //看看模态框有没有带参数过去

        context.onClickModal = onClickModal;
        context.onClickConfirm = onClickConfirm;
        context.onClickConfirm2 = onClickConfirm2;

        function onClickModal() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogDefault",
                controller: 'angularTool.dialog.default',
                templateUrl: './WEB/app/angularTool/dialog/dialog.default.html',
                resolve: {
                    scope: function() {
                        return context;   //带一个scope参数
                    }
                }
            });

            modalInstance.result.then(function (data) {
                console.log("确定");
                console.log("data:",data);
            }, function (data) {
                console.log("取消");
                console.log("data:",data);
            });
        }

        function onClickConfirm() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogConfirm",
                controller: 'dialog.confirm',
                templateUrl: './WEB/dialog/dialog.confirm.html',
                resolve: {
                    scope: function() {
                        return context;   //带一个scope参数
                    },
                    params: function() {
                        return {
                            // header:'确认框',
                            body:'你要点击确定吗？'
                        }
                    }
                }
            });

            modalInstance.result.then(function (data) {
                alert("你点击了确定");
            }, function (data) {
                alert("你点击了取消");
            });
        }

        function onClickConfirm2() {
            var params = {
                header:'',
                body:'你要点击确认框吗？',
                ok:function() {
                    alert("你点击了确认框222")
                },
                cancel:function() {
                    alert("你取消了确认框2222")
                }
            }
            Core.Util.confirm(Core,params);
        }

    }
})();