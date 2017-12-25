/**
 * Created by a56832357 on 17/2/27.
 */
tinymce.PluginManager.add('test',function(editor){
    console.log("ok");
    editor.addButton("test",{
        icon: 'recommendList',
        tooltip: '添加商品',
        image : '/lib/tinymce/widgetPlugins/imageupload/img/icon-bussiness.png',
        onClick:showDialog
    });
    function showDialog(){
        var html = editor.getContent();
        console.log( html );
        var current = editor.selection.getContent();
        console.log(current);  //光标选择的
        console.log("editor");
        console.log(editor);
        console.log(editor.selection);
        console.log(editor.selection.getNode()); //当前node
        console.log(this);
        editor.insertContent("<p>插入的test</p>");
    }
})