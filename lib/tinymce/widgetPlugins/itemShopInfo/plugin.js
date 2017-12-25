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

tinymce.PluginManager.add('itemShopInfo', function(editor) {
    var id = 'tinymceItemShopInfo';
    var getTemplatesFn = getTemplates();
    var shopFns = fns(id);

    function getTemplates(){
        var fns = {
            getAbroadDialogHtml : function(data){
                var dialogHtml = [
                    {
                        name: 'href',
                        type: 'filepicker',
                        filetype: 'file',
                        size: 40,
                        autofocus: true,
                        label: '请输入商品链接',
                        value: data.hrefId || ''
                    },
                    {
                        name: 'title',
                        type: 'textbox',
                        filetype: 'file',
                        size: 40,
                        autofocus: true,
                        label: '请输入标题',
                        value: data.title || '请输入标题'
                    }
                ];

                return dialogHtml;
            },
            getWithinDialogHtml : function(data){
                var template = this.getAbroadDialogHtml(data);
                template.push(
                    {
                        name: 'id',
                        type: 'textbox',
                        filetype: 'file',
                        size: 40,
                        autofocus: true,
                        label: '请输入ID',
                        value: data.id || '请输入ID'
                    }
                );
                return template;
            },
            getDivHtml : function(id,e){
                //console.log(e)
                var img = e.data.image ? '<img src='+ e.data.image +'>' : '';  //数据回填
                var divHtml = '<div class="'+ id +'">'+
                                    '<a class="tinymceItemShopInfoA" href='+ e.data.href +'>'+
                                        '<span class="tinymceImglay">' +
                                            '<s class="tinymceImg">'+ img +'</s>' +
                                        '</span>'+
                                        '<span class="tinymceItemShopInfoTitle">'+ e.data.title +'</span>'+
                                    '</a>'+
                                    '<div class="tinymceItemShopInfoMain" data-text="请输入内容">请输入内容</div>'+
                               '</div><p></p>';
                return divHtml;
            },
            load : function(){
                var template = '<div>加载中</div>';
                return template;
            }
        };

        return fns;
    }

    function fns(id){
        return {
            html : function(){
                return editor.selection.getContent();   //获取选中的数据
            },
            isEdit : function(){        //判断是不是修改
                return this.html().indexOf(id) > -1;
            },
            getData : function(){
                var data = {};
                var html = this.html();

                if(html && this.isEdit()){
                    data.hrefId = html.match(/href\s*=\s*"?([^\s"]+)"?/)[1];
                    data.title = html.match(/tinymceItemShopInfoTitle[^>]*>([^<]+)<\/span>/)[1]
                }
                return data;
            },
            bodyAppendLoad : function(){

            }
        }
    };

    function coAsync(editor,e){
        return {
            next : function(){
                var divHtml = getTemplatesFn.getDivHtml(id,e);
                editor.insertContent(divHtml);
                editor.windowManager.close();
            },
            reject : function(){
                alert('即将关闭');
            }
        }
    }

	function showDialog(model) {
        var data = shopFns.getData();
        var dialogTemplate = model == 'within' && !shopFns.isEdit() ? getTemplatesFn.getWithinDialogHtml(data) : getTemplatesFn.getAbroadDialogHtml(data);

        editor.windowManager.open({
			title : '添加商品',
			body : dialogTemplate,
			onSubmit : function(e) {
                var divHtml = getTemplatesFn.getDivHtml(id,e);

				if(!shopFns.html()){
                    if(editor.settings.itemShopInfo && editor.settings.itemShopInfo.addWithinClickCallback && model == 'within'){   //如果是外部商品，并且callback 存在
                        editor.settings.itemShopInfo.addWithinClickCallback(e,coAsync(editor,e));
                        e.preventDefault();
                        return;
                    }
                    if(editor.settings.itemShopInfo && editor.settings.itemShopInfo.addAbroadClickCallback && model == 'abroad'){   //如果是外部商品，并且callback 存在
                        editor.settings.itemShopInfo.addAbroadClickCallback(e,coAsync(editor,e));
                        e.preventDefault();
                        return;
                    }

                    editor.insertContent(divHtml);   //如果callback 都不存在的话
                    return;
				}
                editor.setContent(divHtml);
			}
		});
	}

    this.showDialog = showDialog;

    editor.addButton('itemShopInfo', {
        icon: 'itemShopInfo',
        type: 'listbox',
        text: '添加商品',
        image : '/lib/tinymce/widgetPlugins/imageupload/img/icon-title.png',
        values: [
            { text: '内部商品',value:'1',icon:'within',onClick:function(){
                showDialog('within');
            }},
            { text: '外部商品',value:'2',icon:'abroad',onClick:function(){
                showDialog('abroad');
            }}
        ]
    });

});
