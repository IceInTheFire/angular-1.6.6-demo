(function() {
    var app = angular.module('app',[
        'ui.router',
        'oc.lazyLoad',
        'app.core',
        'ngFileUpload',
        'ui.bootstrap',     //模态框
        'angular-sortable-view'
    ]);

    app.controller('mainController', ['$scope', '$rootScope', '$state','Core', mainController]);

    function mainController($scope, $rootScope, $state,Core) {
        // $scope.$state = Core.$state;
        var context = $scope;
        context.$state = $state;
        context.onClickExit = onClickExit;

        $rootScope.loading = false;
        context.userData = {
            userName:'冰中焱',
        }



        function onClickExit() {
            console.log('退出登录');
            // Core.Api.normalApi.Logout.logout().then(function(){
            //     location.href="/admin.html";
            // });
        }

        // Core.Api.normalApi.Auth.getAdminUser().then(function(response) {
        //     context.userData = response.data;
        // },function(error){
        //
        // })
        var lazyLoad = {
            cache: {},
            deferred: function (self) {
                return self.all ? self.defer() : $.Deferred()
            },
            promise: function (self, deferred) {
                return self.all ? deferred.promise : deferred.promise()
            },
            when: function (self, deferredList) {
                return self.all ? self.all(deferredList) : $.when.apply($, deferredList)
            },
            css: function (path) {

                var self = this,
                    cache = lazyLoad.cache,
                    deferred = lazyLoad.deferred(self),
                    deferredList = [],
                    callback,
                    preload,
                    $ua = navigator.userAgent;

                if (typeof arguments[1] === 'boolean') {
                    callback = arguments[2];
                    preload = arguments[1];
                } else {
                    callback = arguments[1];
                    preload = arguments[2];
                }

                angular.forEach(path instanceof Array ? path : [path], function (url, deferred, element) {
                    deferred = cache[url] || lazyLoad.deferred(self);
                    deferredList.push(lazyLoad.promise(self, deferred));
                    if (!cache[url]) {
                        element = document.createElement('link');
                        element.rel = 'stylesheet';
                        if (preload) {
                            cache[url] = deferred
                        } else {
                            element.className = 'lazyLoad-stylesheet'
                        }
                        if (/(?:Android);?[\s\/]+([\d.]+)?/i.test($ua) || /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/i.test($ua)) {
                            (function poll(count, loaded) {
                                if (/webkit/i.test($ua)) {
                                    if (element.sheet) {
                                        loaded = true
                                    }
                                } else if (element.sheet) {
                                    try {
                                        if (element.sheet.cssRules) {
                                            loaded = true
                                        }
                                    } catch (ex) {
                                        if (ex.name === 'SecurityError' || ex.code === 1000) {
                                            loaded = true
                                        }
                                    }
                                }
                                if (loaded || (count >= 200)) {
                                    deferred.resolve()
                                } else {
                                    setTimeout(function () {
                                        poll(count + 1)
                                    }, 10)
                                }
                            }(0))
                        } else {
                            element[document.addEventListener ? 'onload' : 'onreadystatechange'] = function (_, isAbort) {
                                if (isAbort || !element.readyState || /loaded|complete/.test(element.readyState)) {
                                    deferred.resolve()
                                }
                            }
                        }
                        element.onerror = function () {
                            deferred.reject(url)
                        };
                        element.setAttribute('charset', 'utf-8');
                        element.setAttribute('type', 'text/css');
                        element.href = url;
                        (document.head || document.getElementsByTagName('head')[0]).appendChild(element);
                    }
                });

                lazyLoad.when(self, deferredList).then(function () {
                    setTimeout(callback || angular.noop);
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                    console.error('lazyLoad-css-error:', arguments[0]);
                });

                return lazyLoad.promise(self, deferred);
            },
            js: function (path) {

                var self = this,
                    cache = lazyLoad.cache,
                    deferred = lazyLoad.deferred(self),
                    deferredList = [],
                    loadList = [],
                    boolean = typeof arguments[1] === 'boolean',
                    callback = boolean ? false : arguments[1],
                    timestamp = boolean && !arguments[1] ? '' : '?_' + (Date.parse(new Date()) / 1000);

                angular.forEach(path instanceof Array ? path : [path], function (url, deferred, element) {
                    deferred = cache[url] || lazyLoad.deferred(self);
                    deferredList.push(lazyLoad.promise(self, deferred));
                    if (!cache[url]) {
                        cache[url] = deferred;
                        loadList.push(url);
                    }
                });

                (function load(index, element, url) {
                    if (url = loadList[index]) {
                        element = document.createElement('script');
                        element[document.addEventListener ? 'onload' : 'onreadystatechange'] = function (_, isAbort) {
                            if (isAbort || !element.readyState || /loaded|complete/.test(element.readyState)) {
                                document.body.removeChild(element);
                                cache[url].resolve();
                                load(index + 1);
                            }
                        };
                        element.onerror = function () {
                            cache[url].reject(url);
                            load(index + 1);
                        };
                        element.setAttribute('charset', 'utf-8');
                        element.src = url + (!/\/(\d(\.\d+)+)\//.test(url) && !/\.js\?/.test(url) && /\.js$/.test(url) ? timestamp : '');
                        document.body.appendChild(element);
                    }
                }(0));

                lazyLoad.when(self, deferredList).then(function () {
                    !boolean && setTimeout(callback || angular.noop);
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                    console.error('lazyLoad-js-error:', arguments[0]);
                });

                return lazyLoad.promise(self, deferred);
            }
        };
        $rootScope.lazyLoad = lazyLoad;
    }

})();


