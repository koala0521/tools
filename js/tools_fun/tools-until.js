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
        str = Object.prototype.toString.call(arg);
        return str === '[object Array]';
    }

    //判断对象
    pf.isObject = function(arg) {
        var str;
        if (typeof arg !== 'object') {
            return false;
        }
        str = Object.prototype.toString.call(arg);
        return str === '[object Object]';
    }

    //检测空对象
    pf.isEmatyObjset = function(arg) {
        var len = 0;
        if (!pf.isObject(arg)) {
            throw new Error('arg Error: "arg",is not a Object');
        }
        for (var key in arg) {
            if (object.hasOwnProperty(key)) {
                len++;
            }
        }
        return !!len;
    }

    //检测函数
    pf.isFunction = function(arg) {
        return !!(typeof arg === 'function');
    }

    //复制对象
    pf.extend = function() {
        var i = 1,
            deep = false,
            len = arguments.length,
            arg,
            key,
            src,
            copy,
            clone,
            target = arguments[0] || {}; //合并后的对象
        if (typeof target === 'boolean') { //深度拷贝

            deep = arguments[0];
            target = arguments[i] || {};
            i++;
        }
        if (typeof target !== 'object' && !Elf.utils.isFunction(target)) {

            target = {};
        }
        if (i === len) { //只传入一个非布尔值的参数，或者传入一个布尔值和一个其他参数时
            target = window;
            i--;
        }
        for (; i < len; i++) {
            if (arguments[i] !== null) {
                arg = arguments[i]; //待合并的每一个对象
                for (key in arg) { //遍历这个对象
                    if (arg.hasOwnProperty(key)) { //检测是否是自身的属性
                        src = target[key]; //源对象该属性
                        copy = arg[key]; //待复制对象的该属性
                        if (target === copy) { //源对象和 带复制的对象的属性是同一个对象

                            continue; //跳出循环，进行下一次复制
                        }
                        if (deep && copy && (pf.isObject(copy) || pf.isArray(copy))) {

                            if (pf.isArray(copy)) {
                                clone = src && pf.isArray(src) ? src : []; //源对象属性为数组，把目标数组复制到源对象子数组
                            } else {
                                clone = src && pf.isObject(src) ? src : {};
                            }

                            //递归复制
                            target[key] = pf.extend(deep, clone, copy);

                        } else if (copy !== undefined) { //非深度复制 || 目标不是对象或者数组，不需要深度复制
                            target[key] = copy;
                        }
                    }
                }
            }

        }

        return target;
    }
})($pf);