/**
 * 常量定义的factory
 */

(function () {
    angular
        .module('app.core')
        .factory('Const', Const);

    function Const() {
        return {
            //******


            // style="max-width: 50px; max-height: 30px;" class="gridpadding" ng-mousemove="grid.appScope.onMouseMove($event)" ng-mouseenter="grid.appScope.onMouseEnter(row.entity)" ng-mouseleave="grid.appScope.onMouseLeave(row.entity)"
            DATA: {
                KEY_USER: 'user-info',
                KEY_PREFIX: 'px.user.data.',
                KEY_TOKEN: 'token',
            },
            ITEMS :{
                type:'type',
                shop:'shop',
                brand:'shop',
                firstCate:'firstCate',
                secondCate:'secondCate'
            },
            INDEX :{
                tabId:'tabId',
                moduleId:'moduleId',
                layoutTypeId:'layoutTypeId'
            },
            TRADE :{
                orderStatus:'orderStatus',
                orderIndex:'orderIndex',
                orderInfos:'orderInfos',
                officialInfos:'officialInfos'
            },

            KEYWORD : {
                type: 'keyword-type',
            },
            community: {
                tinymceBody:'tinymce-body'
            },

            Error: {
                unKnow: 1001,
                system: 1002,
                updateSql: 1003,
                insertSql: 1004,
                upload: 1005,
                unLogin: 2001,
                paramMiss: 2002,
                paramError: 2003,
                userName: 2004,
                userPassword: 2005,
                loginError: 2006,
                labelError: 2007,
                packageUnOut: 2008,
                packageNotExist: 2009,
                orderNotExist: 2010,
                samePassword: 2011,
                errorPassword: 2012,
                packageOut: 2013,
                packageItemUpdate: 2014,
                newPackageIn: 2015,
                packageItemNotExist: 2016,
                packageItemNum: 2017,
                orderCancel: 2018,
                bindPackageFail: 2019,
                packageAlreadyOut: 2020,
                codeValidate: 2022
            },
            ImgUrl: '/item/upload_image.html',
            TextFile: '/idcard/photo/upload.json',
            ImgPrefix: '/idcard/photo/',
            QiNiu: 'http://static.ipingxing.com/'
        }
    }
})();