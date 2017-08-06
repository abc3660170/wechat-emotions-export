var fs = require('fs');
var resize = require('../lib/resize')
var path = require('path')
var rsz = require('rsz')

rsz('image/test.jpg', 500, 500, function (err, buf) {
    console.log("11111")
    console.log(err)
    fs.writeFileSync('image/test1.jpg', buf)
})

