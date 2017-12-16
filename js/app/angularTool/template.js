(function() {

    angular.module('app')
        .controller('angularTool.timeController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;

        context.logTime = logTime;
        console.log("时间控件");

        context.data = {
            time:'2016-12-09 17:11:00'
        };

        function logTime(){
            console.log(context.data);
        }
    }
})();
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
                url: 'http://yueqingfang.cn/markdown/php/imgUpload_batch.php',
                // url: 'http://localhost/php/imgUpload22_batch.php',
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
            console.log("????");
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