(function() {

    angular.module('app')
        .controller('angularTool.cropperController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("裁剪");
    }
})();
(function() {

    angular.module('app')
        .controller('angularTool.dragController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("拖拽");
    }
})();
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
(function() {

    angular.module('app')
        .controller('angularTool.notificationController', ['$scope','Core','Notification', HomeController]);

    function HomeController($scope,Core,Notification) {
        var context = $scope;

        context.info = info;
        context.error = error;
        context.success = success;

        function info(){
            Core.Notify.info('提示');
        }
        function error(){
            Core.Notify.error('error');
        }
        function success(){
            Core.Notify.success('success');
        }

        // Notification.info("提示");
        Core.Notify.info('提示');
        Core.Notify.error('error');
        Core.Notify.success('success');
    }
})();
(function() {

    angular.module('app')
        .controller('angularTool.tinymceController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("富文本编辑器");
    }
})();
(function() {

    angular.module('app')
        .controller('angularTool.uploadController', ['$scope','Core', HomeController]);

    function HomeController($scope,Core) {
        var context = $scope;
        console.log("上传");
        context.upload = upload;
        context.onClickUpload = onClickUpload;

        init();

        function init(){
            context.data = {
                img:[]
            };

            context.imgNames = [];
            context.returnImgs = [];
        }

        function upload($files) {
            console.log($files);
            angular.forEach($files, function(value, index) {
                context.data.img.push(value);
                context.imgNames.push(value.name);
            })
        }

        function onClickUpload() {
            context.loading = true;
            if(!context.data.img) {
                Core.Notify.info("请选择图片");
                return;
            }
            //请求两次，是因为其中一次是跨域
            Core.Upload.upload({
                // url: 'http://yueqingfang.cn/markdown/php/imgUpload_batch.php',
                url: 'http://localhost/php/imgUpload22_batch.php',
                data: context.data,
            }).progress(function (evt) {
                ////进度条
                // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

            }).success(function (data, status, headers, config) {
                console.log(data);
                if(data.code == 'success'){
                    Core.Notify.success(data.message);
                    angular.extend(context.returnImgs, data.model);
                    context.data = {
                        img:[]
                    };
                    context.imgNames = [];
                }else{
                    Core.Notify.error(data.message);
                }
                context.loading = false;

            }).error(function (data, status, headers, config) {
                console.log("error");
                console.log(data);
                context.loading = false;
            });
        }
    }
})();