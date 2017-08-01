var fs = require('fs');
var rename = require('./lib/rename')
var resize = require('./lib/resize')
var path = require('path')
/******* 定义环境变量 *******/
const uuidv1 = require('uuid/v1');
var INPUT_DIR = 'C:\\Users\\Tao\\Documents\\WeChat Files\\ct890908\\test',
    OUTPUT_DIR = 'D:\\output',
    OUTPUT_DIR_TEMP = OUTPUT_DIR+ path.sep +uuidv1();
    OUTPUT_NAME = 'emoji';
    // 创建临时目录
    fs.mkdirSync(OUTPUT_DIR_TEMP);
// 通过指定的路径查找表情文件
fs.access(INPUT_DIR,function(err){
    if(!err){
        rename(INPUT_DIR,OUTPUT_DIR_TEMP,{"name":OUTPUT_NAME,"ext":"gif"})
            .then(function(files){
                console.log("微信改名OK")
                resize(files,{"ext":"gif"})
            })
            .then(function(){
                console.log("尺寸全部调整完成")
            })
            .catch(err2 => {
                console.log("微信表情生成失败!",err2)
            })
    }else{
        console.error("微信表情路径不存在！")
    }
})
