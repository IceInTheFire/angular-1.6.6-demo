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