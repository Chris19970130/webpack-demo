require('./main.css')
import $ from 'jquery';
// 通过 CommonJS 规范导入 show 函数
const show = require('./show2.js');
// 执行 show 函数
show('Webpack');