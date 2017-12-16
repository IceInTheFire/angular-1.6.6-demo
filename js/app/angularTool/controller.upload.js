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