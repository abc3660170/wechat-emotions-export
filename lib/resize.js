var images = require('images')
var path = require('path')
var fs = require('fs')
// var resizer = require('limby-resize')({
//     imagemagick: require('imagemagick'),
// });
var rsz = require('rsz')
/**
 *
 * @param srcfoler
 * @param destFold
 * @param options
 * @returns {Promise}
 */
function resize(files,options){
    return new Promise(function(resolve,reject){


        rsz('D:\\\\output\\\\test\\\\emoji-5.jpg', 500, 500, function (err, buf) {
            console.log("11111")
            console.log(err)
            fs.writeFileSync('D:\\\\output\\\\test\\\\emoji-11111.png', buf)
        })

        // var resizer = require('limby-resize')({
        //     //imagemagick: require('imagemagick'),
        //     canvas: require('canvas'),
        // });
        // resizer.resize('D:\\output\\test\\emoji-1.gif', {
        //     width: 30,
        //     height: 50,
        //     //coalesce: true,
        //     destination: 'D:\\output\\test\\emoji-11111.gif',
        // });
        files.forEach(function(file){
            var filename = path.basename(file,"."+options.ext)
            var pathname = path.dirname(file)
            var destfile = pathname+path.sep+filename+"_redo."+options.ext;




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