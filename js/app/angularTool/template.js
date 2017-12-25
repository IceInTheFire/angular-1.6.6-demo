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
(function() {

    angular.module('app')
        .controller('angularTool.dragController', ['$scope','Core', HomeController]);

    function HomeController($scope,Core) {
        var context = $scope;
        console.log("拖拽");
        context.onClickLog = onClickLog;
        context.onClickMoveUp = onClickMoveUp;
        context.onClickMoveLeft = onClickMoveLeft;

        context.data = [
            'red',
            'yellow',
            'green',
            'blue',
            'pink',
            'skyblue',
            'orange',
            '#123456',
            '#d23456',
            '#e457fd',
            '#f457fd',
            '#7457fd',
            '#af57fd',
            '#945744',
            '#f45733',
            '#f45711',
            '#7557fd',
            '#a447fd',
            '#933744',
            '#f22a33',
            '#f11711',
        ];

        function onClickLog() {
            console.log(context.data);
        }

        function onClickMoveUp() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogMoveUp",
                controller: 'angularTool.dialog.moveUp',
                templateUrl: './WEB/app/angularTool/dialog/dialog.moveUp.html',
                resolve: {
                }
            });

            modalInstance.result.then(function (data) {
                console.log("你点击了确定");
            }, function (data) {
                console.log("你点击了取消");
            });
        }

        function onClickMoveLeft() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogMoveLeft",
                controller: 'angularTool.dialog.moveLeft',
                templateUrl: './WEB/app/angularTool/dialog/dialog.moveLeft.html',
                resolve: {
                }
            });

            modalInstance.result.then(function (data) {
                console.log("你点击了确定");
            }, function (data) {
                console.log("你点击了取消");
            });
        }
    }
})();
(function() {

    angular.module('app')
        .controller('angularTool.modalController', ['$scope','Core', HomeController]);

    function HomeController($scope, Core) {
        var context = $scope;
        console.log("模态框");

        context.title = "模态框";  //看看模态框有没有带参数过去

        context.onClickModal = onClickModal;
        context.onClickConfirm = onClickConfirm;
        context.onClickConfirm2 = onClickConfirm2;

        function onClickModal() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogDefault",
                controller: 'angularTool.dialog.default',
                templateUrl: './WEB/app/angularTool/dialog/dialog.default.html',
                resolve: {
                    scope: function() {
                        return context;   //带一个scope参数
                    }
                }
            });

            modalInstance.result.then(function (data) {
                console.log("确定");
                console.log("data:",data);
            }, function (data) {
                console.log("取消");
                console.log("data:",data);
            });
        }

        function onClickConfirm() {
            var modalInstance = Core.$uibModal.open({
                animation: true,
                windowClass: "dialogConfirm",
                controller: 'dialog.confirm',
                templateUrl: './WEB/dialog/dialog.confirm.html',
                resolve: {
                    scope: function() {
                        return context;   //带一个scope参数
                    },
                    params: function() {
                        return {
                            // header:'确认框',
                            body:'你要点击确定吗？'
                        }
                    }
                }
            });

            modalInstance.result.then(function (data) {
                alert("你点击了确定");
            }, function (data) {
                alert("你点击了取消");
            });
        }

        function onClickConfirm2() {
            var params = {
                header:'',
                body:'你要点击确认框吗？',
                ok:function() {
                    alert("你点击了确认框222")
                },
                cancel:function() {
                    alert("你取消了确认框2222")
                }
            }
            Core.Util.confirm(Core,params);
        }

    }
})();
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
(function() {

    angular.module('app')
        .controller('angularTool.tinymceController', ['$scope','$timeout','Core', HomeController]);

    function HomeController($scope, $timeout, Core) {
        var context = $scope;
        console.log("富文本编辑器");

        context.tinymceOptions = {
            onChange: function (e) {
                console.log(e);
                console.log("为什么没有触发这个");
            },
            paste_preprocess: function (plugin, args) { //粘贴
                var regExp = /<(\w+)[^>]*>([^<]*<\/\1>)/gim;        //不匹配单标签 也不匹配嵌套标签
                regExp.compile(regExp);
                var body,contentWrap,config = {
                        enableTable: true,
                        enableList: true
                    },
                    skipTags = ["TH", "TR", "TD", "TBODY", "THEAD", "TFOOT", "LI", "DT", "DD"],
                    inlineTags = ["A", "ADDR", "ACRONYM", "B", "BDO", "BIG", "CITE", "CODE", "DFN", "EM", "FONT", "I", "INPUT", "KDB", "Q", "S", "SMALL", "SPAN", "STRIKE", "SUB", "SUP", "TEXTAREA", "STRONG"],
                    blockTags = ["P", 'DIV', 'SECTION', 'BLOCKQUOTE', 'CENTER', 'DIR', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
                try {
                    contentWrap = document.createElement("div");
                    regExp.lastIndex = 0;
//                    contentWrap.innerHTML = args.content.replace(regExp,"<$1>");    //清除标签里的class，style等等
//                    contentWrap.innerHTML = args.content;    //清除标签里的class，style等等
//                    contentWrap.innerHTML = contentWrap.innerHTML.replace(regExp,"<$1>");
                    contentWrap.innerHTML = args.content.replace(regExp,"<$1>$2");

//                    console.log(args.content);
//                    console.log("转换后");
//                    console.log(args.content.replace(regExp,"<$1>$2"));

                    body = contentWrap.childNodes;
                } catch (err) {
                    body = args.content;
                    return;
                }

                //粘贴内容用的容器
                var dom = [""];
                // console.log(body);
                //递归去除标签,只保留内容和文字,
                transformBody(body, dom);

                for (var i = 0; i < dom.length; i++) {
                    if (dom[i] == "") {
                        continue;
                    }
                    if (/insertimg/.test(dom[i])) {
                        dom[i] = "<p>" + dom[i] + "</p>";
                    } else {
                        // dom[i] = "<p><span class = 'title'>" + dom[i] + "</span></p>";
                        dom[i] = "<p>" + dom[i] + "</p>";
                    }
                }
                args.content = dom.join("");

                function transformBody(doms, content) {

                    for (var i = 0, len = doms.length; i < len; i++) {
                        if (doms[i].tagName == "META") {
                            continue;
                        } else if (doms[i].nodeType == 3) { //文本节点
                            var value = doms[i].nodeValue.replace(/[\s|\r\n]+/g, "");
                            if (value.length > 0) {
                                // content[ content.length - 1 ] += doms[i].nodeValue;
                                // content.push(doms[i].nodeValue);
                                content[content.length - 1] += doms[i].nodeValue;
                            }
                        } else if (doms[i].tagName == "IMG") { //图片节点
                            content.push("");
                            // content[ content.length - 1 ] += "<img class = 'insertimg' src = "+ doms[i].src +" >";
                            // content.push("<img class='insertimg' src = "+ doms[i].src +" >");
                            content[content.length - 1] = "<img class = 'insertimg' src = " + doms[i].src + " >";
                            content.push("");
                            continue;
                        } else if (doms[i].tagName == "TABLE") {
                            content.push("");
                            if (config.enableTable) {
                                transformBody(doms[i].childNodes, content);
                            } else {
                                // content.push(doms[i].outerHTML);
                                content[content.length - 1] = doms[i].outerHTML;
                            }
                            content.push("");
                            continue;
                        }
                        // else if( skipTags.indexOf( doms[i].tagName ) != -1 ){
                        //     // console.log("111")
                        //     continue;
                        // }
                        else if (doms[i].tagName == "UL" || doms[i].tagName == "OL" || doms[i].tagName == "DL") {//处理找到的list标签, 目前是直接添加
                            content.push("");
                            if (config.enableList) {
                                transformBody(doms[i].childNodes, content);
                            } else {
                                content[content.length - 1] = doms[i].outerHTML;
                                // content.push(doms[i].outerHTML);
                            }
                            content.push("");
                            continue;
                        } else if (doms[i].nodeType == 1) {  //行元素或者块元素

                            if (inlineTags.indexOf(doms[i].tagName) != -1) {
                                var chs = doms[i].childNodes;
                                if (chs.length && chs.length > 0) {
                                    transformBody(chs, content);
                                }
                            } else if (blockTags.indexOf(doms[i].tagName) != -1) {
                                // console.log("111222");
                                var chs = doms[i].childNodes;
                                if (chs.length && chs.length > 0) {
                                    content.push("");
                                    transformBody(chs, content);
                                    content.push("");
                                }
                            }
                            else if (skipTags.indexOf(doms[i].tagName) != -1) {
                                var chs = doms[i].childNodes;
                                if (chs.length && chs.length > 0) {
                                    content.push("");
                                    transformBody(chs, content);
                                    content.push("");
                                }
                            }
                            // else {
                            //     // console.log("doms[i]")
                            //     // console.log(doms[i].tagName);
                            // }

                        }
                    }
                }
            },
            setup: function (editor) {
                //Focus the editor on load
                // $timeout(function(){ editor.focus(); });
                // editor.on("init", function() {
                //     console.log("init");
                // });
                // editor.on("click", function() {
                //     console.log("click");
                // });
                editor.on("keyDown", function (e) {
                    if (( ( e.keyCode == 13 ) || ( e.keyCode == 10 ) ) && (e.ctrlKey == true || e.altKey == true )) {   //ctrl+回车  alt ＋回车    有两个回车
                        var dom = editor.dom;
                        var parents = dom.getParents(editor.selection.getNode());
                        var currentNode;
                        for (var i = 0; i < parents.length; i++) {
                            currentNode = parents[i];
                            console.log(currentNode.nodeName);
                            console.log(currentNode.getAttribute('class'));
                            if (currentNode.nodeName == 'DIV' && currentNode.getAttribute('class').includes("eachItem")) {
                                var uniqueID = dom.uniqueId();
                                var content = $('<p id="' + uniqueID + '">&nbsp;</p>');
                                /*--插入--*/
                                content.insertAfter(currentNode);

                                var newParagraph = dom.select('p#' + uniqueID)[0];
                                editor.selection.setCursorLocation(newParagraph);   //获取光标
                                e.preventDefault();
                                break;
                            }
                        }
                        // e.preventDefault();
                    }
                    if (e.keyCode == 46 && (e.ctrlKey == true || e.altKey == true)) {      //ctrl+delete    //alt+delete
                        var dom = editor.dom;
                        var parents = dom.getParents(editor.selection.getNode());
                        var currentNode;
                        for (var i = 0; i < parents.length; i++) {
                            currentNode = parents[i];
                            console.log(currentNode.nodeName);
                            console.log(currentNode.getAttribute('class'));
                            if (currentNode.nodeName == 'DIV' && currentNode.getAttribute('class').includes("eachItem")) {
                                currentNode.remove();
                                e.preventDefault();
                                break;
                            }
                            // if(currentNode.nodeName == "P" && currentNode.childNodes[0].nodeName == 'IMG' && currentNode.childNodes[0].getAttribute('class').includes('insertimg')) {
                            //     // currentNode.childNodes[0];
                            //     currentNode.remove();
                            //     e.preventDefault();
                            //     break;
                            // }
                        }
                    }
                });
                editor.on("init", function () {
                    // console.log("init");
                });
                editor.on("change", function (e) {
                    // console.log(e);
                    // console.log("testchange")
                });
                editor.on("click", function () {
                    // console.log("click");
                });
            },
            inline: false,
            toolbar1: "removeformat | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",  //操作1－3
            // toolbar2            : "undo redo | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | link unlink anchor image media code | insertdatetime preview | forecolor backcolor | table",
            toolbar2: "undo redo | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | link unlink anchor code | insertdatetime preview | forecolor backcolor | table",
            // toolbar3            : "previewInfo | itemShopInfo | recommend | operation | recommendList | imageupload | video | welfareItem",  //全部自己扩展的
            toolbar3: "previewInfo | recommendList | imageupload | smallImageupload | video | transform | imageWidth",  //全部自己扩展的
            // toolbar3            : "previewInfo | recommendList | imageupload | video | smallImageupload | transform",  //全部自己扩展的
            // toolbar3            : "previewInfo | recommendList | video | smallImageupload",  //全部自己扩展的
            theme: 'modern',
            plugins: [ //默认加载的
                "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste  textcolor colorpicker textpattern imagetools"
            ],
            content_css: [  //自己扩展的css
//                 '/lib/tinymce/widgetSkins/tintmceDefault.css',
//                 '/lib/tinymce/widgetSkins/tinymceItemShopInfo.css',
//                 '/lib/tinymce/widgetSkins/tintmceRecommend.css',


                // '/lib/tinymce/widgetSkins/tintmceOperation.css',
                // '/lib/tinymce/widgetPlugins/imageupload/css/style.css',
//                './lib/tinymce/zfl-widgetSkins/tintmceDefault.css',
//                './lib/tinymce/zfl-widgetSkins/tintmceRecommend.css',
//                './lib/tinymce/zfl-widgetSkins/tintmceRecommendList.css',
//                '/lib/tinymce/zfl-widgetSkins/zfl.css',
                // '/lib/tinymce/widgetSkins/dsb.css'
                './lib/tinymce/widgetSkins/fire.css'
            ],
            skin: 'lightgray',
            menubar: false,
            height: 400,
            external_plugins: {  //自己扩展的包
                'previewInfo': '../../../lib/tinymce/widgetPlugins/previewInfo/plugin.js',
                'recommendList': '../../../lib/tinymce/widgetPlugins/addGoods2/plugin2.js',
                'imageupload': '../../../lib/tinymce/widgetPlugins/imageupload/plugin.min.js',         //大于300则是大图上传，小于300则是小图上传
                'smallImageupload': '../../../lib/tinymce/widgetPlugins/smallImageupload/plugin.min.js',
                'video': '../../../lib/tinymce/widgetPlugins/video/plugin.js',
                'transform': '../../../lib/tinymce/widgetPlugins/transform/plugin.js',
                'imageWidth': '../../../lib/tinymce/widgetPlugins/imageWidth/plugin.js',
            },
            recommendList: {
                showLoad: true,
                getitemdetailCallback: function (e, coAsync) {
                    if (e.data.ids) {
                        var ids = e.data.ids.split(',');
                        console.log(ids, "测试中");
                        for (var i = 0, length = ids.length; i < length; i++) {
                            if (!/^\d*$/.test(ids[i])) {
                                return coAsync.reject('商品格式不对');
                            }
                        }
                        // Core.Api.normalApi.Item.getItemDetail({itemId: e.data.ids}).then(function(response) {
                        //     e.data = response.data;
                        //     coAsync.next();
                        // },function(error) {
                        //     Core.Notify.error('获返利商品失败');
                        // })
                        // context.loading = true;
                        $timeout(function(){
                            var response = {"message":"执行成功","model":[{"aPropertyName":"容量/サイズ：","bPropertyName":"","brandId":2178501,"brandName":"イプサ / IPSA","curPriceCny":"303","currencyName":"日元","currencySymbol":"円","image":"http://img.zhefengle.com/c3138c896953e5679cc6b024f4fdf5c9.jpg","itemId":18190316,"itemPrice":4536.0,"itemTitle":"眉彩第1名 带鼻侧影 IPSA五色眉粉盘  3.3g","labelList":[],"oriPriceCny":"303","shareId":3036400,"shopId":7301,"shopName":"Cosme日本官网","skus":[{"aVal":"3.3g","bVal":"无需设置","price":303.0,"skuId":126682485,"stock":9}],"title":"眉彩第1名 带鼻侧影 IPSA五色眉粉盘  3.3g"}],"roles":"管理员","code":"success"};
                            e.data = response.model;
                            if (response.model.length == 0) {
                                return coAsync.reject('没有该商品');
                            }
//                            context.loading = false;
                            coAsync.next();
                        },3000);


//                        Core.Api.NormalApi.Common.getSimpleItemInfo({shareIds: e.data.ids}).then(function (response) {
//                            // console.log(response);
//                            e.data = response.model;
//                            if (response.model.length == 0) {
//                                return coAsync.reject('没有该商品');
//                            }
//                            context.loading = false;
//                            coAsync.next();
//                        }, function (error) {
//                            Core.Notify.error('获取商品失败');
//                            context.loading = false;
//                            coAsync.reject();
//                        });
                    }
                },
                info:function(result) {
                    Core.Notify.info(result);
                }
            },
            language: 'zh_CN'
        };






        $scope.tinymceModel = "niceMCE"//初始化绑定的值
    }
})();
(function() {

    angular.module('app')
        .controller('angularTool.uploadController', ['$scope','Core', HomeController]);

    function HomeController($scope,Core) {
        var context = $scope;
        console.log("上传");
        context.upload = upload;
        context.onClickUpload = onClickUpload;

        init();

        function init(){
            context.data = {
                img:[]
            };

            context.imgNames = [];
            context.returnImgs = [];
        }

        function upload($files) {
            console.log($files);
            angular.forEach($files, function(value, index) {
                context.data.img.push(value);
                context.imgNames.push(value.name);
            })
        }

        function onClickUpload() {
            context.loading = true;
            if(!context.data.img) {
                Core.Notify.info("请选择图片");
                return;
            }
            //请求两次，是因为其中一次是跨域
            Core.Upload.upload({
                url: 'http://yueqingfang.cn/markdown/php/imgUpload_batch.php',
                // url: 'http://localhost/php/imgUpload22_batch.php',
                data: context.data,
            }).progress(function (evt) {
                ////进度条
                // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);

            }).success(function (data, status, headers, config) {
                console.log(data);
                if(data.code == 'success'){
                    Core.Notify.success(data.message);
                    angular.extend(context.returnImgs, data.model);
                    context.data = {
                        img:[]
                    };
                    context.imgNames = [];
                }else{
                    Core.Notify.error(data.message);
                }
                context.loading = false;

            }).error(function (data, status, headers, config) {
                console.log("error");
                console.log(data);
                context.loading = false;
            });
        }
    }
})();
(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.default', ['$scope', 'Core', '$uibModalInstance','$timeout','scope',HomeController]);

    function HomeController($scope, Core, $uibModalInstance,$timeout,scope){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            console.log("测试");
            console.log("测试2");
            console.log(scope);  //父级传的参数
            context.loading = true;

            context.settime = $timeout(function() {

                context.loading = false;
                $timeout.cancel(context.settime);
            },3000);

        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());
(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.moveLeft', ['$scope', 'Core', '$uibModalInstance',HomeController]);

    function HomeController($scope, Core, $uibModalInstance){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            context.data = [
                'red',
                'yellow',
                'green',
                'blue',
                'pink',
                'skyblue',
                'orange',
                '#123456',
                '#d23456',
                '#e457fd',
                '#f457fd',
                '#7457fd',
                '#af57fd',
                '#945744',
                '#f45733',
                '#f45711',
                '#7557fd',
                '#a447fd',
                '#933744',
                '#f22a33',
                '#f11711',
            ];
        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());
(function () {
    angular
        .module('app')
        .controller('angularTool.dialog.moveUp', ['$scope', 'Core', '$uibModalInstance',HomeController]);

    function HomeController($scope, Core, $uibModalInstance){

        var context = $scope;

        context.onClickOk = onClickOk;
        context.onClickCancel= onClickCancel;

        init();
        function init() {
            context.data = [
                'red',
                'yellow',
                'green',
                'blue',
                'pink',
                'skyblue',
                'orange',
                '#123456',
                '#d23456',
                '#e457fd',
                '#f457fd',
                '#7457fd',
                '#af57fd',
                '#945744',
                '#f45733',
                '#f45711',
                '#7557fd',
                '#a447fd',
                '#933744',
                '#f22a33',
                '#f11711',
            ];
        }

        function onClickOk() {
            $uibModalInstance.close('确认');
        }

        function onClickCancel() {
            $uibModalInstance.dismiss('取消');
        }
    }
}());