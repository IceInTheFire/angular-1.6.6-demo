(function() {

    angular.module('app')
        .controller('angularTool.modalController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("模态框");





        function onClickLook(address) {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "auth-add",
                controller: ['$scope', 'Core', '$uibModalInstance', 'scope', 'address',function($scope, Core, $uibModalInstance,scope,address) {
                    // $scope.ok = ok;
                    $scope.cancel = cancel;
                    $scope.showAddress = address;
                    function ok() {

                        $uibModalInstance.close();
                    }

                    function cancel() {
                        $uibModalInstance.dismiss();
                    }
                }],
                templateUrl: '/dialog/showAddress.html',
                resolve: {
                    scope: function() {
                        return context;
                    },
                    address: function() {
                        return address;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log("确定");
            }, function () {
                console.log("取消");
            });
        };

    }
})();