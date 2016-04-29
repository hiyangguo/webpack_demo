// require('/src/less/index.less');
export Button from './Button';

var img = document.createElement('img');
img.src = require('./img/test.png');

document.body.appendChild(img)

if (__DEV__) {
    console.log("测试");
}
