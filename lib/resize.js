var images = require('images')
var path = require('path')
var resizer = require('limby-resize')({
    imagemagick: require('imagemagick'),
});
/**
 *
 * @param srcfoler
 * @param destFold
 * @param options
 * @returns {Promise}
 */
function resize(files,options){
    return new Promise(function(resolve,reject){
        files.forEach(function(file){
            var filename = path.basename(file,"."+options.ext)
            var pathname = path.dirname(file)
            var destfile = pathname+path.sep+filename+"_redo."+options.ext;

            var resizer = require('limby-resize')({
                canvas: require('canvas'),
            });

            resizer.resize('/tmp/image01.jpg', {
                width: 300,
                height: 500,
                destination: '/uploads/myimage.jpg',
            });
            // resizer.resize('D:\\output\\ad3dbd80-76cc-11e7-93f2-0f234869871d\\emoji-1.gif', {
            //     width: 300,
            //     height: 500,
            //     coalesce: true, // animated gif support ( if your image magick supports )
            //     destination: 'D:\\output\\ad3dbd80-76cc-11e7-93f2-0f234869871d\\emoji-1111.gif',
            // });
            // images('D:\\output\\ad3dbd80-76cc-11e7-93f2-0f234869871d\\emoji-1.gif')
            //     .size(100)
            //     .save('D:\\output\\ad3dbd80-76cc-11e7-93f2-0f234869871d\\emoji-1111.jpg',{
            //         quality : 50
            //     })
            //fs.unlinkSync(file);
            //fs.renameSync(destfile, file)
        })
        resolve();
    })
}

module.exports  =  resize;