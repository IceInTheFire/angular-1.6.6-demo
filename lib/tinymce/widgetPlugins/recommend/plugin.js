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

tinymce.PluginManager.add('recommend', function(editor) {
    var id = 'tintmceRecommend';

	function showDialog() {
		var html = editor.selection.getContent(),
			data = {};
        var divHtml = '<div class="'+ id +'">'+
                            '<div class="tintmceRecommendPro">请输入引用</div>'+
                      '</div><p></p>';

		if(html && html.indexOf(id) > -1){
			data.title = html.match(/tintmceRecommendTitle[^>]*>([^<]+)<\/div>/)[1]
		}

        if(!html){
            editor.insertContent(divHtml);
        }else{
            editor.setContent(divHtml)
        }
	}

	editor.addButton('recommend', {
		icon: 'recommend',
		tooltip: '添加正文小标题',
		image : '/lib/tinymce/widgetPlugins/imageupload/img/icon-title.png',
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
