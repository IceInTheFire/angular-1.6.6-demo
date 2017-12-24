(function() {

    angular.module('app')
        .controller('angularTool.cropperController', ['$scope', HomeController]);

    function HomeController($scope) {
        var context = $scope;
        console.log("裁剪");
        context.imageConfig = {
            bgSrc: 'http://yueqingfang.cn/markdown/php/exportImg.php?imgpath=2017_12_24_17_02_38_0.jpg',
            fgSrc: 'http://yueqingfang.cn/markdown/php/exportImg.php?imgpath=2017_12_24_17_02_38_0.jpg',
            isFg:true
        }
    }
})();