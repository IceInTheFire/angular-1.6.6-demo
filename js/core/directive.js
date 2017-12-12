(function () {//自定义指令

    var appModule = angular.module('app.core');

    appModule.directive('loading',loadingController);
    appModule.directive('ngEnter',['$parse',ngEnterController]);
    appModule.directive('dblFocus',['$timeout',dblFocus]);
    appModule.directive('timepicker',['$timeout',timepicker]);
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
                        language: 'fr',
                        forceParse: false,  //选择框取消后不允许修改
                        todayHighlight: true,       //高亮显示今天日期
                        viewSelect: 'year',
                        format:'yyyy-mm-dd hh:ii:00'
                    }).on('hide', function() {
                        var $this = $(this);
                        var _this = this.children[0];
                        scope.$apply(function(){
                            if($this.attr('ng-model')) {
                                eval('scope.'+$this.attr('ng-model')+'=_this.value');
                            }
                            // eval('scope.'+$this.attr('ng-model')+'=_this.value');
                            // scope[$this.attr('ng-model')] = _this.value;

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
