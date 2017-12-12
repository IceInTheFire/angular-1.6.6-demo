/**
 * 便捷声明方式
 */
(function () {
    angular
        .module('app.core')
        .config(['NotificationProvider', configNotification])
        // .factory('Core', ['$rootScope', '$window', '$document', '$timeout', '$interval','$filter','$q', '$state','$compile','Foundation', 'Api', 'Const', 'Data','$uibModal','Upload','Notification','Util','mouseEventPosition',Core]);
        .factory('Core', ['$rootScope','Notification','Upload',Core]);
    function configNotification(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 2500,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
    }

    function Core($rootScope,Notification,Upload) {
        console.log("测试下");
        console.log($rootScope);
        // console.log($window);
        // console.log($document);
        // console.log($timeout);
        // console.log($interval);
        // console.log($filter);
        // console.log($q);
        // console.log($state);
        // console.log($compile);
        // console.log(Foundation);
        // console.log(Api);
        console.log("end");

        var Core = {
            init: init,

            // on: Foundation.on,
            // publish: Foundation.publish,
            // go: Foundation.go,
            // goHome: Foundation.goHome,
            // userName: Foundation.userName,

            // $rootScope: $rootScope,
            // $window: $window,
            // $document: $document,
            // $timeout: $timeout,
            // $interval:$interval,
            // $filter:$filter,
            // $q: $q,
            // $state: $state,
            // $compile:$compile,
            // Api: Api,
            // Const: Const,
            // Data: Data,
            // $uibModal:$uibModal,
            Upload:Upload,

            Notify:Notification,

            // Foundation: Foundation,
            // Util: Util,
            // // mouseEventPosition:mouseEventPosition,
            // clone: Foundation.clone,
            // checkIdCard: Foundation.checkIdCard

        };

        return Core;

        function init(){

        }
    }
})();
