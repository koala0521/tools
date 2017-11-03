/*
 ****个人工具函数-验证方法
 ****Time：2017-4-27 
 ****author:gaopengfei
 */

;
(function(pf) {

    var $ = pf;

    function isMail(str) {

        var reMail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reMail.test(str);
    }

    function isInt(str) {

        var reInt = /^\d+$/;;

        return reInt.test(str);

    }

    function isFloat(str) {

        var reFloat = /^([0-9][0-9]*)+(\.[0-9]{1,2})?$/;

        return reFloat.test(str);
    }

    //匹配身份证
    function isIDCode(sId) {

        var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
        var iSum = 0;
        var info = "";
        var pass = true;
        if (!/^\d{17}(\d|x)$/i.test(sId)) {
            info = "你输入的身份证长度或格式错误";
            console.log(info);
            return false;
        }
        sId = sId.replace(/x$/i, "a");
        if (aCity[parseInt(sId.substr(0, 2))] == null) {
            info = "你的身份证地区非法";
            console.log(info);
            return false;

        }
        sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
        var d = new Date(sBirthday.replace(/-/g, "/"));
        if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
            info = "身份证上的出生日期非法";
            console.log(info);
            return false;
        }
        for (var i = 17; i >= 0; i--) {
            iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
        }
        if (iSum % 11 != 1) {
            info = "你输入的身份证号非法";
            console.log(info);
            return false;
        }
        //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");	//此次还可以判断出输入的身份证号的人性别
        return pass;
    }

    $.isMail = isMail;
    $.isInt = isInt;
    $.isFloat = isFloat;
    $.isIDCode = isIDCode;

    $.isObject = function(arg) {

        return {}.toString.call(arg) === '[object Object]';
    }

    $.isArray = function(arg) {

        return {}.toString.call(arg) === '[object Array]';
    }
    $.isElement = function(arg) {
        return {}.toString.call(arg) === '[object HTMLElement]';
    }
    $.isString = function(arg) {

        return typeof arg === 'string';
    }

    $.isFunction = function(arg) {
        return typeof arg === 'function';
    }

    $.isNumber = function(arg) {
        return typeof arg === 'number';
    }

})($pf);