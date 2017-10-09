/*
 ****个人工具函数-常用方法
 ****Time：2017-10-09 
 ****author:gaopengfei
 */
;
(function(pf) {
    'user strict';

    pf = pf || {};

    //判断数组
    pf.isArray = function(arg) {
        var str;
        if (typeof arg !== 'object') {
            return false;
        }
        str = Object.prototype.tostring.call(arg);
        return str === '[object Array]';
    }

    //判断对象
    pf.isObject = function() {
        var str;
        if (typeof arg !== 'object') {
            return false;
        }
        str = Object.prototype.tostring.call(arg);
        return str === '[object Object]';
    }


})($pf);