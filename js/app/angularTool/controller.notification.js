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