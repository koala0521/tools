/*
 ****个人工具函数
 ****Time：2017-5-2 
 ****author:gaopengfei
 */

(function($) {

    $.creat = function(elName) {
        var el = null,
            className = [],
            argObj,
            target;

        if (typeof elName === 'string') {

            el = document.createElement(elName);
        }
        for (var index = 1; index < arguments.length; index++) {

            if (typeof arguments[index] === 'string') {
                className = arguments[index].split(' ');
            }

            if ($.isObject(arguments[index])) {
                argObj = arguments[index];
            }

            if ($.isElement(arguments[index])) {

                target = arguments[index];
            }

        }

        for (var key in argObj) {
            if (argObj.hasOwnProperty(key)) {
                el[key] = argObj[key];
            }
        }

        for (var index = 0; index < className.length; index++) {
            el.className += className[index] + ' ';
        }
        if (target) {
            console.log(el, target);
            $.appendTo(el, target);
        }

        return el;
    };

    $.attr = function(el, attr, value) {

        if (typeof el !== 'object') {

            throw new Error('arguments[0] is not a object!');
        }

        var l = arguments.length;

        if (l === 2) {

            return el[attr] || el.dataset[attr];
        }

        if (l === 3 || l > 3) {

            el.dataset[attr] = value;
            return el;
        }
    }


    $.trim = function(str) {

        var re = /(^\s*)|(\s*$)/g;

        return str.replace(re, '');

    }

})($pf);