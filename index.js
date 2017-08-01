var fs = require('fs');
var rename = require('./lib/rename')
var path = require('path')
/******* 定义环境变量 *******/
const uuidv1 = require('uuid/v1');
var INPUT_DIR = 'C:\\Users\\Tao\\Documents\\WeChat Files\\ct890908\\CustomEmotions',
    OUTPUT_DIR = 'D:\\output',
    OUTPUT_DIR_TEMP = OUTPUT_DIR+ path.sep +uuidv1();
    OUTPUT_NAME = 'emoji';
    // 创建临时目录
    fs.mkdirSync(OUTPUT_DIR_TEMP);
// 通过指定的路径查找表情文件
fs.access(INPUT_DIR,function(err){
    if(!err){
        rename(INPUT_DIR,OUTPUT_DIR_TEMP,{"name":OUTPUT_NAME})
            .then(function(){
                console.log("微信改名OK")
            })
            .catch(err2 => {
                console.log("微信表情生成失败!",err2)
            })
    }else{
        console.error("微信表情路径不存在！")
    }
})
