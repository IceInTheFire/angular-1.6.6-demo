const gulp = require("gulp");
const concat = require("gulp-concat");  //文件合并
const clean = require("gulp-clean");    //清除
var watch = require('gulp-watch');
/*
 * https://juejin.im/entry/55c8dbb160b22a3ebdf34d57
 * 用法
 * */
const merge = require("merge-stream");
// const rev = require("gulp-rev");        //生成md5文件
const rev = require('./libDev/gulp-rev/index.js');
const revReplace = require("gulp-rev-replace"); //替换.html下的文件
const revCollector = require('./libDev/gulp-rev-collector/index.js');  //html替换。js替换
const less = require("gulp-less");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");   //css前缀
const cleanCSS = require("gulp-clean-css");
const htmlmin = require('gulp-htmlmin');  //html压缩

//清除不能加return，否则将无效

// var apps = ['welcome','angularTool','baseFirst','baseSecond','user'];
var apps = ['welcome','angularTool','user'];


gulp.task("default",["build-build-js","build-build-css","build-template"]);
gulp.task("build", ["build-config"], function(){
    return gulp.src("app-build/index.html")
        .pipe(gulp.dest('./'));
});
gulp.task("release", ["rev-replace"], function() {
    // gulp.src("app/index.html")
    //     .pipe(htmlmin(
    //         {
    //             collapseWhitespace: true,    //去掉空格
    //             removeComments:true,    //删除html里的注释
    //             minifyCSS:true,    //压缩html里的style里的css样式
    //             minifyJS:true,    //压缩html里的script里的js代码
    //         }
    //     ))
    //     .pipe(gulp.dest('./'));
});
gulp.task('watch', function () {

    // var jsWatcher = gulp.watch(['js/holder/*.js', 'js/core/*.js','js/dialog/**/dialog.*.js'], ['build-core-js']);
    var jsWatcher = gulp.watch(['js/core-holder/*.js', 'js/core/*.js','js/dialog/dialog.*.js'], ['build-core-js']);
    jsWatcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    for(var i in apps) {
        var jsSrc = 'js/app/' + apps[i] + '/controller.*.js';
        var jsDialogSrc = 'js/app/' + apps[i] + '/dialog/dialog.*.js';
        var jsTemplateWatcher = gulp.watch([jsSrc,jsDialogSrc], ['build-template-js']);
        jsTemplateWatcher.on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

        var cssSrc = 'css/app/' + apps[i] + '/*.less';
        var cssDialogSrc = 'css/app/' + apps[i] + '/dialog/dialog.*.less';
        var jsTemplateWatcher = gulp.watch([cssSrc,cssDialogSrc], ['build-template-css']);
        jsTemplateWatcher.on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
    }

    var cssWatcher = gulp.watch([
        'css/common/*.less',
        'css/dialog/*.less',
        'css/directive/*.less',
        '!css/app/**/*.less',
        '!css/test/**.less'], ['build-core-css']);
    cssWatcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

});



/*
* release 添加哈希值 start
* */
gulp.task('rev-replace', ['build-rev'], function(){
    var manifest = gulp.src(['rev/js/rev-manifest.json','rev/css/rev-manifest.json']);
    var bundle = gulp.src(['app/index.html'])
        .pipe(htmlmin(
            {
                collapseWhitespace: true,    //去掉空格
                removeComments:true,    //删除html里的注释
                minifyCSS:true,    //压缩html里的style里的css样式
                minifyJS:true,    //压缩html里的script里的js代码
            }
        ))
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('./'));

    //JS里更新引入文件版本号
    var revCollectorJs = gulp.src(['rev/module/*/*.json', 'js/all.min.js'])
        .pipe(revCollector())
        .pipe(gulp.dest('js'));;

    return merge(bundle, revCollectorJs);
    // return merge(bundle);
});
gulp.task("build-rev",["clean-rev",'compress'], function() {
    var bundle1 = gulp.src(['css/all.min.css'])
        .pipe(rev())
        // .pipe(gulp.dest('css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/css'));

    var bundle2 = gulp.src(['js/all.min.js'])
        .pipe(rev())
        // .pipe(gulp.dest('js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));

    var bundle3 = gulp.src(['css/app/*/template.min.css'])
        .pipe(rev())
        // .pipe(gulp.dest('css/module'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/module/css'));

    var bundle4 = gulp.src(['js/app/*/template.min.js'])
        .pipe(rev())
        // .pipe(gulp.dest('js/module'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/module/js'));

    return merge(bundle1,bundle2,bundle3,bundle4);
});
gulp.task('clean-rev',function() {
    gulp.src("rev", {read: false})
        .pipe(clean());
});
/*
* 添加哈希值 end
* */
/*
* release全部压缩 start
* */
gulp.task('compress',['release-all-js','release-all-css','release-template'], function(){
})
/*
 * release全部压缩 end
 * */


