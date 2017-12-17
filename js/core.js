/*
* 一切的开始
* */
(function () {
    angular
        .module('app.core', ['LocalStorageModule','ui-notification']);
})();

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
/**
 * 本地数据调用的factory
 */
(function () {
    angular
        .module('app.core')
        .factory('Data', ['localStorageService', 'Const', Data]);

    function Data(localStorageService, Const) {
        return {
            getUser: getUser,
            setUser: setUser,
            getToken: getToken,
            setToken: setToken,
            get: get,
            set: set,
            clearLocalData: clearLocalData,
            setItemType:setItemType,
            getItemType:getItemType,
            setItemBrand:setItemBrand,
            getItemBrand:getItemBrand,
            setItemShop:setItemShop,
            getItemShop:getItemShop,
            setItemFirstCate:setItemFirstCate,
            getItemFirstCate:getItemFirstCate,
            setItemSecondCate:setItemSecondCate,
            getItemSecondCate:getItemSecondCate,
            setIndexTabType:setIndexTabType,
            getIndexTabType:getIndexTabType,
            setIndexModuleType:setIndexModuleType,
            getIndexModuleType:getIndexModuleType,
            setIndexLayoutType:setIndexLayoutType,
            getIndexLayoutType:getIndexLayoutType,
            setOrderStatus:setOrderStatus,
            getOrderStatus:getOrderStatus,
            setOrderIndex:setOrderIndex,
            getOrderIndex:getOrderIndex,
            setOrderInfos:setOrderInfos,
            getOrderInfos:getOrderInfos,
            setOrderdetailSetOrderOfficial:setOrderdetailSetOrderOfficial,
            getOrderdetailSetOrderOfficial:getOrderdetailSetOrderOfficial,
            setKeywordType:setKeywordType,
            getKeywordType:getKeywordType,
            setTinymceBody: setTinymceBody,
            getTinymceBody: getTinymceBody,


        };

        function clearLocalData() {
            localStorageService.clearAll();
        }

        function getKey(key) {
            return Const.DATA.KEY_PREFIX + key;
        }

        function removeKey(key) {
            localStorageService.removeItem(key);
        }

        function get(key) {
            key = getKey(key);
            return localStorageService.get(key);
        }

        function set(key, val) {
            key = getKey(key);
            return localStorageService.set(key, val);
        }

        function getToken() {
            var key = Const.DATA.KEY_TOKEN;
            return get(key);
        }

        function setToken(token) {
            var key = Const.DATA.KEY_TOKEN;
            set(key, token);
        }

        function getUser() {
            var key = Const.DATA.KEY_USER;
            return get(key);
        }

        function setUser(user) {
            var key = Const.DATA.KEY_USER;
            return set(key, user);
        }
        function setItemType(type) {
            var key = Const.ITEMS.type;
            return set(key, type);
        };
        function getItemType() {
            var key = Const.ITEMS.type;
            return get(key);
        };
        function setItemBrand(brand) {
            var key = Const.ITEMS.brand;
            return set(key, brand);
        };
        function getItemBrand() {
            var key = Const.ITEMS.brand;
            return get(key);
        };
        function setItemShop(shop) {
            var key = Const.ITEMS.shop;
            return set(key, shop);
        };
        function getItemShop() {
            var key = Const.ITEMS.shop;
            return get(key);
        };
        function setItemFirstCate(firstCate) {
            var key = Const.ITEMS.firstCate;
            return set(key, firstCate);
        };
        function getItemFirstCate() {
            var key = Const.ITEMS.firstCate;
            return get(key);
        };
        function setItemSecondCate(secondCate) {
            var key = Const.ITEMS.secondCate;
            return set(key, secondCate);
        };
        function getItemSecondCate() {
            var key = Const.ITEMS.secondCate;
            return get(key);
        };
        function setIndexTabType(tabId) {
            var key = Const.INDEX.tabId;
            return set(key, tabId);
        };
        function getIndexTabType() {
            var key = Const.INDEX.tabId;
            return get(key);
        };
        function setIndexModuleType(moduleId) {
            var key = Const.INDEX.moduleId;
            return set(key, moduleId);
        };
        function getIndexModuleType() {
            var key = Const.INDEX.moduleId;
            return get(key);
        };
        function setIndexLayoutType(layoutTypeId) {
            var key = Const.INDEX.layoutTypeId;
            return set(key, layoutTypeId);
        };
        function getIndexLayoutType() {
            var key = Const.INDEX.layoutTypeId;
            return get(key);
        };
        function setOrderStatus(orderStatus) {
            var key = Const.TRADE.orderStatus;
            return set(key, orderStatus);
        };
        function getOrderStatus() {
            var key = Const.TRADE.orderStatus;
            return get(key);
        };
        function setOrderIndex(orderIndex) {
            var key = Const.TRADE.orderIndex;
            return set(key, orderIndex);
        };
        function getOrderIndex() {
            var key = Const.TRADE.orderIndex;
            return get(key);
        };
        function setOrderInfos(orderInfos) {
            var key = Const.TRADE.orderInfos;
            return set(key, orderInfos);
        };
        function getOrderInfos() {
            var key = Const.TRADE.orderInfos;
            return get(key);
        };
        function setOrderdetailSetOrderOfficial(officialInfos) {
            var key = Const.TRADE.officialInfos;
            return set(key, officialInfos);
        };
        function getOrderdetailSetOrderOfficial() {
            var key = Const.TRADE.officialInfos;
            return get(key);
        };
        function setKeywordType(type) {
            var key = Const.KEYWORD.type;
            return set(key, type);
        };
        function getKeywordType() {
            var key = Const.KEYWORD.type;
            return get(key);
        };

        function setTinymceBody(body) {
            var key = Const.community.tinymceBody;
            return set(key, body);
        };

        function getTinymceBody() {
            var key = Const.community.tinymceBody;
            return get(key);
        }

    }
})();
/**
 * Created by dd on 12/26/15.
 */
