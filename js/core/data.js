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