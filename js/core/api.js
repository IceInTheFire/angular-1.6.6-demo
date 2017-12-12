/**
 * 接口调用的factory
 *
 *
 * Core.Api.XXX-ApiCalss.XXX-ApiFunctionName({postdata})
 * or Core.Api.NormalApi.XXX-ApiCalss.XXX-ApiFunctionName({postdata})
 *
 */

(function () {
    angular
        .module('app.core')
        .factory('Api', ['$http', '$q', 'Data', 'Notification', Api]);

    function Api($http, $q, Data, Notification) {
        var apiList = {//所有接口list
            Common:{
                getSimpleItemInfo:"/item/simple_share_list_by_ids.html",//获取
            },
        };

        var api = {};//定义一个空对象api

        for (var moduleKey in apiList) {
            var moduleApiList = apiList[moduleKey];
            api[moduleKey] = {};
            for (var functionName in moduleApiList) {
                var config = moduleApiList[functionName];
                api[moduleKey][functionName] = (function (config) {
                    return function () {
                        var action = config;
                        return post(action, arguments[0]);
                    };
                })(config);
            }
        }

        return {
            NormalApi: api,
            post: post,
            get: get
        };

        function transformObjectToUrlencodedData(obj) {
            var p = [];

            for (var key in obj) {

                if (obj.hasOwnProperty(key)) {//obj.hasOwnProperty(key),检测key是否obj自有属性,若果不是自有属性(例如继承的属性,或不存在的属性),返回值false
                    if(!(obj[key]==='' || obj[key] === undefined)){
                        p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
                    }
                }
            }
            return p.join('&');
        }

        function post(api, data) {
            var url = api;
            return $http({
                method: 'POST',
                url: url,
                data: transformObjectToUrlencodedData(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
            }).then(function (response) {
                response = response.data ? response.data : response;
                if(response.code!='success') {
                    Notification.error(response.message);
                }
                else {
                    return response;
                }
                return $q.reject(response);
            }, function (reason) {
                console.log(reason);
                // Notification.error(reason.data.message);
                if(reason.data && reason.data.message) {
                    Notification.error(reason.data.message);
                } else {
                    Notification.error('网络不好');
                }
                return $q.reject({
                    code: 200,
                    response: reason
                })
            });
        }

        function get(url, data) { //调用api,http请求
            var token = Data.getToken();//获取token
            token = token ? token : '';
            return $http({
                dataType: "json",
                method: "GET",
                params: data,
                url: url
            }).then(function (response) {//回调函数
                var response = response.data;
                Notification.error(response.data.message);
                return $q.reject();
            }, function (reason) {
                Notification.error('网络异常');
            });
        }

    }
})();