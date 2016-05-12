//引入less文件
require('./less/index.less');

//引入css
require('./css/test.css');
export Button from './Button';

//引入json
//使用[json-loader]{@link https://github.com/webpack/json-loader}
var json = require('json!./json/test.json');
console.log(json);

//引入图片
var img = document.createElement('img');
img.src = require('./img/test.png');

document.getElementById('img_wrapper').appendChild(img);

//使用环境变量
if (__DEV__) {
    console.log("测试");
}
