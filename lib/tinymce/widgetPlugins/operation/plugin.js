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

tinymce.PluginManager.add('operation', function(editor) {
    var id = 'tintmceOperation';

	function showDialog() {
		var html = editor.selection.getContent(),
			data = {};

		if(html && html.indexOf(id) > -1){
            data.text = html.match(/text[^>]*>([^<]+)<\/span>/)[1]
		}

		editor.windowManager.open({
			title: '操作',
			body: [
				{
					name: 'img',
					type: 'textbox',
					size: 40,
					autofocus: true,
					label: '请输入图片地址',
					value: data.img || ''
				},
				{
					name: 'text',
					type: 'textbox',
					size: 40,
					label: '请输入文本',
					value: data.text || '请输入文本'
				}
			],
			onSubmit: function(e) {
				var img = e.data.img || '';
				var divHtml = '<section class="'+ id +'">'+
									'<a href="javascript:;" class="tintmceRecommendMain" imgHref="'+ img +'">' +
										'<img src="http://img.zhefengle.com/8f1b3656f33f4deeaecfbe203934b1ff.jpg" class="imgLay">'+
										'<span class="text">'+ e.data.text +'</span>'+
										'<img src="http://img.zhefengle.com/5875359bfaa744cc8386540a2db46e44.jpg " class="rightIcon">'+
									'</a>'+
								'</section><p></p>';

				if(!html){
					editor.insertContent(divHtml);
				}else{
					editor.setContent(divHtml)
				}
			}
		})
	}

	editor.addButton('operation', {
		icon: 'operation',
		tooltip: '操作',
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