(function () {
    angular
        .module('app.core')
        .factory('Util', ['$window', '$state', Util]);

    function Util($window, $state) {

        return {
            url: url,
            getRequestParams: getRequestParams,
            getRequestParam: getRequestParam,
            go: go,
            goToRoute: goToRoute,
            getCurrentPage: getCurrentPage,
            getCurrentPath: getCurrentPath,
            getCurrentRoute: getCurrentRoute,
            canGuestVisit: canGuestVisit,
            time: time,
            installWindowScrollEventListener: installWindowScrollEventListener,
            uninstallWindowScrollEventListener: uninstallWindowScrollEventListener,
            timeFormat: timeFormat,
            parseAttachments2Str:parseAttachments2Str,
            getTimestamp: getTimestamp,
            containsKey: containsKey,
            getDate: getDate,
            dateDiff: dateDiff,
            date: date,
            sprintf: sprintf,
            inArray: in_array,
            isMobile:isMobile,
            ltrim: ltrim,
            rtrim: rtrim,
            trim: trim,
            clone:clone,
            movePoint : movePoint,
            checkImg : checkImg,
            imgPosition : getImgPosition,
            getStringLength: getStringLength,
            getNormalDate: getNormalDate,
            unicodeAbc:unicodeAbc,
            confirm:confirm
        };

        function getNormalDate() {
            var date = new Date(Date.now());
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            if(month<10) {
                month = '0' + month;
            }

            var day = date.getDate();
            if(day<10) {
                day = '0' + day;
            }

            return '' + year + month + day;
        }

        function getStringLength(str) {
            var bytesCount = 0;
            for (var i = 0; i < str.length; i++)
            {
                var c = str.charAt(i);
                if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
                {
                    bytesCount += 1;
                }
                else
                {
                    bytesCount += 2;
                }
            }
            return bytesCount/2;
        }

        function getImgPosition(mouseEvent){
            var result = {
                x: 0,
                y: 0,
                relativeX: 0,
                relativeY: 0,
                currentDomId: ""
            };

            if (!mouseEvent){
                mouseEvent = window.event;
            }

            if (mouseEvent.pageX || mouseEvent.pageY){
                result.x = mouseEvent.pageX;
                result.y = mouseEvent.pageY;
            }
            else if (mouseEvent.clientX || mouseEvent.clientY){
                result.x = mouseEvent.clientX + document.body.scrollLeft +
                    document.documentElement.scrollLeft;
                result.y = mouseEvent.clientY + document.body.scrollTop +
                    document.documentElement.scrollTop;
            }

            result.relativeX = result.x;
            result.relativeY = result.y;

            if (mouseEvent.target){
                var offEl = mouseEvent.target;
                var offX = 0;
                var offY = 0;
                if (typeof(offEl.offsetParent) != "undefined"){
                    while (offEl){
                        offX += offEl.offsetLeft;
                        offY += offEl.offsetTop;
                        offEl = offEl.offsetParent;
                    }
                }
                else{
                    offX = offEl.x;
                    offY = offEl.y;
                }

                result.relativeX -= offX;
                result.relativeY -= offY;
            }
            result.currentDomId = mouseEvent.target.id;

            return result;

        }

        function checkImg(imgId) {
            var txtImg = document.getElementById(imgId);
            var img = new Image();
            img.src = txtImg.src;
            return img.width/img.height;
        }

        function url(url, params)
        {
            var queryString = '';
            for (var key in params)
            {
                var value = params[key];
                queryString += (encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&');
            }
            queryString = trim(queryString, '&');
            return url + '?' + queryString;
        }

        function getRequestParams()
        {
            var queryString = trim($window.location.search, '?');
            var params = {};
            var paramList = queryString.split('&');
            for (var i in paramList)
            {
                var kv = paramList[i];
                var kvList = kv.split('=');
                if (kvList.length == 2)
                {
                    var key = decodeURIComponent(kvList[0]);
                    params[key] = decodeURIComponent(kvList[1]);
                }
            }

            return params;
        }

        function getRequestParam(key)
        {
            var params = getRequestParams();
            if (params.hasOwnProperty(key))
            {
                return params[key];
            }

            return undefined;
        }

        function go(path) {
            var pathname = $window.location.pathname;
            pathname = trim(pathname, '/');
            var paths = pathname.split('/');
            if (paths.length > 0) {
                paths.splice(paths.length - 1, 1);
            }

            path = sprintf('%s/%s', paths.join('/'), path);
            path = trim(path, '/');
            path = sprintf('%s//%s/%s', $window.location.protocol, $window.location.host, path);

            $window.location.href = path;
        }

        function goToRoute(route) {
            var routes = route.split('#');
            if (routes.length > 2) {
                Log.e(sprintf('invalid route: %s', route));
                return;
            }

            var page = routes[0];
            // page = trim(page, '.html');
            var endHtmlIndex = page.indexOf('.html');
            if (endHtmlIndex >= 0 && endHtmlIndex + 5 == page.length)
            {
                page = page.substring(0, endHtmlIndex);
            }
            page = page + '.html';
            var controller;
            if (routes.length == 2) {
                controller = routes[1];
            }
            var path = controller ? sprintf('%s#!/%s', page, controller) : page;
            go(path);
        }

        function getCurrentPage() {
            var pathname = $window.location.pathname;
            pathname = rtrim(pathname, '/');
            var paths = pathname.split('/');

            return paths.length > 0 ? paths[paths.length - 1] : undefined;
        }

        function getCurrentPath() {
            var currentPage = getCurrentPage();
            if (currentPage) {
                return rtrim(currentPage, '.html');
            }
        }

        function getCurrentControllerPath() {
            var hash = $window.location.hash;
            hash = trim(hash);
            hash = trim(hash, '#!/');
            hash = trim(hash, '/');
            return hash;
        }

        function getCurrentRoute() {
            var path = getCurrentPath();
            var controllerPath = getCurrentControllerPath();
            if (path) {
                return path + '#' + controllerPath;
            }
        }

        function canGuestVisit() {
            var currentState = $state.current;
            if (!currentState) {
                return false;
            }
            var stateName = currentState.name;

            return in_array(stateName, Config.STATE_LIST_GUEST_CAN_VISIT);
        }

        function isWindowScrollToBottom() {
            var offset = $window.document.body.offsetHeight - $window.scrollY - $window.innerHeight;
            return offset < 3;
        }

        function installWindowScrollEventListener(callback) {
            $window.onscroll = function () {
                if (isWindowScrollToBottom() && callback) {
                    callback();
                }
            };
        }

        function uninstallWindowScrollEventListener() {
            $window.onscroll = undefined;
        }


        function clone(obj) {
            var o;
            if (typeof obj == "object") {
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(clone(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var j in obj) {
                            o[j] = clone(obj[j]);
                        }
                    }
                }
            } else {
                o = obj;
            }
            return o;
        }

        function time() {
            return parseInt(new Date().getTime() / 1000, 10);
        }

        function parseAttachments2Str(attachments) {
            var str='';
            for (var i in attachments) {
                str += attachments[i].name + "#" + attachments[i].file_name + ","
            }
            return str

        }

        function containsKey(object, keys) {
            if (!object) {
                return false;
            }

            if (!(keys instanceof Array)) {
                keys = ['' + keys];
            }

            for (var i in keys) {
                var key = keys[i];
                if (object[key] === undefined) {
                    Log.e(object);
                    Log.e(keys);
                    Log.e('invalid option, key ' + key + ' undefined');
                    return false;
                }
            }

            return true;
        }

        function timeFormat(time) {
            return date('Y-m-d H:i:s', time);
        }

        function getTimestamp(time) {
            return parseInt(time.getTime() / 1000, 10);
        }

        function isMobile(phone) {

            phone = phone + "";

            if (phone.length != 11) {
                return false;
            }

            var myReg = /^(((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/;
            if (!myReg.exec(phone)) {
                return false;
            }

            return true;
        }

        function getDate(unix) {
            var now = new Date(parseInt(unix) * 1000).toLocaleDateString();
            //return now.toLocaleDateString(); 
            return now;
        }

        function dateDiff(dateTimeStamp) {
            var minute = 1000 * 60;
            var hour = minute * 60;
            var day = hour * 24;
            var month = day * 30;
            var diffValue = new Date().getTime() - dateTimeStamp * 1000;
            var monthC = diffValue / month;
            var weekC = diffValue / (7 * day);
            var dayC = diffValue / day;
            var hourC = diffValue / hour;
            var minC = diffValue / minute;
            var result;
            if (monthC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (weekC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (dayC >= 1) {
                result = date('m-d', dateTimeStamp);
            }
            else if (hourC >= 1) {
                result = date('m-d H:i', dateTimeStamp);
            }
            else if (minC >= 1) {
                result = parseInt(minC) + "分钟前";
            } else {
                result = "刚刚";
            }
            return result;
        }

        function date(format, timestamp) {
            //  discuss at: http://phpjs.org/functions/date/
            // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
            // original by: gettimeofday
            //    parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: MeEtc (http://yass.meetcweb.com)
            // improved by: Brad Touesnard
            // improved by: Tim Wiel
            // improved by: Bryan Elliott
            // improved by: David Randall
            // improved by: Theriault
            // improved by: Theriault
            // improved by: Brett Zamir (http://brett-zamir.me)
            // improved by: Theriault
            // improved by: Thomas Beaucourt (http://www.webapp.fr)
            // improved by: JT
            // improved by: Theriault
            // improved by: Rafał Kukawski (http://blog.kukawski.pl)
            // improved by: Theriault
            //    input by: Brett Zamir (http://brett-zamir.me)
            //    input by: majak
            //    input by: Alex
            //    input by: Martin
            //    input by: Alex Wilson
            //    input by: Haravikk
            // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: majak
            // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            // bugfixed by: omid (http://phpjs.org/functions/380:380#comment_137122)
            // bugfixed by: Chris (http://www.devotis.nl/)
            //        note: Uses global: php_js to store the default timezone
            //        note: Although the function potentially allows timezone info (see notes), it currently does not set
            //        note: per a timezone specified by date_default_timezone_set(). Implementers might use
            //        note: this.php_js.currentTimezoneOffset and this.php_js.currentTimezoneDST set by that function
            //        note: in order to adjust the dates in this function (or our other date functions!) accordingly
            //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400);
            //   returns 1: '09:09:40 m is month'
            //   example 2: date('F j, Y, g:i a', 1062462400);
            //   returns 2: 'September 2, 2003, 2:26 am'
            //   example 3: date('Y W o', 1062462400);
            //   returns 3: '2003 36 2003'
            //   example 4: x = date('Y m d', (new Date()).getTime()/1000);
            //   example 4: (x+'').length == 10 // 2009 01 09
            //   returns 4: true
            //   example 5: date('W', 1104534000);
            //   returns 5: '53'
            //   example 6: date('B t', 1104534000);
            //   returns 6: '999 31'
            //   example 7: date('W U', 1293750000.82); // 2010-12-31
            //   returns 7: '52 1293750000'
            //   example 8: date('W', 1293836400); // 2011-01-01
            //   returns 8: '52'
            //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
            //   returns 9: '52 2011-01-02'

            var that = this;
            var jsdate, f;
            // Keep this here (works, but for code commented-out below for file size reasons)
            // var tal= [];
            var txt_words = [
                'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            // trailing backslash -> (dropped)
            // a backslash followed by any character (including backslash) -> the character
            // empty string -> empty string
            var formatChr = /\\?(.?)/gi;
            var formatChrCb = function (t, s) {
                return f[t] ? f[t]() : s;
            };
            var _pad = function (n, c) {
                n = String(n);
                while (n.length < c) {
                    n = '0' + n;
                }
                return n;
            };
            f = {
                // Day
                d: function () { // Day of month w/leading 0; 01..31
                    return _pad(f.j(), 2);
                },
                D: function () { // Shorthand day name; Mon...Sun
                    return f.l()
                        .slice(0, 3);
                },
                j: function () { // Day of month; 1..31
                    return jsdate.getDate();
                },
                l: function () { // Full day name; Monday...Sunday
                    return txt_words[f.w()] + 'day';
                },
                N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
                    return f.w() || 7;
                },
                S: function () { // Ordinal suffix for day of month; st, nd, rd, th
                    var j = f.j();
                    var i = j % 10;
                    if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
                        i = 0;
                    }
                    return ['st', 'nd', 'rd'][i - 1] || 'th';
                },
                w: function () { // Day of week; 0[Sun]..6[Sat]
                    return jsdate.getDay();
                },
                z: function () { // Day of year; 0..365
                    var a = new Date(f.Y(), f.n() - 1, f.j());
                    var b = new Date(f.Y(), 0, 1);
                    return Math.round((a - b) / 864e5);
                },

                // Week
                W: function () { // ISO-8601 week number
                    var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
                    var b = new Date(a.getFullYear(), 0, 4);
                    return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
                },

                // Month
                F: function () { // Full month name; January...December
                    return txt_words[6 + f.n()];
                },
                m: function () { // Month w/leading 0; 01...12
                    return _pad(f.n(), 2);
                },
                M: function () { // Shorthand month name; Jan...Dec
                    return f.F()
                        .slice(0, 3);
                },
                n: function () { // Month; 1...12
                    return jsdate.getMonth() + 1;
                },
                t: function () { // Days in month; 28...31
                    return (new Date(f.Y(), f.n(), 0))
                        .getDate();
                },

                // Year
                L: function () { // Is leap year?; 0 or 1
                    var j = f.Y();
                    return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
                },
                o: function () { // ISO-8601 year
                    var n = f.n();
                    var W = f.W();
                    var Y = f.Y();
                    return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
                },
                Y: function () { // Full year; e.g. 1980...2010
                    return jsdate.getFullYear();
                },
                y: function () { // Last two digits of year; 00...99
                    return f.Y()
                        .toString()
                        .slice(-2);
                },

                // Time
                a: function () { // am or pm
                    return jsdate.getHours() > 11 ? 'pm' : 'am';
                },
                A: function () { // AM or PM
                    return f.a()
                        .toUpperCase();
                },
                B: function () { // Swatch Internet time; 000..999
                    var H = jsdate.getUTCHours() * 36e2;
                    // Hours
                    var i = jsdate.getUTCMinutes() * 60;
                    // Minutes
                    var s = jsdate.getUTCSeconds(); // Seconds
                    return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
                },
                g: function () { // 12-Hours; 1..12
                    return f.G() % 12 || 12;
                },
                G: function () { // 24-Hours; 0..23
                    return jsdate.getHours();
                },
                h: function () { // 12-Hours w/leading 0; 01..12
                    return _pad(f.g(), 2);
                },
                H: function () { // 24-Hours w/leading 0; 00..23
                    return _pad(f.G(), 2);
                },
                i: function () { // Minutes w/leading 0; 00..59
                    return _pad(jsdate.getMinutes(), 2);
                },
                s: function () { // Seconds w/leading 0; 00..59
                    return _pad(jsdate.getSeconds(), 2);
                },
                u: function () { // Microseconds; 000000-999000
                    return _pad(jsdate.getMilliseconds() * 1000, 6);
                },

                // Timezone
                e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
                    // The following works, but requires inclusion of the very large
                    // timezone_abbreviations_list() function.
                    /*              return that.date_default_timezone_get();
                     */
                    throw 'Not supported (see source code of date() for timezone on how to add support)';
                },
                I: function () { // DST observed?; 0 or 1
                    // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
                    // If they are not equal, then DST is observed.
                    var a = new Date(f.Y(), 0);
                    // Jan 1
                    var c = Date.UTC(f.Y(), 0);
                    // Jan 1 UTC
                    var b = new Date(f.Y(), 6);
                    // Jul 1
                    var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
                    return ((a - c) !== (b - d)) ? 1 : 0;
                },
                O: function () { // Difference to GMT in hour format; e.g. +0200
                    var tzo = jsdate.getTimezoneOffset();
                    var a = Math.abs(tzo);
                    return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                P: function () { // Difference to GMT w/colon; e.g. +02:00
                    var O = f.O();
                    return (O.substr(0, 3) + ':' + O.substr(3, 2));
                },
                T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
                    // The following works, but requires inclusion of the very
                    // large timezone_abbreviations_list() function.
                    /*              var abbr, i, os, _default;
                     if (!tal.length) {
                     tal = that.timezone_abbreviations_list();
                     }
                     if (that.php_js && that.php_js.default_timezone) {
                     _default = that.php_js.default_timezone;
                     for (abbr in tal) {
                     for (i = 0; i < tal[abbr].length; i++) {
                     if (tal[abbr][i].timezone_id === _default) {
                     return abbr.toUpperCase();
                     }
                     }
                     }
                     }
                     for (abbr in tal) {
                     for (i = 0; i < tal[abbr].length; i++) {
                     os = -jsdate.getTimezoneOffset() * 60;
                     if (tal[abbr][i].offset === os) {
                     return abbr.toUpperCase();
                     }
                     }
                     }
                     */
                    return 'UTC';
                },
                Z: function () { // Timezone offset in seconds (-43200...50400)
                    return -jsdate.getTimezoneOffset() * 60;
                },

                // Full Date/Time
                c: function () { // ISO-8601 date.
                    return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
                },
                r: function () { // RFC 2822
                    return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
                },
                U: function () { // Seconds since UNIX epoch
                    return jsdate / 1000 | 0;
                }
            };
            this.date = function (format, timestamp) {
                that = this;
                jsdate = (timestamp === undefined ? new Date() : // Not provided
                        (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                            new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
                );
                return format.replace(formatChr, formatChrCb);
            };
            return this.date(format, timestamp);
        }

        function sprintf() {
            //  discuss at: http://phpjs.org/functions/sprintf/
            // original by: Ash Searle (http://hexmen.com/blog/)
            // improved by: Michael White (http://getsprink.com)
            // improved by: Jack
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Dj
            // improved by: Allidylls
            //    input by: Paulo Freitas
            //    input by: Brett Zamir (http://brett-zamir.me)
            //   example 1: sprintf("%01.2f", 123.1);
            //   returns 1: 123.10
            //   example 2: sprintf("[%10s]", 'monkey');
            //   returns 2: '[    monkey]'
            //   example 3: sprintf("[%'#10s]", 'monkey');
            //   returns 3: '[####monkey]'
            //   example 4: sprintf("%d", 123456789012345);
            //   returns 4: '123456789012345'
            //   example 5: sprintf('%-03s', 'E');
            //   returns 5: 'E00'

            var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
            var a = arguments;
            var i = 0;
            var format = a[i++];

            // pad()
            var pad = function (str, len, chr, leftJustify) {
                if (!chr) {
                    chr = ' ';
                }
                var padding = (str.length >= len) ? '' : new Array(1 + len - str.length >>> 0)
                        .join(chr);
                return leftJustify ? str + padding : padding + str;
            };

            // justify()
            var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                var diff = minWidth - value.length;
                if (diff > 0) {
                    if (leftJustify || !zeroPad) {
                        value = pad(value, minWidth, customPadChar, leftJustify);
                    } else {
                        value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                    }
                }
                return value;
            };

            // formatBaseX()
            var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                // Note: casts negative numbers to positive ones
                var number = value >>> 0;
                prefix = prefix && number && {
                        '2': '0b',
                        '8': '0',
                        '16': '0x'
                    }[base] || '';
                value = prefix + pad(number.toString(base), precision || 0, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            };

            // formatString()
            var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                if (precision != null) {
                    value = value.slice(0, precision);
                }
                return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
            };

            // doFormat()
            var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                var number, prefix, method, textTransform, value;

                if (substring === '%%') {
                    return '%';
                }

                // parse flags
                var leftJustify = false;
                var positivePrefix = '';
                var zeroPad = false;
                var prefixBaseX = false;
                var customPadChar = ' ';
                var flagsl = flags.length;
                for (var j = 0; flags && j < flagsl; j++) {
                    switch (flags.charAt(j)) {
                        case ' ':
                            positivePrefix = ' ';
                            break;
                        case '+':
                            positivePrefix = '+';
                            break;
                        case '-':
                            leftJustify = true;
                            break;
                        case "'":
                            customPadChar = flags.charAt(j + 1);
                            break;
                        case '0':
                            zeroPad = true;
                            customPadChar = '0';
                            break;
                        case '#':
                            prefixBaseX = true;
                            break;
                    }
                }

                // parameters may be null, undefined, empty-string or real valued
                // we want to ignore null, undefined and empty-string values
                if (!minWidth) {
                    minWidth = 0;
                } else if (minWidth === '*') {
                    minWidth = +a[i++];
                } else if (minWidth.charAt(0) == '*') {
                    minWidth = +a[minWidth.slice(1, -1)];
                } else {
                    minWidth = +minWidth;
                }

                // Note: undocumented perl feature:
                if (minWidth < 0) {
                    minWidth = -minWidth;
                    leftJustify = true;
                }

                if (!isFinite(minWidth)) {
                    throw new Error('sprintf: (minimum-)width must be finite');
                }

                if (!precision) {
                    precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                } else if (precision === '*') {
                    precision = +a[i++];
                } else if (precision.charAt(0) == '*') {
                    precision = +a[precision.slice(1, -1)];
                } else {
                    precision = +precision;
                }

                // grab value using valueIndex if required?
                value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                switch (type) {
                    case 's':
                        return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                    case 'c':
                        return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                    case 'b':
                        return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'o':
                        return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'x':
                        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'X':
                        return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad)
                            .toUpperCase();
                    case 'u':
                        return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                    case 'i':
                    case 'd':
                        number = +value || 0;
                        number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                        prefix = number < 0 ? '-' : positivePrefix;
                        value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad);
                    case 'e':
                    case 'E':
                    case 'f': // Should handle locales (as per setlocale)
                    case 'F':
                    case 'g':
                    case 'G':
                        number = +value;
                        prefix = number < 0 ? '-' : positivePrefix;
                        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                        value = prefix + Math.abs(number)[method](precision);
                        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                    default:
                        return substring;
                }
            };

            return format.replace(regex, doFormat);
        }

        function in_array(needle, haystack, argStrict) {
            //  discuss at: http://phpjs.org/functions/in_array/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: vlado houba
            // improved by: Jonas Sciangula Street (Joni2Back)
            //    input by: Billy
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
            //   returns 1: true
            //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
            //   returns 2: false
            //   example 3: in_array(1, ['1', '2', '3']);
            //   example 3: in_array(1, ['1', '2', '3'], false);
            //   returns 3: true
            //   returns 3: true
            //   example 4: in_array(1, ['1', '2', '3'], true);
            //   returns 4: false

            var key = '',
                strict = !!argStrict;

            //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
            //in just one for, in order to improve the performance
            //deciding wich type of comparation will do before walk array
            if (strict) {
                for (key in haystack) {
                    if (haystack[key] === needle) {
                        return true;
                    }
                }
            } else {
                for (key in haystack) {
                    if (haystack[key] == needle) {
                        return true;
                    }
                }
            }

            return false;
        }

        function trim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/trim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: mdsjack (http://www.mdsjack.bo.it)
            // improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // improved by: Steven Levithan (http://blog.stevenlevithan.com)
            // improved by: Jack
            //    input by: Erkekjetter
            //    input by: DxGx
            // bugfixed by: Onno Marsman
            //   example 1: trim('    Kevin van Zonneveld    ');
            //   returns 1: 'Kevin van Zonneveld'
            //   example 2: trim('Hello World', 'Hdle');
            //   returns 2: 'o Wor'
            //   example 3: trim(16, 1);
            //   returns 3: 6

            var whitespace, l = 0,
                i = 0;
            str += '';

            if (!charlist) {
                // default list
                whitespace =
                    ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
            } else {
                // preg_quote custom list
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            }

            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }

            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }

            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        }

        function ltrim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/ltrim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            //    input by: Erkekjetter
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Onno Marsman
            //   example 1: ltrim('    Kevin van Zonneveld    ');
            //   returns 1: 'Kevin van Zonneveld    '

            charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
                    .replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('^[' + charlist + ']+', 'g');
            return (str + '')
                .replace(re, '');
        }

        function rtrim(str, charlist) {
            //  discuss at: http://phpjs.org/functions/rtrim/
            // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            //    input by: Erkekjetter
            //    input by: rem
            // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // bugfixed by: Onno Marsman
            // bugfixed by: Brett Zamir (http://brett-zamir.me)
            //   example 1: rtrim('    Kevin van Zonneveld    ');
            //   returns 1: '    Kevin van Zonneveld'

            charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
                    .replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\\$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '')
                .replace(re, '');
        }

        function movePoint(string,scale)
        {
            if (scale >= 0)
                return movePointRight(string, scale);
            else
                return movePointLeft(string, -scale);
        }

        function movePointLeft(string, scale)
        {
            var s, s1, s2, ch, ps, sign;
            ch = '.';
            sign = '';
            s = string ? string : "";

            if (scale <= 0) return s;
            ps = s.split('.');
            s1 = ps[0] ? ps[0] : "";
            s2 = ps[1] ? ps[1] : "";
            if (s1.slice(0, 1) == '-')
            {
                s1 = s1.slice(1);
                sign = '-';
            }
            if (s1.length <= scale)
            {
                ch = "0.";
                s1 = padLeft(s1, scale);
            }
            return sign + s1.slice(0, -scale) + ch + s1.slice(-scale) + s2;
        }

        function movePointRight(string, scale)
        {
            var s, s1, s2, ch, ps;
            ch = '.';
            s = string ? string : "";

            if (scale <= 0) return s;
            ps = s.split('.');
            s1 = ps[0] ? ps[0] : "";
            s2 = ps[1] ? ps[1] : "";
            if (s2.length <= scale)
            {
                ch = '';
                s2 = padRight(s2 ,scale);
            }
            return s1 + s2.slice(0, scale) + ch + s2.slice(scale, s2.length);
        }

        function padRight(string, nSize, ch)
        {
            var len = 0;
            var s = string ? string : "";
            ch = ch ? ch : '0';// 默认补0

            len = s.length;
            while (len < nSize)
            {
                s = s + ch;
                len++;
            }
            return s;
        }

        function padLeft(string, nSize, ch)
        {
            var len = 0;
            var s = string ? string : "";
            ch = ch ? ch : '0';// 默认补0

            len = s.length;
            while (len < nSize)
            {
                s = ch + s;
                len++;
            }
            return s;
        }

        function unicodeAbc() {
            var data = [];
            for(var i = 65;i<=90;i++){
                data.push(String.fromCharCode(i))
            }
            return data;
        }

        function confirm(Core,params) {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogConfirm",
                controller: 'dialog.confirm',
                templateUrl: './WEB/dialog/dialog.confirm.html',
                resolve: {
                    params: function() {
                        return {
                            header:params.header,
                            body:params.body
                        }
                    }
                }
            });

            modalInstance.result.then(function () {
                params.ok && params.ok();
            }, function (data) {
                params.cancel && params.cancel();
            });
        }
    }
})();
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
        var url = 'http://yueqingfang.cn/markdown';
        var apiList = {//所有接口list
            User:{
                list:url + "/php/conn.php",//获取
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
/**
 * 便捷声明方式
 */
(function () {
    angular
        .module('app.core')
        .config(['NotificationProvider', configNotification])
        // .factory('Core', ['$rootScope', '$window', '$document', '$timeout', '$interval','$filter','$q', '$state','$compile','Foundation', 'Api', 'Const', 'Data','$uibModal','Upload','Notification','Util','mouseEventPosition',Core]);
        .factory('Core', ['$rootScope','Notification','Upload','$uibModal','Util','Api',Core]);
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

    function Core($rootScope,Notification,Upload,$uibModal,Util,Api) {
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
        console.log($uibModal);
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
            Api: Api,
            // Const: Const,
            // Data: Data,
            $uibModal:$uibModal,
            Upload:Upload,

            Notify:Notification,

            // Foundation: Foundation,
            Util: Util,
            // // mouseEventPosition:mouseEventPosition,
            // clone: Foundation.clone,
            // checkIdCard: Foundation.checkIdCard

        };

        return Core;

        function init(){

        }
    }
})();

(function () {//自定义指令

    var appModule = angular.module('app.core');

    appModule.directive('loading',loadingController);
    appModule.directive('ngEnter',['$parse',ngEnterController]);
    appModule.directive('timepicker',['$timeout',timepicker]);
    

    appModule.directive('dblFocus',['$timeout',dblFocus]);
    appModule.directive('onRepeatFinishedRender', ['$timeout', repeatFinished]);
    appModule.directive('dblFocus',['$timeout',dblFocus]);
    appModule.directive('imgEdit', ['Core', imgEdit]);




    function loadingController() {//等待动画
        return {
            restrict: 'AE',
            templateUrl: './WEB/directive/loading.html',
            scope: {
                isShow: '='
            },

            link: function (scope, elem, attrs) {
                var context = scope;
                context.onClickHiden = function() {
                    context.isShow = false;
                }

            }
        };
    }

    function ngEnterController($parse) {	// 搜索框回车之后直接搜索
        return function (scope, element, attrs) {

            var fn = $parse(attrs['ngEnter']);

            element.bind("keydown", function (event) {


                if(event.which === 13) {

                    fn(scope, {$event:event});

                    event.preventDefault();
                }

            });
        };
    }

    function dblFocus($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                scope.$watch(attr.dblFocus, function (newVal) {
                    if (newVal) {
                        $timeout(function () {
                            element[0].focus();
                        }, 0, false);
                    }
                });
            }
        };
    }

    function repeatFinished($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        //这里element, 就是ng-repeat渲染的最后一个元素
                        scope.$emit('ngRepeatFinished', element);
                    });
                }
            }
        };
    }

    function timepicker($timeout) {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs){
                // timeout internals are called once directive rendering is complete
                $timeout(function(){
                    $(elem).datetimepicker({
                        format: attrs.format,
                        autoclose: false,
                        todayBtn: true,
                        minuteStep: 1,
                        language: 'fr',     //中文
                        forceParse: false,  //选择框取消后不允许修改
                        todayHighlight: true,       //高亮显示今天日期
                        viewSelect: 'year',
                        format:'yyyy-mm-dd hh:ii:00'
                        // format:'yyyy-mm-dd hh:ii:ss'
                    }).on('hide', function() {
                        // var $this = $(this);
                        var _this = $(this.children[0]);
                        scope.$apply(function(){
                            if(_this.attr('ng-model')) {
                                // console.log(_this.attr('ng-model'));
                                // console.log('scope.'+_this.attr('ng-model')+'=_this.val()');
                                eval('scope.'+_this.attr('ng-model')+'=_this.val()');
                            }
                        });
                    });
                });
            }
        };
    }

    function imgEdit(Core) {
        return {
            restrict: 'AE',
            templateUrl: 'directive/editImg.html',
            scope: {
                getData: "&",
                config: "="
            },
            link: function (scope, elem, attrs) {
                var context = scope;
                context.shenfen = 85.6/54; // 身份比例
                context.article = context.config.rate;  //资讯比例
                var console = window.console || {
                        log: function () {

                        }
                    };

                $("#image")[0].src = context.config.src;
                var URL = window.URL || window.webkitURL;
                var $image = $('#image');
                var $download = $('#download');
                var $dataX = $('#dataX');
                var $dataY = $('#dataY');
                var $dataHeight = $('#dataHeight');
                var $dataWidth = $('#dataWidth');
                var $dataRotate = $('#dataRotate');
                var $dataScaleX = $('#dataScaleX');
                var $dataScaleY = $('#dataScaleY');
                var options = {
                    aspectRatio: context.config.rate,  //比例
                    preview: '.img-preview',
                    crop: function (e) {
                        $dataX.val(Math.round(e.x));
                        $dataY.val(Math.round(e.y));
                        $dataHeight.val(Math.round(e.height));
                        $dataWidth.val(Math.round(e.width));
                        $dataRotate.val(e.rotate);
                        $dataScaleX.val(e.scaleX);
                        $dataScaleY.val(e.scaleY);
                    }
                };
                var originalImageURL = $image.attr('src');
                var uploadedImageURL;

                // Tooltip
                $('[data-toggle="tooltip"]').tooltip();

                // Cropper
                $image.on({
                    'build.cropper': function (e) {
                        console.log(e.type);
                    },
                    'built.cropper': function (e) {
                        console.log(e.type);
                    },
                    'cropstart.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropmove.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropend.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'crop.cropper': function (e) {
                        console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
                    },
                    'zoom.cropper': function (e) {
                        console.log(e.type, e.ratio);
                    }
                }).cropper(options);


                // Buttons
                if (!$.isFunction(document.createElement('canvas').getContext)) {
                    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
                }

                if (typeof document.createElement('cropper').style.transition === 'undefined') {
                    $('button[data-method="rotate"]').prop('disabled', true);
                    $('button[data-method="scale"]').prop('disabled', true);
                }

                // Download
                if (typeof $download[0].download === 'undefined') {
                    $download.addClass('disabled');
                }

                // Options
                $('.docs-toggles').on('change', 'input', function () {
                    var $this = $(this);
                    var name = $this.attr('name');
                    var type = $this.prop('type');
                    var cropBoxData;
                    var canvasData;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (type === 'checkbox') {
                        options[name] = $this.prop('checked');
                        cropBoxData = $image.cropper('getCropBoxData');
                        canvasData = $image.cropper('getCanvasData');

                        options.built = function () {
                            $image.cropper('setCropBoxData', cropBoxData);
                            $image.cropper('setCanvasData', canvasData);
                        };
                    } else if (type === 'radio') {
                        options[name] = $this.val();
                    }

                    $image.cropper('destroy').cropper(options);
                });

                var imgData;
                // Methods
                var flag = 180;
                context.onChanges = function (rotate) {
                    var deg;
                    deg = flag - rotate;
                    flag = rotate;
                    $image.cropper('rotate', deg);
                };

                $('#rotatebar').on('change', function () {//xlm

                });

                $('.docs-buttons').on('click', '[data-method]', function () {
                    var $this = $(this);
                    var data = $this.data();
                    var $target;
                    var result;

                    if ($this.prop('disabled') || $this.hasClass('disabled')) {
                        return;
                    }

                    if ($image.data('cropper') && data.method) {
                        data = $.extend({}, data); // Clone a new one

                        if (typeof data.target !== 'undefined') {
                            $target = $(data.target);

                            if (typeof data.option === 'undefined') {
                                try {
                                    data.option = JSON.parse($target.val());
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }
                        }

                        if (data.method === 'rotate') {
                            $image.cropper('clear');
                        }

                        result = $image.cropper(data.method, data.option, data.secondOption);

                        if (data.method === 'rotate') {
                            $image.cropper('crop');
                        }

                        switch (data.method) {

                            case 'scaleX':
                            case 'scaleY':
                                $(this).data('option', -data.option);
                                break;

                            case 'getCroppedCanvas':
                                if (result) {
                                    var base64Data = result.toDataURL('image/jpeg');

                                    // var files = sendFormByBase64(data);
                                    // console.log("看下东西")
                                    // console.log(base64Data);
                                    // console.log(files);
                                    // scope.getData(base64Data);
                                    scope.getData({base64Data: base64Data});
                                    // Core.Upload.upload({
                                    //     url: Core.Const.ImgUrl,
                                    //     headers: {'PX': 'PX'},
                                    //     data: {file: files}
                                    // }).then(function (resp) {
                                    //     scope.getData({data: resp.data});
                                    //     $("#image")[0].src = resp.data.message;
                                    //     Core.Notify.info('图片上传成功');
                                    // }, function (resp) {
                                    //
                                    // }, function (evt) {
                                    //     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    //     console.log('progress: ' + progressPercentage + '% ');
                                    // });
                                }

                                break;

                            case 'destroy':
                                if (uploadedImageURL) {
                                    URL.revokeObjectURL(uploadedImageURL);
                                    uploadedImageURL = '';
                                    $image.attr('src', originalImageURL);
                                }

                                break;
                        }

                        if ($.isPlainObject(result) && $target) {
                            try {
                                $target.val(JSON.stringify(result));
                            } catch (e) {
                            }
                        }

                        function sendFormByBase64(base64) {
                            data = base64.split(',')[1];
                            console.log(data);
                            data = window.atob(data);
                            var ia = new Uint8Array(data.length);
                            for (var i = 0; i < data.length; i++) {
                                ia[i] = data.charCodeAt(i);
                            }
                            var blob = new Blob([ia], {type: "image/png"});
                            var fd = new FormData();

                            console.log(blob);
                            fd.append('file', blob);
                            return blob;
                        }

                    }
                });

                context.onClickOk = function () {
                    $('.modal-backdrop').hide();
                    $('.modal').hide();
                    context.getData({data: imgData});
                };

                // Keyboard
                $(document.body).on('keydown', function (e) {

                    if (!$image.data('cropper') || this.scrollTop > 300) {
                        return;
                    }

                    switch (e.which) {
                        case 37:
                            e.preventDefault();
                            $image.cropper('move', -1, 0);
                            break;

                        case 38:
                            e.preventDefault();
                            $image.cropper('move', 0, -1);
                            break;

                        case 39:
                            e.preventDefault();
                            $image.cropper('move', 1, 0);
                            break;

                        case 40:
                            e.preventDefault();
                            $image.cropper('move', 0, 1);
                            break;
                    }

                });


                // Import image
                var $inputImage = $('#inputImage');

                if (URL) {
                    context.change = function(file) {
                        // var files = this.files;
                        // var files = file;
                        // var file;
                        if (!$image.data('cropper')) {
                            return;
                        }

                        // if (files && files.length) {
                        if (file) {
                            // file = files[0];
                            if (/^image\/\w+$/.test(file.type)) {
                                if (uploadedImageURL) {
                                    URL.revokeObjectURL(uploadedImageURL);
                                }

                                uploadedImageURL = URL.createObjectURL(file);
                                // $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                                $image.cropper('replace',uploadedImageURL)
                                $inputImage.val('');
                            } else {
                                window.alert('Please choose an image file.');
                            }
                        }
                    }
                } else {
                    $inputImage.prop('disabled', true).parent().addClass('disabled');
                }

            }
        }
    }

    function imgEdit2(Core) {//身份证编辑
        return {
            restrict: 'AE',
            templateUrl: '/directive/editImg.html',
            scope: {
                getData: "&"
            },
            link: function (scope, elem, attrs ) {
                var  context = scope;

                $("#image")[0].src = context.config.src;
                var console = window.console || { log: function () {} };
                var URL = window.URL || window.webkitURL;
                var $image = $('#image');
                var $download = $('#download');
                var $dataX = $('#dataX');
                var $dataY = $('#dataY');
                var $dataHeight = $('#dataHeight');
                var $dataWidth = $('#dataWidth');
                var $dataRotate = $('#dataRotate');
                var $dataScaleX = $('#dataScaleX');
                var $dataScaleY = $('#dataScaleY');
                var options = {
                    aspectRatio: 85.6 / 54,  //比例
                    preview: '.img-preview',
                    crop: function (e) {
                        $dataX.val(Math.round(e.x));
                        $dataY.val(Math.round(e.y));
                        $dataHeight.val(Math.round(e.height));
                        $dataWidth.val(Math.round(e.width));
                        $dataRotate.val(e.rotate);
                        $dataScaleX.val(e.scaleX);
                        $dataScaleY.val(e.scaleY);
                    }
                };
                var originalImageURL = $image.attr('src');
                var uploadedImageURL;

                // Tooltip
                $('[data-toggle="tooltip"]').tooltip();

                // Cropper
                $image.on({
                    'build.cropper': function (e) {
                        console.log(e.type);
                    },
                    'built.cropper': function (e) {
                        console.log(e.type);
                    },
                    'cropstart.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropmove.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'cropend.cropper': function (e) {
                        console.log(e.type, e.action);
                    },
                    'crop.cropper': function (e) {
                        console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
                    },
                    'zoom.cropper': function (e) {
                        console.log(e.type, e.ratio);
                    }
                }).cropper(options);


                // Buttons
                if (!$.isFunction(document.createElement('canvas').getContext)) {
                    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
                }

                if (typeof document.createElement('cropper').style.transition === 'undefined') {
                    $('button[data-method="rotate"]').prop('disabled', true);
                    $('button[data-method="scale"]').prop('disabled', true);
                }


                // Download
                if (typeof $download[0].download === 'undefined') {
                    $download.addClass('disabled');
                }


                // Options
                $('.docs-toggles').on('change', 'input', function () {
                    var $this = $(this);
                    var name = $this.attr('name');
                    var type = $this.prop('type');
                    var cropBoxData;
                    var canvasData;

                    if (!$image.data('cropper')) {
                        return;
                    }

                    if (type === 'checkbox') {
                        options[name] = $this.prop('checked');
                        cropBoxData = $image.cropper('getCropBoxData');
                        canvasData = $image.cropper('getCanvasData');

                        options.built = function () {
                            $image.cropper('setCropBoxData', cropBoxData);
                            $image.cropper('setCanvasData', canvasData);
                        };
                    } else if (type === 'radio') {
                        options[name] = $this.val();
                    }

                    $image.cropper('destroy').cropper(options);
                });

                var imgData;
                // Methods
                var flag = 180;
                context.onChanges = function(rotate) {
                    console.log(rotate);
                    var deg = 1;
                    if(flag - rotate > 0) {
                        deg = -1;
                    }
                    flag = rotate;
                    $image.cropper('rotate', deg);
                };

                $('#rotatebar').on('change', function () {//xlm

                });

                $('.docs-buttons').on('click', '[data-method]', function () {
                    var $this = $(this);
                    var data = $this.data();
                    var $target;
                    var result;

                    if ($this.prop('disabled') || $this.hasClass('disabled')) {
                        return;
                    }

                    if ($image.data('cropper') && data.method) {
                        data = $.extend({}, data); // Clone a new one

                        if (typeof data.target !== 'undefined') {
                            $target = $(data.target);

                            if (typeof data.option === 'undefined') {
                                try {
                                    data.option = JSON.parse($target.val());
                                } catch (e) {
                                    console.log(e.message);
                                }
                            }
                        }

                        if (data.method === 'rotate') {
                            $image.cropper('clear');
                        }

                        result = $image.cropper(data.method, data.option, data.secondOption);

                        if (data.method === 'rotate') {
                            $image.cropper('crop');
                        }

                        switch (data.method) {

                            case 'scaleX':
                            case 'scaleY':
                                $(this).data('option', -data.option);
                                break;

                            case 'getCroppedCanvas':
                                if (result) {
                                    // Bootstrap's Modal
                                    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

                                    if (!$download.hasClass('disabled')) {
                                        $download.attr('href', result.toDataURL('image/jpeg'));
                                        imgData = result.toDataURL('image/jpeg');
                                    }
                                }

                                break;

                            case 'destroy':
                                if (uploadedImageURL) {
                                    URL.revokeObjectURL(uploadedImageURL);
                                    uploadedImageURL = '';
                                    $image.attr('src', originalImageURL);
                                }

                                break;
                        }

                        if ($.isPlainObject(result) && $target) {
                            try {
                                $target.val(JSON.stringify(result));
                            } catch (e) {
                            }
                        }

                    }
                });

                context.onClickOk = function() {
                    $('.modal-backdrop').hide();
                    $('.modal').hide();
                    context.getData({data:imgData});
                };

                // Keyboard
                $(document.body).on('keydown', function (e) {

                    if (!$image.data('cropper') || this.scrollTop > 300) {
                        return;
                    }

                    switch (e.which) {
                        case 37:
                            e.preventDefault();
                            $image.cropper('move', -1, 0);
                            break;

                        case 38:
                            e.preventDefault();
                            $image.cropper('move', 0, -1);
                            break;

                        case 39:
                            e.preventDefault();
                            $image.cropper('move', 1, 0);
                            break;

                        case 40:
                            e.preventDefault();
                            $image.cropper('move', 0, 1);
                            break;
                    }

                });


                // Import image
                var $inputImage = $('#inputImage');

                if (URL) {
                    $inputImage.change(function () {
                        var files = this.files;
                        var file;

                        if (!$image.data('cropper')) {
                            return;
                        }

                        if (files && files.length) {
                            file = files[0];

                            if (/^image\/\w+$/.test(file.type)) {
                                if (uploadedImageURL) {
                                    URL.revokeObjectURL(uploadedImageURL);
                                }

                                uploadedImageURL = URL.createObjectURL(file);
                                $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);
                                $inputImage.val('');
                            } else {
                                window.alert('Please choose an image file.');
                            }
                        }
                    });
                } else {
                    $inputImage.prop('disabled', true).parent().addClass('disabled');
                }

            }
        }
    }

})();

