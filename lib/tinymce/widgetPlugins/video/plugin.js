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

tinymce.PluginManager.add('video', function(editor) {
    var id = 'tintmceRecommendList';
    var getTemplatesFn=getTemplatesFn();

    function getTemplatesFn(){
        var fns = {
            getDivHtml : function(id,e){
                console.log(e);
                var value = e.data;
                var divHtml =
                    '<div class="video-warp">' +
                    // '<video class="news-video" id="video" width="100%" poster="' + value.coverImageUrl + '" controls="controls"><source src="' + value.videoUrl + '" type="' + value.mimeType + '"/> </video>' +
                    '<video class="news-video" id="video" width="100%" poster="' + value.coverImageUrl + '" controls="controls">' +
                        '<source src="' + value.videoUrl + '" type="' + value.mimeType + '"/> </video>' +
                    '</div>' +
                    '<p></p>';

                //$.each(e.data.model.shares,function(index,value){
                //
                //	 var tem = '<div class="tintmceRecommendList recomlist'+ index +'">'+
                //						'<a class="siteBox" href="http://m.zhefengle.cn/#/detail&'+ value.shareId +'&">'+
                //							'<span class="sitePic">'+
                //	                           '<s class="sitePicLay">'+
                //								    '<img src="'+value.image+'" class="proPic">'+
                //							    '</s>'+
                //	                       '</span>'+
                //							'<span class="siteInfo">'+
                //								'<em class="blue siteTitle">'+ value.title +'</em>'+
                //								'<em class="sitePrice">价格'+
                //									'<span class="red">'+value.sign+value.curPrice+'</span><s class="grey">原价'+value.sign+value.oriPrice+'</s>'+
                //								'</em>'+
                //							'</span>'+
                //						'</a>'+
                //				    '</div><p></p>';
                //
                //	divHtml=tem;
                //});
                return divHtml;

            },
            gerDivHtmlByUrl : function(e) {
                console.log(e);
                var value = e.data;
                var divHtml =
                    // '<div class="video-warp">' +
                    // '<video class="news-video" id="video" width="100%" poster="' + value.coverImageUrl + '" controls="controls"><source src="' + value.videoUrl + '" type="' + value.mimeType + '"/> </video>' +
                    // '<video class="news-video" id="video" width="100%" poster="' + value.coverImageUrl + '" controls="controls">' +
                    '<p>'+
                    // '<video class="news-video" src="'+ value.url +'" controls="controls" width="100%" height="auto" autoplay preload="meta">' +
                    // '<video class="news-video" src="'+ value.url +'" controls="controls" poster="http://testimg.zhefengle.com/f6d6c83c2663dd0f6cce8a314013682b.jpg?/format/jpeg" width="100%" height="auto" preload="auto" webkit-playsinline>' +
                    // '<video style="object-fit:fill;width: 100%;" class="news-video"  controls="controls" poster="http://testimg.zhefengle.com/f6d6c83c2663dd0f6cce8a314013682b.jpg?/format/jpeg" width="100%" height="auto" preload="auto" webkit-playsinline>' +
                    '<video style="object-fit:fill;width: 100%;" class="news-video"  controls="controls" poster="'+ value.imgUrl +'" width="100%" height="auto" preload="auto" webkit-playsinline>' +
                        // '<source src="' + value.url + '" type="' + value.mimeType + '"/> </video>' +
                        '<source src="' + value.url + '" type="video/mp4" width="100%"/></source>' +
                        // '<source src="' + value.url + '" />' +
                    '</video>'+
                        '</p>'
                    // '</div>' +
                    // '<p></p>';

                return divHtml;
            }
        };

        return fns;
    }

    function coAsync(editor,e){
        return {
            next : function(){
                // console.log("test");
                // var divHtml = getTemplatesFn.getDivHtml(id,e);
                var divHtml = getTemplatesFn.gerDivHtmlByUrl(e);
                editor.insertContent(divHtml);
                editor.windowManager.close();
            },
            reject : function(){
                alert('即将关闭');
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
            title: '视频地址',
            body: [

                {
                    name: 'url',
                    type: 'textbox',
                    size: 40,
                    // label: '请输入视频ID:'
                    label: '请输入视频地址:'
                },
                {
                    name: 'imgUrl',
                    type: 'textbox',
                    size: 40,
                    // label: '请输入视频ID:'
                    label: '请输入封面图片地址:'
                }
            ],
            onSubmit: function(e) {
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

                coAsync(editor,e).next();
                // editor.settings.video.getitemdetailCallback(e,coAsync(editor,e));

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

    editor.addButton('video', {
        icon: 'video',
        tooltip: '添加视频',
        image : './lib/tinymce/widgetPlugins/imageupload/img/icon-video.png',
        onClick:showDialog
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
