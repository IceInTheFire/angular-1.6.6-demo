(function() {
    console.log("app.config");



    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider','$ocLazyLoadProvider', configRoute])
        // .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider' , configRoute])
        // .config(configRoute)
        .config(['$locationProvider', configSce])
        // .config(configSce)
        // .run(runCore)
        .run(['$rootScope','$state','$ocLazyLoad', runCore]);


    function configRoute($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/welcome/welcome');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        var isProd = window.an.isProd; //是否是发布版本
        var apps = ["welcome","angularTool","user"];

        var dictionary = [];
        var jsJson;
        var cssJson;
        if (isProd) {

            jsJson = {};
            cssJson = {};
            var jsStr = '/template.min.js';
            var cssStr = '/template.min.css';

            jsJson['welcome' + jsStr] = 'welcome/template.min.js';
            cssJson['welcome' + cssStr] = 'welcome/template.min.css';
            jsJson['angularTool' + jsStr] = 'angularTool/template.min.js';
            cssJson['angularTool' + cssStr] = 'angularTool/template.min.css';
            jsJson['user' + jsStr] = 'user/template.min.js';
            cssJson['user' + cssStr] = 'user/template.min.css';


            angular.forEach(apps, function(data, index, array) {
                var item = {};
                item.name = data;
                item.serie = true;
                item.files = [];
                var cssString = cssJson[data + cssStr];
                item.files.push('./css/app/' + cssString);
                var jsString = jsJson[data + jsStr];
                item.files.push(('./js/app/' + jsString));
                dictionary.push(item);
            });

            $ocLazyLoadProvider.config({
                modules: dictionary
            });
            init();
        }
        else {
            angular.forEach(apps, function (data, index, array) {
                var item = {};
                item.name = data;
                item.serie = true;
                item.files = [];
                var cssString = data + '/template.css';
                item.files.push('./css/app/' + cssString);
                var jsString = data + '/template.js';
                item.files.push(('./js/app/' + jsString));
                dictionary.push(item);
            });
            $ocLazyLoadProvider.config({
                modules: dictionary
            });
            init();
        }

        function init() {
            $stateProvider
                .state('welcome', {
                    url: '/welcome',
                    templateUrl: 'WEB/bar/nav.html',
                    // templateUrl: 'WEB/bar/nav2.html',
                    resolve: {
                        store: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('welcome')
                        }]
                    }
                })
                .state('welcome.welcome', {
                    url: '/welcome',
                    templateUrl: 'WEB/app/welcome/welcome.html',
                    controller: 'welcome.welcomeController'
                })
                .state('angularTool', {
                    url: '/angularTool',
                    templateUrl: 'WEB/bar/nav.html',
                    // templateUrl: 'WEB/bar/nav2.html',
                    resolve: {
                        store: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('angularTool')
                        }]
                    }
                })
                .state('angularTool.tinymce', {
                    url: '/tinymce',
                    templateUrl: 'WEB/app/angularTool/tinymce.html',
                    controller: 'angularTool.tinymceController'
                })
                .state('angularTool.modal', {
                    url: '/modal',
                    templateUrl: 'WEB/app/angularTool/modal.html',
                    controller: 'angularTool.modalController'
                })
                .state('angularTool.notification', {
                    url: '/notification',
                    templateUrl: 'WEB/app/angularTool/notification.html',
                    controller: 'angularTool.notificationController'
                })
                .state('angularTool.drag', {
                    url: '/drag',
                    templateUrl: 'WEB/app/angularTool/drag.html',
                    controller: 'angularTool.dragController'
                })
                .state('angularTool.cropper', {
                    url: '/cropper',
                    templateUrl: 'WEB/app/angularTool/cropper.html',
                    controller: 'angularTool.cropperController'
                })
                .state('angularTool.upload', {
                    url: '/upload',
                    templateUrl: 'WEB/app/angularTool/upload.html',
                    controller: 'angularTool.uploadController'
                })
                .state('user', {
                    url: '/user',
                    templateUrl: 'WEB/bar/nav.html',
                    // templateUrl: 'WEB/bar/nav2.html',
                    resolve: {
                        store: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load('user')
                        }]
                    }
                })
                .state('user.list', {
                    url: '/list',
                    templateUrl: 'WEB/app/user/list.html',
                    controller: 'user.listController'
                })
        }


    }

    function configSce($locationProvider) {
        $locationProvider.hashPrefix(''); //去掉angular-ui-router新版本里的!
        //$locationProvider.html5Mode(true);
    }

    function runCore($rootScope, $state, $ocLazyLoad, Core) {
        $rootScope.$state = $state;
    }
})();