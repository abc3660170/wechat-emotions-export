

var fs = require('fs'),
    images = require('images'),
    path = require('path');

/**
 *
 * @param srcfoler
 * @param destFold
 * @param options
 * @returns {Promise}
 */
function rename(srcfoler,destFold,options){
    return new Promise((resolve,reject) => {
        fs.readdir(srcfoler,{'encoding':'utf8'},function(err,files){
            // 定义文件名序列
            var index = 0;
            var goodFilesNum = files.length;
            //文件改名进度
            var process = 0;
            if(!err){
                // 遍历每个文件改名顺带加个后缀名
                files.forEach(function (file) {
                    fs.readFile(srcfoler+path.sep+file,function (err2,data) {
                        fs.writeFile(destFold+path.sep+options.name+'-'+ (++index) +".gif",data,function(err3){
                            if(err3){
                                console.log('文件：'+file+'转换失败！',err3)
                                //有效文件减少1
                                goodFilesNum--;
                            }
                            if(++process === files.length){
                                console.log("全部转换完成，共"+goodFilesNum+"个有效文件")
                                resolve(destFold)
                            }
                        })
                    })
                })
            }else{
                console.error("获取微信表情输入路径失败！")
            }
        })
    })
}



module.exports  =  rename;