/**
 * 广播方法封装
 */

(function () {
    angular
        .module('app.core')
        .factory('Foundation', ['$rootScope', '$state', Foundation]);

    function Foundation($rootScope, $state) {
        return {
            on: on,
            publish: publish,
            go: go,
            goHome: goHome,
            clone: clone,
            checkIdCard: checkIdCard,
            goLogin: goLogin,
            userName: userName
        };

        function checkIdCard(obj) {
            //function checkidno(obj) {
            var vcity={ 11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
                21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
                33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
                42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
                51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
                63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
            };
            var checkCard = function(obj)
            {
                //var card = document.getElementById('card_no').value;
                //是否为空
                // if(card === '')
                // {
                //  return false;
                //}
                //校验长度，类型
                if(isCardNo(obj) === false)
                {
                    return false;
                }
                //检查省份
                if(checkProvince(obj) === false)
                {
                    return false;
                }
                //校验生日
                if(checkBirthday(obj) === false)
                {
                    return false;
                }
                //检验位的检测
                if(checkParity(obj) === false)
                {
                    return false;
                }
                return true;
            };
            //检查号码是否符合规范，包括长度，类型
            var isCardNo = function(obj)
            {
                //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
                var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
                if(reg.test(obj) === false)
                {
                    return false;
                }
                return true;
            };
            //取身份证前两位,校验省份
            var checkProvince = function(obj)
            {
                var province = obj.substr(0,2);
                if(vcity[province] == undefined)
                {
                    return false;
                }
                return true;
            };
            //检查生日是否正确
            var checkBirthday = function(obj)
            {
                var len = obj.length;
                //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
                if(len == '15')
                {
                    var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                    var arr_data = obj.match(re_fifteen);
                    var year = arr_data[2];
                    var month = arr_data[3];
                    var day = arr_data[4];
                    var birthday = new Date('19'+year+'/'+month+'/'+day);
                    return verifyBirthday('19'+year,month,day,birthday);
                }
                //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
                if(len == '18')
                {
                    var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                    var arr_data = obj.match(re_eighteen);
                    var year = arr_data[2];
                    var month = arr_data[3];
                    var day = arr_data[4];
                    var birthday = new Date(year+'/'+month+'/'+day);
                    return verifyBirthday(year,month,day,birthday);
                }
                return false;
            };
            //校验日期
            var verifyBirthday = function(year,month,day,birthday)
            {
                var now = new Date();
                var now_year = now.getFullYear();
                //年月日是否合理
                if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)
                {
                    //判断年份的范围（3岁到100岁之间)
                    var time = now_year - year;
                    if(time >= 0 && time <= 130)
                    {
                        return true;
                    }
                    return false;
                }
                return false;
            };
            //校验位的检测
            var checkParity = function(obj)
            {
                //15位转18位
                obj = changeFivteenToEighteen(obj);
                var len = obj.length;
                if(len == '18')
                {
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    var cardTemp = 0, i, valnum;
                    for(i = 0; i < 17; i ++)
                    {
                        cardTemp += obj.substr(i, 1) * arrInt[i];
                    }
                    valnum = arrCh[cardTemp % 11];
                    if (valnum == obj.substr(17, 1))
                    {
                        return true;
                    }
                    return false;
                }
                return false;
            };
            //15位转18位身份证号
            var changeFivteenToEighteen = function(obj)
            {
                if(obj.length == '15')
                {
                    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                    var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                    var cardTemp = 0, i;
                    obj = obj.substr(0, 6) + '19' + obj.substr(6, obj.length - 6);
                    for(i = 0; i < 17; i ++)
                    {
                        cardTemp += obj.substr(i, 1) * arrInt[i];
                    }
                    obj += arrCh[cardTemp % 11];
                    return obj;
                }
                return obj;
            };
            return checkCard(obj);
        }

        function clone(obj) {
            var o;
            if (typeof obj == "object") {
                if (obj === null) {
                    o = null;
                } else {
                    if (obj instanceof Array) {
                        o = [];
                        for (var i = 0, len = obj.length; i < len; i++) {
                            o.push(clone(obj[i]));
                        }
                    } else {
                        o = {};
                        for (var j in obj) {
                            o[j] = clone(obj[j]);
                        }
                    }
                }
            } else {
                o = obj;
            }
            return o;
        }

        function on(eventName, callback) {
            return $rootScope.$on(eventName, callback);
        }

        function publish(eventName, data) {
            return $rootScope.$broadcast(eventName, data);
        }

        function userName(eventName, data) {
            return $rootScope.$broadcast(eventName, data);
        }

        function go(state,data) {
            var datas = data ? data : '';

            $state.go(state, {data: datas});
        }


        function goHome() {
            $state.go('welcome.welcome');
        }


        function goLogin() {
            location.href='/login.html'
        }
    }
})();
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
        context.onClickExit = onClickExit;

        context.userData = {
            userName:'冰中焱',
        }

        $scope.$state = $state;
        var context = $scope;
        // console.log($state);



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
    }

})();



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
                .state('angularTool.time', {
                    url: '/time',
                    templateUrl: 'WEB/app/angularTool/time.html',
                    controller: 'angularTool.timeController'
                })
                /*
                * 用户信息
                * */
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
(function () {
    angular
        .module('app')
        .controller('dialog.confirm', ['$scope', 'Core', '$uibModalInstance','params',HomeController]);

    function HomeController($scope, Core, $uibModalInstance,params){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            context.params = params;
            context.params.header = context.params.header || '确认框';
            // context.loading = true;
        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());