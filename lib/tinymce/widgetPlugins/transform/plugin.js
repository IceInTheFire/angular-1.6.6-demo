/**
 * Created by a56832357 on 17/2/27.
 */
tinymce.PluginManager.add('transform',function(editor){
    editor.addButton("transform",{
        icon: 'transform',
        tooltip: '图片转换',
        image : './lib/tinymce/widgetPlugins/imageupload/img/icon-welfare.png',
        onClick:showDialog
    });

    function showDialog(){

        var dom = editor.dom;

        var node = editor.selection.getNode();
        console.log(node);
        if(node.id == 'tinymce') {   //多行就跳过
            return;
        }

        var children = node.children;
        var num = '';
        for(var i = 0, len = children.length; i<len; i++) {
            if(children[i].tagName == 'IMG') {
                num = i;
                break;
            }
        }
        if(!(num === 0)) {
            return;
        }

        var imgClass = node.children[num].className;
        var imgSrc = node.children[num].src;
        var transformClass = (imgClass == 'insertimg') ? 'insertSmallimg': 'insertimg';

        var uniqueID = dom.uniqueId();
        if(transformClass == 'insertSmallimg') {
            // console.log("enter");
            editor.selection.getNode().remove();

            editor.selection.setNode( $('<p id="'+ uniqueID +'"><img src="'+ imgSrc +'"  class="'+ transformClass +'" alt=""></p>'));
        } else {
            editor.selection.getNode().children[num].remove();
            editor.insertContent('<p id="'+ uniqueID +'"><img src="'+ imgSrc +'"  class="'+ transformClass +'" alt=""></p>');
            // editor.selection.setNode( $('<p id="'+ uniqueID +'"><img src="'+ imgSrc +'"  class="'+ transformClass +'" alt=""></p>'));
        }

        var newParagraph = dom.select( 'p#' + uniqueID )[0];
        editor.selection.setCursorLocation( newParagraph );   //获取光标
    }
})