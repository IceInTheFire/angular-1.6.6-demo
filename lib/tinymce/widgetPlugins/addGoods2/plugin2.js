/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2015 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('recommendList', function (editor) {
    var id = 'tintmceRecommendList';
    var getTemplatesFn = getTemplatesFn();

    function getTemplatesFn() {
        var fns = {
            getDivHtml: function (id, e) {
                var divHtml = '';
                $.each(e.data, function (index, value) {
                    var tem = '';
                    if(value.curPriceCny < value.oriPriceCny) {
                        tem = '<div class="eachItem2 recomlist' + index + '">' +
                            '<a class="siteBox item-detailLink" style="text-decoration: none;" href="http://m.zhefengle.cn/#/detail&' + value.shareId + '&">' +
                            '<span class="items-holder2">' +
                            '<span class="content-left">' +
                            '<img class="items-img" src="' + value.image + '" alt="" />' +
                            '</span>' +
                            '<span class="content-holder">' +
                            '<em class="item-title">' + value.itemTitle + '</em>' +
                            '<span class="item-price">' +
                            '<em class="item-current-price">￥ ' + value.curPriceCny + '</em>' +
                            '<em class="item-origin-price">￥ ' + value.oriPriceCny + '</em>' +
                            '</span>' +
                            '<span class="item-jump">查看详情</span>' +
                            '</span>' +
                            '</span>' +
                            '</a>' +
                            '</div>' ;
                    } else {
                        tem = '<div class="eachItem2 recomlist' + index + '">' +
                            '<a class="siteBox item-detailLink" style="text-decoration: none;" href="http://m.zhefengle.cn/#/detail&' + value.shareId + '&">' +
                            '<span class="items-holder2">' +
                            '<span class="content-left">' +
                            '<img class="items-img" src="' + value.image + '" alt="" />' +
                            '</span>' +
                            '<span class="content-holder">' +
                            '<em class="item-title">' + value.itemTitle + '</em>' +
                            '<span class="item-price">' +
                            '<em class="item-current-price">￥ ' + value.curPriceCny + '</em>' +
                            '</span>' +
                            '<span class="item-jump">查看详情</span>' +
                            '</span>' +
                            '</span>' +
                            '</a>' +
                            '</div>' ;
                    }



                    //var tem = '<div class="tintmceRecommendList recomlist'+ index +'">'+
                    //	'<a class="siteBox" href="http://m.zhefengle.cn/#/detail&'+ value.shareId +'&">'+
                    //	'<span class="sitePic">'+
                    //	'<s class="sitePicLay">'+
                    //	'<img src="'+value.image+'" class="items-img">'+
                    //	'</s>'+
                    //	'</span>'+
                    //	'<span class="siteInfo">'+
                    //	'<em class="blue siteTitle">'+ value.title +'</em>'+
                    //	'<em class="sitePrice">价格'+
                    //	'<span class="red">'+value.sign+value.curPrice+'</span><s class="grey">原价'+value.sign+value.oriPrice+'</s>'+
                    //	'</em>'+
                    //	'</span>'+
                    //	'</a>'+
                    //	'</div><p></p>';

                    divHtml = divHtml + tem;
                })
                console.log(divHtml);
                divHtml += '<p></p>';
                return divHtml;

            }
        };

        return fns;
    }

    function coAsync(editor, e) {
        return {
            next: function () {
                var divHtml = getTemplatesFn.getDivHtml(id, e);
                editor.insertContent(divHtml);
                editor.windowManager.close();
            },
            reject: function (msg) {
                alert(msg || '商品错误');
            }
        }
    }

    function showDialog() {
        var html = editor.selection.getContent(),
            data = {};

        //if(html && html.indexOf(id) > -1){
        //	data.hrefId = html.match(/href\s*=\s*"?([^\s"]+)"?/)[1];
        //	data.title = html.match(/siteTitle[^>]*>([^<]+)<\/em>/)[1]
        //}

        editor.windowManager.open({
            title: '商品ID',
            body: [

                {
                    name: 'ids',
                    type: 'textbox',
                    size: 40,
                    label: '请输入商品ID,并以逗号隔开',
                    //value: data.title || '请输入商品ID',
                }
            ],
            onSubmit: function (e) {
                //var divHtml = '<div class="'+ id +'">'+
                //					'<a class="siteBox" href="'+ e.data.href +'">'+
                //						'<span class="sitePic">'+
                //                           '<s class="sitePicLay">'+
                //							    '<img src="http://img.zhefengle.com/e109faf18782438487bf522398bea97c.jpg?imageView2/2/w/610/interlace/1/q/93" class="proPic">'+
                //						    '</s>'+
                //                       '</span>'+
                //						'<span class="siteInfo">'+
                //							'<em class="blue siteTitle">'+ e.data.title +'</em>'+
                //							'<em class="sitePrice">价格'+
                //								'<span class="red">£77.11+£28.31含税直邮（需用码，合￥995）</span><s class="grey">￥原价</s>'+
                //							'</em>'+
                //						'</span>'+
                //					'</a>'+
                //			    '</div><p></p>';
                editor.settings.recommendList.getitemdetailCallback(e, coAsync(editor, e));

                //if(!html){
                //	editor.insertContent(divHtml);
                //}else{
                //	editor.setContent(divHtml);
                //}


                //var divHtml = getTemplatesFn.getDivHtml(id,e);

                //if(!shopFns.html()){
                //	if(editor.settings.itemShopInfo && editor.settings.itemShopInfo.addWithinClickCallback && model == 'within'){   //如果是外部商品，并且callback 存在
                //		editor.settings.itemShopInfo.addWithinClickCallback(e,coAsync(editor,e));
                //		e.preventDefault();
                //		return;
                //	}
                //
                //	editor.insertContent(divHtml);   //如果callback 都不存在的话
                //	return;
                //}
                //editor.setContent(divHtml);


            }
        })
    }

    editor.addButton('recommendList', {
        icon: 'recommendList',
        tooltip: '添加商品',
        image: './lib/tinymce/widgetPlugins/imageupload/img/icon-bussiness.png',
        onClick: showDialog
    });
    this.showDialog = showDialog;
    //
    //editor.addMenuItem('recommend', {
    //	icon: 'image',
    //	text: 'Insert/edit image',
    //	context: 'itemDetaila',
    //	prependToContext: true
    //});
});
