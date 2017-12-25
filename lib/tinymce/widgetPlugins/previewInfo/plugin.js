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

tinymce.PluginManager.add('previewInfo', function(editor) {
	var settings = editor.settings, sandbox = !tinymce.Env.ie;

//    editor.addCommand('mcePreviewInfo', function() {

    function mcePreviewInfo(width,height) {
		editor.windowManager.open({
			title: 'previewInfo',
			width: parseInt(width),
			height: parseInt(height),
			html: '<iframe src="javascript:\'\'" frameborder="0"' + (sandbox ? ' sandbox="allow-scripts"' : '') + '></iframe>',
			buttons: {
				text: 'Close',
				onclick: function() {
					this.parent().parent().close();
				}
			},
			onPostRender: function() {
				var previewHtml, headHtml = '';

				headHtml += '<base href="' + editor.documentBaseURI.getURI() + '">';

				tinymce.each(editor.contentCSS, function(url) {
					headHtml += '<link type="text/css" rel="stylesheet" href="' + editor.documentBaseURI.toAbsolute(url) + '">';
				});

				var bodyId = settings.body_id || 'tinymce';
				if (bodyId.indexOf('=') != -1) {
					bodyId = editor.getParam('body_id', '', 'hash');
					bodyId = bodyId[editor.id] || bodyId;
				}

				var bodyClass = settings.body_class || '';
				if (bodyClass.indexOf('=') != -1) {
					bodyClass = editor.getParam('body_class', '', 'hash');
					bodyClass = bodyClass[editor.id] || '';
				}

				var dirAttr = editor.settings.directionality ? ' dir="' + editor.settings.directionality + '"' : '';

				previewHtml = (
					'<!DOCTYPE html>' +
					'<html>' +
					'<head>' +
						headHtml +
					'</head>' +
					'<body id="' + bodyId + '" class="mce-content-body ' + bodyClass + '"' + dirAttr + '>' +
						editor.getContent().replace(/<\s*(\w+)\s*>(&nbsp;|\s)*<\/\s*\1\s*>/gi,'') +
					'</body>' +
					'</html>'
				);

				if (!sandbox) {
					// IE 6-11 doesn't support data uris on iframes
					// so I guess they will have to be less secure since we can't sandbox on those
					// TODO: Use sandbox if future versions of IE supports iframes with data: uris.
					var doc = this.getEl('body').firstChild.contentWindow.document;
					doc.open();
					doc.write(previewHtml);
					doc.close();
				} else {
					this.getEl('body').firstChild.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(previewHtml);
				}
			}
		});
	};

	editor.addButton('previewInfo', {
        icon : 'preview',
		title: 'previewInfo',
        type: 'listbox',
        values: [
            { text: 'ios5',value:'1',icon:'',onClick : function(){
                mcePreviewInfo(320,568);
            }},
            { text: 'ios6',value:'2',icon:'',onClick : function(){
                mcePreviewInfo(375,627);
            }},
            { text: 'ios6s',value:'3',icon:'',onClick : function(){
                mcePreviewInfo(414,736);
            }}
        ]
	});

//	editor.addMenuItem('previewInfo', {
//        icon : 'preview',
//        text: 'previewInfo',
//		cmd: 'mcePreviewInfo',
//		context: 'view'
//	});
});