/*
* 替换config.js文件 start
* */
// gulp.task("clean-config", function() {
//     gulp.src(['js/holder/config.js'], {read: false})
//         .pipe(clean());
// });
gulp.task('build-config-before',function(){
    // gulp.src('./config/config-build.js')
    //     .pipe(concat('config.js'))
    //     .pipe(gulp.dest('js/holder'));
})
gulp.task("build-config", ['build-config-before'], function() { //切换配置完后，重新生成core文件
    // return gulp.src([
    //     'js/*/**.js', '!js/app/*/**.js','!js/module/*/**.js',
    // ])
    //     .pipe(concat('core.js'))
    //     .pipe(gulp.dest('js'));
});
gulp.task("release-config", function() {
    // gulp.src('./config/config-release.js')
    //     .pipe(concat('config.js'))
    //     .pipe(gulp.dest('js/holder'));
});
/*
 * 替换config.js文件 end
 * */

gulp.task('build-template',['build-template-css','build-template-js'],function() {
    return;
});
gulp.task('release-template',['build-template-min-css','build-template-min-js'], function(){
    return;
})
/*
 * template less打包 start
 * */
gulp.task('clean-template-css', function () {
    return
    gulp.src(['css/app/*/template.min.css','css/app/*/template.css'], {read: false})
        .pipe(clean());
});
gulp.task('build-template-css',['clean-template-css'], function() {
    var tasks = [];
    for(var i in apps) {
        var task = gulp.src(['css/app/'+apps[i]+'/**/*.less'])
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            // .pipe(cleanCSS())
            .pipe(concat('template.css'))
            .pipe(gulp.dest('css/app/'+apps[i]));
        tasks.push(task);
    }
    return merge.apply(null, tasks);
});
gulp.task('clean-template-min-css', function () {
    return
    gulp.src(['css/app/*/template.min.css'], {read: false})
        .pipe(clean());
});
gulp.task('build-template-min-css', ['clean-template-min-css'], function() {
    var tasks = [];
    for(var i in apps) {
        var task = gulp.src(['css/app/'+apps[i]+'/template.css'])
        // .pipe(less())
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
            .pipe(cleanCSS())
            .pipe(concat('template.min.css'))
            .pipe(gulp.dest('css/app/'+apps[i]));
        tasks.push(task);
    }
    return merge.apply(null, tasks);
});
/*
 * template less打包 end
 * */
/*
* template js打包 start
* */
gulp.task('clean-template-js', function () {
    return
    gulp.src(['js/app/*/template.js'], {read: false})
        .pipe(clean());
});
gulp.task('build-template-js', ['clean-template-js'], function() {
    var tasks = [];
    for(var i in apps) {
        var task = gulp.src(['js/app/'+apps[i]+'/**/*.js','!js/app/'+apps[i]+'/template.js','!js/app/'+apps[i]+'/template.min.js'])
        // .pipe(uglify())
            .pipe(concat('template.js'))
            .pipe(gulp.dest('js/app/'+apps[i]));
        tasks.push(task);
    }
    return merge.apply(null, tasks);
});
gulp.task('clean-template-min-js', function () {
    return
    gulp.src(['js/app/*/template-min.js'], {read: false})
        .pipe(clean());
});
gulp.task('build-template-min-js', ['clean-template-min-js'], function() {
    var tasks = [];
    for(var i in apps) {
        var task = gulp.src(['js/app/'+apps[i]+'/template.js'])
            .pipe(uglify())
            .pipe(concat('template.min.js'))
            .pipe(gulp.dest('js/app/'+apps[i]));
        tasks.push(task);
    }
    return merge.apply(null, tasks);
});
/*
 * template js打包 end
 * */

/*
* release-all-js   start
* */
gulp.task("release-all-js", ['release-core-js'], function(){
    return gulp.src([
        'js/node.js',
        'js/lib.js',
        'js/core.js'
    ])
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        // .pipe(concat('all.min.css'))
        .pipe(gulp.dest('js'));
});
gulp.task("release-clean-js", function() {
    return
    // gulp.src(['js/all.min.js','js/node.js','js/lib.js','js/core.js'], {read: false})
    gulp.src(['js/core.js'], {read: false})
        .pipe(clean());
});
gulp.task("release-core-js",["release-config","release-clean-js"], function(){
    return gulp.src([
        'js/*/**.js', '!js/app/*/**.js','!js/module/*/**.js',
    ])
    // .pipe(uglify())
        .pipe(concat('core.js'))
        .pipe(gulp.dest('js'));
});
/*
 * release-all-js   end
 * */
gulp.task("release-all-css", function(){
    gulp.src([
        'css/node.css',
        'css/lib.css',
        'css/core.css'
    ])
        .pipe(cleanCSS())
        .pipe(concat('all.min.css', {newLine: '\r\n'}))
        // .pipe(concat('all.min.css'))
        .pipe(gulp.dest('css'));
});


