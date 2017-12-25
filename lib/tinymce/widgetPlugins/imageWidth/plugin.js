tinymce.PluginManager.add('imageWidth', function(editor) {
    var id = 'tintmceRecommendList';
    var getTemplatesFn=getTemplatesFn();

    function getTemplatesFn(){
        var fns = {
            getDivHtml : function(id,e){
                var divHtml='';
                $.each(e.data,function(index,value){
                    //var tem='<a href="http://m.zhefengle.cn/#/detail&">abc</a>'
                    var tem = '<div class="eachItem recomlist'+ index +'">'+
                        '<a class="siteBox item-detailLink" style="text-decoration:none;" href="http://m.zhefengle.cn/#/detail&'+ value.shareId +'&">'+
                        '<span class="items-holder" style="display: block;">'+
                        '<img src="'+value.image+'" class="items-img">'+
                        '<span class="content-holder" style="display: block;">'+
                        '<i class="item-title" style="font-style:normal;">'+ value.title +'</i>'+
                        '<i class="item-price" style="font-style:normal;">'+ value.currencySymbol+value.itemPrice +'</i>'+
                        '</span>'+
                        '<i class="right-btn" style="display: block;">&#12288;</i>'+
                        '</span>'+
                        '</a>'+
                        '</div>';

                    divHtml=divHtml+tem;
                })
                // console.log(divHtml);
                divHtml += '<p></p>';
                return divHtml;

            }
        };

        return fns;
    }


    function showDialog() {
        var html = editor.selection.getContent(),
            data = {};

        //if(html && html.indexOf(id) > -1){
        //	data.hrefId = html.match(/href\s*=\s*"?([^\s"]+)"?/)[1];
        //	data.title = html.match(/siteTitle[^>]*>([^<]+)<\/em>/)[1]
        //}

        editor.windowManager.open({
            title: '图片宽度(自适应)',
            body: [
                {
                    name: 'width',
                    type: 'textbox',
                    size: 40,
                    label: '宽度(%)'
                }
            ],
            onSubmit: function(e) {
                var dom = editor.dom;
                var width = parseInt(e.data.width);
                if(width > 0 && width <= 100 ){

                } else{
                    editor.settings.recommendList.info('图片转换失败，参数不对，参数应在0-100之间');
                    return;
                }

                var node = editor.selection.getNode();
                if(node.id == 'tinymce') {   //多行就跳过
                    return;
                }
                var children = node.children;
                var imgList = [];
                var removeIndex = [];         //要移除的index
                var num = '';
                for(var i = 0, len = children.length; i<len; i++) {
                    if(children[i].tagName == 'IMG') {
                        num = i;
                        imgList.push({
                            // imgClass:node.children[i].className,
                            imgClass:'insertSmallimg',
                            imgSrc: node.children[i].src,
                            num:'i'
                        })
                        removeIndex.push(i);
                        continue;
                    }
                }
                if(imgList.length === 0) {
                    editor.settings.recommendList.info('图片转换失败，没有图片');
                    return;
                }
                var uniqueID = dom.uniqueId();
                var htmlTemplate = '';
                htmlTemplate += '<p class="'+ uniqueID +'">';
                for(var i = 0, len = imgList.length; i<len; i++) {
                    htmlTemplate +=
                        '<img style="width:'+ width +'%;" src="'+ imgList[i].imgSrc +'" class="'+ imgList[i].imgClass +'">';
                }
                htmlTemplate += '</p>';

                // editor.insertContent();
                removeIndex.reverse();
                for(var i = 0, len = removeIndex.length; i<len; i++){
                    var value = removeIndex[i];
                    editor.selection.getNode().children[value].remove();
                }

                editor.selection.setNode($(htmlTemplate));
                var newParagraph = dom.select( 'p.' + uniqueID )[0];
                editor.selection.setCursorLocation( newParagraph );   //获取光标
                editor.windowManager.close();
            }
        })
    }

    editor.addButton('imageWidth', {
        icon: 'imageWidth',
        tooltip: '图片宽度设置',
        image : './lib/tinymce/widgetPlugins/imageupload/img/resize.png',
        onClick:showDialog
    });
    this.showDialog = showDialog;
});