/*
* node.js core.js lib.js  打包 start
* */
gulp.task("build-build-js", ["build-clean-js",'build-node-js','build-core-js','build-lib-js'], function() {
    return ;
    // gulp.src([
    //     'js/node.js',
    //     'js/lib.js',
    //     'js/core.js'
    // ])
    //     .pipe(uglify())
    //     .pipe(concat('all.min.js'))
    //     // .pipe(concat('all.min.css'))
    //     .pipe(gulp.dest('js'));
});
gulp.task("build-clean-js", function() {
    return
    // gulp.src(['js/all.min.js','js/node.js','js/lib.js','js/core.js'], {read: false})
    gulp.src(['js/node.js','js/lib.js','js/core.js'], {read: false})
        .pipe(clean());
});
gulp.task("build-node-js", function() {
    return gulp.src([
        './node_modules/angular/angular.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/oclazyload/dist/ocLazyLoad.min.js',

        // './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',    //模态框
        // './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.js',
        // './node_modules/angular-sortable-view/src/angular-sortable-view.min.js',
        './node_modules/angular-ui-notification/dist/angular-ui-notification.min.js',
        './node_modules/ng-file-upload/dist/ng-file-upload-all.min.js',
        // './node_modules/angular-sortable-view/angular-sortable-view.js',
        // './node_modules/video.js/dist/video.min.js',
        // './node_modules/flv.js/dist/flv.min.js',
        // './node_modules/cropper/dist/cropper.min.js',
    ])
    // .pipe(uglify())
        .pipe(concat('node.js'))
        // .pipe(concat('all.min.css'))
        .pipe(gulp.dest('js'));
});
gulp.task("build-core-js", function(){
    return gulp.src([
        'js/*/**.js', '!js/app/*/**.js','!js/module/*/**.js',
    ])
    // .pipe(uglify())
        .pipe(concat('core.js'))
        .pipe(gulp.dest('js'));
});
gulp.task("build-lib-js", function() {
    return gulp.src([
        // './lib/bootstrap/js/bootstrap.min.js',
        // './lib/angular-ui-grid/ui-grid.js',
        // './lib/jqueryform/jquery.form.min.js',
        './lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
        // './lib/bootstrap-datetimepicker/sample in bootstrap v3/bootstrap/js/bootstrap.min.js',
        './lib/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.fr.js',
        './lib/angular-sortable-view/src/angular-sortable-view.js',
        // 'js/**/**.js', '!js/app/**/**.js',
        // '!js/holder/**/**.js',
        // 'js/core/0.js',
        // 'js/holder/app.js',
        // 'js/holder/config.js',
    ])
    // .pipe(uglify())
        .pipe(concat('lib.js'))
        // .pipe(concat('all.min.css'))
        .pipe(gulp.dest('js'));
});
/*
* node.js core.js lib.js  打包 end
* */
/*
 * node.css core.css lib.css  打包 start
 * */
gulp.task("build-build-css", ['build-clean-css','build-node-css','build-core-css','build-lib-css'], function() {
    return;
    // gulp.src([
    //     'css/node.css',
    //     'css/lib.css',
    //     'css/core.css'
    // ])
    //     .pipe(cleanCSS())
    //     .pipe(concat('all.min.css', {newLine: '\r\n'}))
    //     // .pipe(concat('all.min.css'))
    //     .pipe(gulp.dest('css'));
});
gulp.task("build-clean-css", function() {
    return
    // gulp.src(['css/all.min.css','css/node.css','css/lib.css','css/core.css'], {read: false})
    gulp.src(['css/node.css','css/lib.css','css/core.css'], {read: false})
        .pipe(clean());
});
gulp.task("build-node-css", function() {
    return gulp.src([
        './node_modules/angular-ui-notification/dist/angular-ui-notification.min.css',
        // './node_modules/video.js/dist/video-js.min.css',
        // './node_modules/cropper/dist/cropper.min.css'
    ])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cleanCSS())
        // .pipe(concat('node.min.css', {newLine: '\r\n'}))//换行
        .pipe(concat('node.css'))
        .pipe(gulp.dest('css'));
});
gulp.task("build-core-css", function() {
    gulp.src([
        'css/*/**.less',
        '!css/app/*/**.less',
        '!css/test/**.less'
    ])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cleanCSS())
        // .pipe(concat('core.min.css', {newLine: '\r\n'}))//换行
        // .pipe(concat('core.min.css', {newLine: ''}))
        .pipe(concat('core.css'))
        .pipe(gulp.dest('css'));
});
gulp.task("build-lib-css", function() {
    return gulp.src([
        './lib/bootstrap/css/bootstrap.css',
        // './lib/angular-ui-grid/ui-grid.min.css',
        './lib/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
    ])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cleanCSS())
        // .pipe(concat('lib.min.css', {newLine: '\r\n'}))//换行
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('css'));
});
/*
 * node.css core.css lib.css  打包 end
 * */