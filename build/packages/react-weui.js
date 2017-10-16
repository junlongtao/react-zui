(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.WeUI = factory(global.React));
}(this, (function (React) { 'use strict';

React = 'default' in React ? React['default'] : React;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * 常用函数工具类
 */
var userAgent = navigator.userAgent;

var Util = function () {
    function Util() {
        classCallCheck(this, Util);
    }

    createClass(Util, null, [{
        key: 'requireRole',


        //微信里自动授权登录


        /**
         * 获取Y轴滚动条滚动距离
         * @returns {number}
         */


        /**
         * 获取当前年份
         * @returns {number}
         */


        /**
         * 滚动Y轴至底部
         * @returns {boolean}
         */


        /**
         * 跳转web链接
         * @param url
         */


        /**
         * 确认操作
         * @param content
         * @param yes
         */


        /**
         * 记录zc_source
         */


        /**
         * 从categoryTags中获取第一个category
         * @param tags
         * @returns {*}
         */


        /**
         * 获取App版本,默认是requirement
         * @returns {string}
         */


        /**
         * 检测是否为空对象
         * @param obj
         * @returns {boolean}
         */


        /**
         * 页面从底部向上滑入
         * @param url
         * @returns {boolean}
         */


        /**
         * 允许/禁止页面滚动
         * @param scroll
         */


        /**
         * 绑定滚动至顶部时回调
         * @param callback
         */


        /**
         * 记录Y轴滚动条当前滚动距离
         */


        /**
         * 删除数组中某个元素
         * @param arr
         * @param val
         * @returns {*}
         */


        /**
         * 获取int型数组中某个元素的下标
         * @param arr
         * @param value
         * @returns {*}
         */


        /**
         * 隐藏或显示全局的ajax loading
         * @param visible
         */


        /**
         * 身份证隐藏中间位数,只显示前六后四
         * @param idcard
         * @returns {string}
         */


        /**
         * 去除所有HTML标记
         * @param str
         * @returns {*}
         */


        /**
         * 清除cookie
         */


        /**
         * clear all intervals of window.mInervals
         * @param intervalId
         */


        /**
         * 根据还剩余秒数获取剩余天数
         * @param leftsec
         * @returns {number}
         */


        /**
         * 使用当前url添加query string
         * @param params
         * @returns {string}
         */


        /**
         * 从当前页面的URL获取参数值
         * @param name
         * @returns {*}
         */


        /**
         * 根据时间戳获取日期
         * @param time
         * @param format 日期格式, 默认 'YYYY-MM-DD'
         * @returns {*}
         */


        /**
         * 阿拉伯数字金额转中文数字, 如 1000 返回 壹万元整
         * @param n
         * @returns {*}
         */


        /**
         * 根据浮点数获取分数形式字符串,如 0.2 返回 2/10
         * @param num
         * @returns {string}
         */


        /**
         * 跳转登录页
         */


        /**
         * 是否登录
         * @returns {boolean}
         */


        /**
         * 移除cookie
         * @param name
         */


        /**
         * 获取cookie
         * @param name
         * @returns {string}
         */


        /**
         * layer toast
         * @param msg
         * @param time
         */


        /**
         * layer错误提示弹窗
         * @param msg
         * @param time
         */


        /**
         * 终端类型检测
         * @returns {{trident: boolean, presto: boolean, webKit: boolean, gecko: boolean, mobile: boolean, ios: boolean, android: boolean, iPhone: boolean, iPad: boolean, webApp: boolean}}
         */
        value: function requireRole(role, tipText) {
            if (Util.getVersion() != role) {
                Util.confirm(tipText, function () {
                    Util.setStorage('change_version_rurl', location.href);
                    Util.slideIn('#/me/talent');
                });
                return false;
            }
            return true;
        }

        //转换\r\n为<br/>


        /**
         * 0~9个位数字前面补0
         * @param i
         * @returns {string}
         */


        /**
         * 判断是否安装微信
         * @param callback
         */


        /**
         * 获取App version
         * @returns {string}
         */


        /**
         * 添加当前登录用户的推荐id
         */


        /**
         * 获取categoryTags中的tag数量
         * @param tags
         * @returns {number}
         */


        /**
         * 设置App版本
         * @param version
         */


        /**
         * 获取简历填写完整度
         * @param resume
         * @returns {*}
         */


        /**
         * 移除<br/>
         * @param str
         * @returns {*}
         */


        /**
         * 页面旋转进入
         * @param url
         * @returns {boolean}
         */


        /**
         * 页面向左滑入
         * @param url
         * @param type
         * @returns {boolean}
         */


        /**
         * 绑定滚动至底部时的回调
         * @param callback
         */


        /**
         * 恢复滚动条之前的滚动距离
         */


        /**
         * 根据最大长度限制截断字符串
         * @param str
         * @param length
         * @returns {string}
         */


        /**
         * 获取数组中某个元素的下标
         * @param arr
         * @param val
         * @returns {number}
         */


        /**
         * 环境限制,如 限制在微信里使用
         * @param env
         */


        /**
         * 跳转APP应用市场
         * 微信内跳转应用宝,非微信内跳转各自的应用市场
         */


        /**
         * 调起APP打开指定页面
         * @param url 要打开的页面URL,需包含完整的schema,
         * 如 tthybc://user/detail?id=***
         */


        /**
         * 添加千分位, 如 1000 返回 1,000
         * @param num
         * @returns {*}
         */


        /**
         * 添加cookie
         * @param name
         * @param value
         * @param hour
         * @param path
         * @param domain
         * @returns {boolean}
         */


        /**
         * 将intervalId存入window.mInervals,在Page Component
         * 载入时统一用Util.clearInterval清除
         * @param content
         * @param msecond
         * @returns {number}
         */


        /**
         * html特殊字符转义
         * @param str
         * @returns {string}
         */


        /**
         * 在当前url上添加query string
         * @param params
         * @returns {string}
         */


        /**
         * 获取当前url中的键值对
         * @returns {{}}
         */


        /**
         * 根据日期字符串获取周几
         * @param date
         * @returns {string}
         */


        /**
         * 金额单位分转为元,
         * @param num 金额数,单位分
         * @param language 返回形式, 'ch'返回中文形式(壹万元整), ''返回数字形式(￥1,000)
         * @returns {*}
         */


        /**
         * 根据浮点数返回"xx分成"形式的字符串,如 0.2 返回 二八分成
         * @param num
         * @returns {string}
         */


        /**
         * 根据浮点数获取百分值
         * @param num
         * @param option 参数配置,
         * option.unit: 返回值是否带%, true,返回带%,option.unit=false,返回不带%
         * option.decimal: 返回值精确小数点位数,默认为2
         * @returns {*}
         */


        /**
         * 需要登录
         */


        /**
         * 要求微信登录
         */


        /**
         * 添加cookie
         * @param name
         * @param value
         * @param ms
         */


        /**
         * layer弹窗提示用户进行实名认证
         * @param msg
         */


        /**
         * 错误提示页面
         * @param msg
         */


        /**
         * 采用强制覆盖合并对象n到对象o
         * @param o
         * @param n
         * @returns {*}
         */


        //转换\r\n为<br/>

    }]);
    return Util;
}();

Util.enableAopFeature = function () {
    Function.prototype.before = function (func) {
        var _self = this;
        return _self.beforeFuncList ? _self.beforeFuncList.push(func) : _self.beforeFuncList = [func], function () {
            for (var i = _self.beforeFuncList.length - 1; i > -1; i--) {
                if (_self.beforeFuncList[i].apply(this, arguments) === !1) return !1;
            }return _self.apply(this, arguments);
        };
    };
    Function.prototype.after = function (func) {
        var _self = this;
        return function () {
            var ret = _self.apply(this, arguments);
            return ret === !1 ? !1 : (func.apply(this, arguments), ret);
        };
    };
};

Util.conf = function (name) {
    var conf = ENV === 'dev' ? Util.extend(mainConf, localConf) : mainConf;
    return conf[name];
};

Util.os = {
    trident: userAgent.indexOf('Trident') > -1, //IE内核
    presto: userAgent.indexOf('Presto') > -1, //opera内核
    webKit: userAgent.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: userAgent.indexOf('Gecko') > -1 && userAgent.indexOf('KHTML') == -1, //火狐内核
    ios: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: userAgent.indexOf('iPhone') > -1, //是否为iPhone
    iPad: userAgent.indexOf('iPad') > -1, //是否iPad
    webApp: userAgent.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    wechat: userAgent.indexOf('MicroMessenger') > -1,
    apicloud: window.location.href.indexOf('file://') === -1 ? false : true };

Util.extend = function (o, n) {
    for (var p in n) {
        o[p] = n[p];
    }
    return o;
};

Util.errorTip = function (msg) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.5;

    if (msg == '需要登录') {}
    layer.open({
        content: msg || '请求错误',
        time: time,
        shadeClose: true
    });
};

Util.errorPage = function (msg) {
    Util.assign('#error/' + msg);
};

Util.toast = function (msg) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.5;
    var callback = arguments[2];

    layer.open({
        content: msg,
        time: time,
        shadeClose: true
    });
    window.setTimeout(function () {
        callback && callback();
    }, time * 1000);
};

Util.authTip = function (msg) {
    layer.open({
        content: msg || '需要认证',
        btn: ['去认证', '取消'],
        yes: function yes(index) {
            Util.assign('#auth?rurl=' + encodeURIComponent(location.href));
            layer.close(index);
        }
    });
};

Util.getCookie = function (name) {
    var matches = (document.cookie + ';').match(new RegExp(name + "=([^;]*)"));
    return matches ? matches[1] : null;
};

Util.setCookie = function (name, value, ms) {
    var exp = new Date();
    exp.setTime(exp.getTime() + ms);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
    console.log(document.cookie);
};

Util.removeCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = Util.getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
};

Util.requireWxLogin = function () {
    window.href = window.location.href;
    Util.confirm('请您先使用微信账号登录智筹', function (res) {
        if (window.href.indexOf('/login') === -1) {
            Util.replace('#me/login?rurl=' + encodeURIComponent(window.href));
        }
    });
};

Util.isLogin = function () {
    return Util.getCookie('_identity') ? true : false;
};

Util.requireLogin = function (loginedCallback) {
    window.rurl = location.href;
    UserService.isLogin(function (res) {
        if (res.data == false && window.rurl.indexOf('/login') === -1) {
            Util.setStorage('page_animate', 'slide_up');
            Util.replace('#me/login?rurl=' + encodeURIComponent(window.rurl));
        } else {
            loginedCallback && loginedCallback();
        }
    });
};

Util.toLogin = function () {
    window.rurl = location.href;
    if (window.rurl.indexOf('/login') === -1) {
        Util.setStorage('page_animate', 'slide_up');
        Util.replace('#me/login?rurl=' + encodeURIComponent(window.rurl));
    }
};

Util.getPercent = function (num, option) {
    option = Util.extend({
        unit: true,
        decimal: 2
    }, option);

    num = parseFloat(num) * 100;
    num = num.toFixed(option.decimal);
    num = num.replace(/0+$/, '');
    if (parseInt(num) == num) {
        num = parseInt(num);
    }
    return option.unit ? num + '%' : num;
};

Util.getFraction = function (num) {
    num = parseInt(num * 10);
    if (num > 10) num = 10;
    if (num < 0) num = 0;
    return num + '/' + (10 - num);
};

Util.getFractionStr = function (num) {
    num = parseInt(num * 10);
    if (num > 10) num = 10;
    if (num < 0) num = 0;
    var numMap = {
        0: '零',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十'
    };
    return numMap[num] + numMap[10 - num] + '分成';
};

Util.arab2ch = function (n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) return "invalid input";
    var unit = "千百拾亿千百拾万千百拾元角分",
        str = "";
    n += "00";
    var p = n.indexOf('.');
    if (p >= 0) n = n.substring(0, p) + n.substr(p + 1, 2);
    unit = unit.substr(unit.length - n.length);
    for (var i = 0; i < n.length; i++) {
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
    }return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
};

Util.fen2yuan = function (num, language) {
    var yuan = parseInt(num / 100);
    switch (language) {
        case 'ch':
            return Util.arab2ch(yuan);

        default:
            return '￥' + Util.thousandBitSeperator(yuan);
    }
};

Util.getDate = function (time, format) {
    Date.prototype.Format = function (formatStr) {
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        var month = this.getMonth() + 1;
        str = str.replace(/yyyy|YYYY/, this.getFullYear());
        str = str.replace(/yy|YY/, this.getYear() % 100 > 9 ? (this.getYear() % 100).toString() : '0' + this.getYear() % 100);

        str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
        str = str.replace(/M/g, month);

        str = str.replace(/w|W/g, Week[this.getDay()]);

        str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
        str = str.replace(/d|D/g, this.getDate());

        str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
        str = str.replace(/h|H/g, this.getHours());
        str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
        str = str.replace(/m/g, this.getMinutes());

        str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
        str = str.replace(/s|S/g, this.getSeconds());

        return str;
    };
    var date = new Date();
    if (time) {
        date.setTime(parseInt(time) * 1000);
    }
    return date.Format(format || 'YYYY-MM-DD');
};

Util.getWeekDay = function (date) {
    date = new Date(date);
    return '周' + "日一二三四五六".charAt(date.getDay());
};

Util.getParam = function (name) {
    var defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (location.href.indexOf('?') === -1) {
        return defaultVal ? defaultVal : '';
    }
    var search = location.href.match(/\?(.*)/)[1];
    search = search.replace('?', '&');
    var searches = search.split('&');
    for (var item in searches) {
        var pattern = new RegExp(name + '=' + '(.*)');
        if (searches[item].match(pattern)) {
            return decodeURIComponent(searches[item].match(pattern)[1]);
        }
    }
    return decodeURIComponent(defaultVal);
};

Util.getParams = function () {
    if (location.href.indexOf('?') === -1) return {};
    var search = location.href.match(/\?(.*)/)[1];
    search = search.replace('?', '&');
    var searchItems = search.split('&');
    var res = {};
    for (var i in searchItems) {
        var item = searchItems[i];
        var key = item.split('=')[0];
        var val = item.split('=')[1];
        res[key] = val;
    }
    return res;
};

Util.buildParams = function (params) {
    var matches = location.href.match(/(.*)\?/);
    var url = matches ? matches[1] : location.href;
    var search = '?';
    for (var i in params) {
        search += i + '=' + params[i] + '&';
    }
    return url + search.substring(0, search.length - 1);
};

Util.addParams = function (params) {
    var originParams = Util.getParams();
    return Util.buildParams(Util.extend(originParams, params));
};

Util.removeParam = function (name) {
    if (location.href.indexOf(name) === -1) {
        return location.href;
    }
    return location.href.replace(new RegExp("&?" + name + "=.*&?"), '');
};

Util.htmlSpecialChars = function (str) {
    var s = "";
    if (str.length == 0) return "";
    for (var i = 0; i < str.length; i++) {
        switch (str.substr(i, 1)) {
            case "<":
                s += "&lt;";
                break;
            case ">":
                s += "&gt;";
                break;
            case "&":
                s += "&amp;";
                break;
            case " ":
                if (str.substr(i + 1, 1) == " ") {
                    s += " &nbsp;";
                    i++;
                } else s += " ";
                break;
            case "\"":
                s += "&quot;";
                break;
            case "\n":
                s += "<br>";
                break;
            default:
                s += str.substr(i, 1);
                break;
        }
    }
    return s;
};

Util.getLeftDay = function (leftsec) {
    var left = leftsec / 60 / 60 / 24;
    return Math.floor(left);
};

Util.setInterval = function (content, msecond) {
    if (!window.mIntervals) {
        window.mIntervals = [];
    }
    var id = window.setInterval(content, msecond);
    window.mIntervals.push(id);
    return id;
};

Util.clearInterval = function (intervalId) {
    if (intervalId) {
        window.clearInterval(intervalId);
    } else if (window.mIntervals) {
        for (var i in window.mIntervals) {
            window.clearInterval(window.mIntervals[i]);
        }
    }
};

Util.addCookie = function (name, value, hour, path, domain) {
    var str = name + "=" + escape(value);
    //为0时不设定过期时间，浏览器关闭时cookie自动消失
    if (hour > 0) {
        var date = new Date();
        var ms = hour * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    path = path ? path : '/';
    domain = domain ? domain : '.maidada.cn';
    document.cookie = str + ';path=' + path + ';domain=' + domain;
    return true;
};

Util.clearCookie = function () {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
        }
    }
};

Util.thousandBitSeperator = function (num) {
    return num && num.toString().replace(/(^|\s)\d+/g, function (m) {
        return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
    });
};

Util.delHtmlTag = function (str) {
    return str.replace(/<[^>]+>/g, ""); //去掉所有的html标记
};

Util.openApp = function (url) {
    if (Util.os.iPhone) {
        Util.assign(url);
    } else {
        var ifr = document.createElement('iframe');
        ifr.display = 'none';
        ifr.src = url;
        document.body.appendChild(ifr);
        window.setTimeout(function () {
            document.body.removeChild(ifr);
        }, 5000);
    }
};

Util.hideIdcard = function (idcard) {
    return idcard.substr(0, 6) + '********' + idcard.substr(14, 4);
};

Util.appMarket = function () {
    Util.toast('您未安装APP,正在带您前往应用市场... ...', 5);
    var qqAppMarket = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ttyongche.rose';
    if (Util.os.wechat) {
        Util.assign(qqAppMarket);
    } else if (Util.os.android) {
        Util.assign(qqAppMarket);
    } else {
        Util.assign('https://itunes.apple.com/us/app/hao-you-bang-chou-peng-you/id1121929386?l=zh&ls=1&mt=8');
    }
};

Util.ajaxLoading = function (visible) {
    var loading = document.getElementById('ajax_loading');
    if (loading) {
        if (visible) {
            loading.style.display = 'block';
            //loading.className = 'weui_loading bounceInDown animated'
        } else {
            loading.style.display = 'none';
            //loading.className = 'weui_loading fadeOut animated'
        }
    }
};

Util.onlyEnv = function (env) {
    switch (env) {
        case 'wechat':
            if (!Util.os.wechat) {
                Util.assign('#');
            }
            break;
    }
};

Util.arrayIndex = function (arr, value) {
    var str = arr.toString();
    var index = str.indexOf(value);
    if (index >= 0) {
        //存在返回索引
        var reg1 = new RegExp("((^|,)" + value + "(,|$))", "gi");
        return str.replace(reg1, "$2@$3").replace(/[^,@]/g, "").indexOf("@");
    } else {
        //不存在此项
        return -1;
    }
};

Util.indexOf = function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) return i;
    }
    return -1;
};

Util.remove = function (arr, val) {
    var index = Util.indexOf(arr, val);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};

Util.maxLength = function (str, length) {
    return str.length < length ? str : str.substr(0, length) + '......';
};

Util.storeScrollPosition = function () {

    //滚动条在Y轴上的滚动距离
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;

    //浏览器视口的高度
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }

    Util.setStorage('originScrollPosition', scrollTop);
};

Util.returnOriginScrollPosition = function () {
    var y = Util.getStorage('originScrollPosition');
    window.scrollTo(0, y);
    Util.setStorage('originScrollPosition', 0);
};

Util.onScrollTop = function (callback) {
    window.onscroll = function () {
        //滚动条在Y轴上的滚动距离
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;

        if (scrollTop < 500) {
            callback && callback();
        }
    };
};

Util.onScrollBottom = function (callbackName, callback) {
    if (!window.onScrollBottomCallbacks) {
        window.onScrollBottomCallbacks = {};
    }
    window.onScrollBottomCallbacks[callbackName] = callback;

    window.onscroll = function () {
        //滚动条在Y轴上的滚动距离
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;

        //文档的总高度
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;

        //浏览器视口的高度
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }

        if (scrollTop + windowHeight >= scrollHeight) {
            for (var name in window.onScrollBottomCallbacks) {
                window.onScrollBottomCallbacks[name].call();
            }
        }
    };
};

Util.pageScroll = function (scroll) {
    if (scroll) {
        document.getElementById('container').style.overflow = null;
    } else {
        document.getElementById('container').style.overflow = 'hidden';
    }
};

Util.slideIn = function (url, type) {
    if (location.href.indexOf(url) != -1) {
        return false;
    }
    Util.setStorage('page_animate', 'slide_in');
    type === 'replace' ? Util.replace(url) : Util.assign(url);
};

Util.slideUp = function (url, type) {
    if (location.href.indexOf(url) != -1) {
        return false;
    }
    Util.setStorage('page_animate', 'slide_up');
    type === 'replace' ? Util.replace(url) : Util.assign(url);
};

Util.rotateIn = function (url, type) {
    if (location.href.indexOf(url) != -1) {
        return false;
    }
    Util.setStorage('page_animate', 'rotate_in');
    type === 'replace' ? Util.replace(url) : Util.assign(url);
};

Util.getParamsFromUrl = function (url) {
    if (url.indexOf('?') === -1) {
        return {};
    }
    var search = url.match(/\?(.*)/)[1];
    search = search.replace('?', '&');
    var searchItems = search.split('&');
    var res = {};
    for (var i in searchItems) {
        var item = searchItems[i];
        var key = item.split('=')[0];
        var val = item.split('=')[1];
        res[key] = val;
    }
    return res;
};

Util.addParamsToUrl = function (params, url) {
    var originParams = Util.getParamsFromUrl(url);
    return Util.buildParamsToUrl(Util.extend(originParams, params), url);
};

Util.buildParamsToUrl = function (params, url) {
    var matches = url.match(/(.*)\?/);
    var search = '?';
    for (var i in params) {
        search += i + '=' + params[i] + '&';
    }
    return (matches ? matches[1] : url) + search.substring(0, search.length - 1);
};

Util.removeBr = function (str) {
    str = str.replace(/<br\s?\/?>/g, '');
    return str;
};

Util.isEmptyObject = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};

Util.getResumeIntegrity = function (resume) {
    if (Util.isEmptyObject(resume)) {
        return "完成0%";
    }
    var percent_field = {
        job: 6,
        degree: 6,
        birth_year: 6,
        work_year: 6,
        intro: 12,

        tags: 10,
        works: 10,
        projects: 10,
        educations: 10,

        status: 8,
        place: 8,
        office: 8
    };

    var percent = 0;
    for (var i in percent_field) {
        if (resume[i] != undefined) {
            if (resume[i] instanceof Object) {
                if (!Util.isEmptyObject(resume[i])) {
                    percent += percent_field[i];
                }
            } else {
                if (resume[i] !== "") {
                    percent += percent_field[i];
                }
            }
        }
    }

    return percent + "%";
};

Util.getVersion = function () {
    return Util.getStorage('version') || 'requirement';
};

Util.setVersion = function (version) {
    if (version) {
        Util.setStorage('version', version);
        return true;
    } else {
        return false;
    }
};

Util.getCategory = function (tags) {
    var category = void 0;
    for (var i in tags) {
        category = i;
    }
    return category;
};

Util.getTagCount = function (tags) {
    var count = 0;
    for (var i in tags) {
        count += tags[i].length;
    }
    return count;
};

Util.storeZcSource = function () {
    var source = Util.getParam('zc_source');
    if (source) {
        Util.setStorage('zc_source', source);
    }
};

Util.addRecommendId = function () {
    UserService.isLogin(function (res) {
        res.data && UserService.info({}, function (res) {
            Util.replace(Util.addParams({
                recommend_uid: res.data.id
            }));
        });
    });
};

Util.confirm = function (content, _yes) {
    layer.open({
        content: content,
        btn: ['确认', '取消'],
        yes: function yes(index) {
            layer.close(index);
            _yes();
        }
    });
};

Util.confirmPay = function (_yes2) {
    layer.open({
        content: '付款完成前请不要关闭此窗口, 完成付款后请根据付款情况点击下面的按钮',
        btn: ['已完成付款', '付款遇到问题'],
        no: function no(index) {
            layer.close(index);
            Util.ajaxLoading(false);
        },
        yes: function yes(index) {
            layer.close(index);
            _yes2();
        }
    });
};

Util.openArticle = function (url) {
    if (Util.os.apicloud) {
        var browser = api.require('webBrowser');
        browser.open({ url: url });
    } else {
        url && Util.assign(url);
    }
};

Util.getAppVersion = function () {
    var version = '1.0.0';
    if ((typeof api === 'undefined' ? 'undefined' : _typeof(api)) == 'object') {
        version = api.appVersion;
    }
    return 'v' + version;
};

Util.scrollBottom = function () {
    //文档的总高度
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
    for (var i = 0; i < 5; i++) {
        window.scrollTo(0, scrollHeight);
    }
};

Util.wechatInstalled = function (callback) {
    if ((typeof api === 'undefined' ? 'undefined' : _typeof(api)) == 'object' && api.appInstalled) {
        var bundle = api.systemType == 'ios' ? 'weixin' : 'com.tencent.mm';
        api.appInstalled({
            appBundle: bundle
        }, function (ret, err) {
            callback && callback(ret.installed);
        });
    }
};

Util.getCurrentYear = function () {
    return new Date().getFullYear();
};

Util.getFullNum = function (i) {
    return i < 10 ? '0' + i : i;
};

Util.getScrollTop = function () {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
    return scrollTop;
};

Util.jsonlog = function (content) {
    console.log(JSON.stringify(content));
};

Util.getRongyunErrorMsg = function (errorCode) {
    var info = '';
    switch (errorCode) {
        case RongIMLib.ErrorCode.TIMEOUT:
            info = '超时';
            break;
        case RongIMLib.ErrorCode.UNKNOWN_ERROR:
            info = '未知错误';
            break;
        case RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
            info = '不可接受的协议版本';
            break;
        case RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
            info = 'appkey不正确';
            break;
        case RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
            info = '服务器不可用';
            break;
    }
    return info;
};

Util.getOrderType = function (type) {
    switch (parseInt(type)) {
        case 3:
            return '时租';

        case 4:
            return '月租';

        case 5:
            return '任务租';
    }
};

Util.wechatAutoLogin = function () {
    Util.os.wechat && Util.replace('http://zhichou.com/api/auth/wechat');
};

Util.zeroTail = function (val) {
    val = val || 0;
    return val.toString().indexOf('.') === -1 ? val + '.00' : val;
};

Util.preZero = function (str) {
    return parseInt(str) < 10 ? '0' + str : str;
};

Util.appDownload = function () {
    Util.slideIn('http://a.app.qq.com/o/simple.jsp?pkgname=com.d782570386.nhy');
};

Util.hideMiddleChars = function (str) {
    return str.substr(0, 8) + '...' + str.substr(str.length - 5, 5);
};

Util.trim = function (str) {
    return str.toString().replace(new RegExp(/\s/g), '');
};

Util.replaceWrap = function (str) {
    return (str || '').replace(/(\r)*\n/g, "<br/>");
};

Util.incrKey = function (key, max) {
    var val = parseInt(Util.getStorage(key) || 0) + 1;
    Util.setStorage(key, val < max ? val : max);
    return val;
};

Util.sadd = function (key, val) {
    var arr = JSON.parse(Util.getStorage(key)) || [];
    Util.indexOf(arr, val) === -1 && arr.push(val);
    Util.setStorage(key, JSON.stringify(arr));
    return arr.length;
};

Util.sremove = function (key, val) {
    var arr = JSON.parse(Util.getStorage(key)) || [];
    arr = Util.remove(arr, val);
    Util.setStorage(key, JSON.stringify(arr));
    return arr.length;
};

Util.replaceWrap = function (str) {
    return (str || '').replace(/(\r)*\n/g, "<br/>");
};

Util.setStorage = function (key, val) {
    try {
        localStorage.setItem(key, val);
    } catch (e) {
        Util.setCookie(key, val, 365 * 24 * 60 * 60 * 1000); //抛出异常使用cookie存储
    }
};

Util.getStorage = function (key) {
    try {
        localStorage.setItem('cookieTest', 'test'); //判断是否支持存储
        return localStorage.getItem(key);
    } catch (e) {
        return Util.getCookie(key); //同样抛出异常我们使用cookie去取值
    }
};

Util.removeStorage = function (key) {
    if (!key) {
        return false;
    }
    try {
        localStorage.setItem('cookieTest', 'test'); //正常清除
        localStorage.removeItem(key);
    } catch (e) {
        Util.removeCookie(key);
    }
};

Util.objectEqual = function (obj1, obj2) {
    var res = true;
    for (var i in obj1) {
        if (obj1[i] != obj2[i]) {
            res = false;
        }
    }
    return res;
};

Util.transformHashUrl = function (url) {
    url = url.replace(/#/, '');
    return url[0] === '/' ? url : '/' + url;
};

Util.assign = function (url) {
    if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {
        location.assign(url);
        return false;
    }
    browserHistory.push(Util.transformHashUrl(url));
};

Util.replace = function (url) {
    if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {
        location.replace(url);
        return false;
    }
    browserHistory.replace(Util.transformHashUrl(url));
};

Util.createRandStr = function (len) {
    var res = '';
    for (var i = 0; i < len; i++) {
        res += String.fromCharCode(Math.random() * 128);
    }
    return res;
};

/**
 * 按钮组件
 */
var Button = function (_React$Component) {
    inherits(Button, _React$Component);

    function Button() {
        var _ref,
            _arguments = arguments;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        classCallCheck(this, Button);
        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            var opacityCurve11 = mojs.easing.path('M0,0 C0,87 27,100 40,100 L40,0 L100,0');
            var scaleCurve11 = mojs.easing.path('M0,0c0,80,39.2,100,39.2,100L40-100c0,0-0.7,106,60,106');
            var el = _this.refs.buttonElement;
            _this.timeline = new mojs.Timeline();
            _this.tweens = [
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: { 0: 95 },
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: { 10: 0 },
                opacity: 0.4,
                duration: 1000,
                delay: 100,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            }),
            // ring animation
            new mojs.Shape({
                parent: el,
                radius: { 0: 80 },
                fill: 'transparent',
                stroke: '#C0C1C3',
                strokeWidth: { 20: 0 },
                opacity: 0.2,
                duration: 1800,
                delay: 300,
                easing: mojs.easing.bezier(0, 1, 0.5, 1)
            })];
            _this.tweens.map(function (item, key) {
                _this.timeline.add(item);
            });
        }, _this.onClick = function (e) {
            _this.timeline && _this.timeline.replay();

            if (_this.props.href) {
                Util.assign(_this.props.href);
                return false;
            }
            _this.props.onClick && _this.props.onClick.apply(_this, _arguments);
        }, _this.render = function () {
            var _this$props = _this.props,
                type = _this$props.type,
                size = _this$props.size,
                plain = _this$props.plain,
                className = _this$props.className,
                children = _this$props.children,
                disabled = _this$props.disabled,
                padding = _this$props.padding,
                position = _this$props.position,
                others = objectWithoutProperties(_this$props, ['type', 'size', 'plain', 'className', 'children', 'disabled', 'padding', 'position']);

            var Component = _this.props.href ? 'a' : 'button';
            var cls = classnames(defineProperty({
                weui_btn: true,
                cursor: true,

                weui_btn_primary: type === 'primary' && !plain,
                weui_btn_default: type === 'default' && !plain,
                weui_btn_warn: type === 'warn',
                weui_btn_disabled: disabled,

                weui_btn_plain_primary: type === 'primary' && plain,

                weui_btn_plain_default: type === 'default' && plain,

                weui_btn_mini: size === 'small',
                weui_btn_bottom: position === 'bottom'

            }, className, className));
            if (padding) {
                return React.createElement(
                    'div',
                    { style: { 'padding': _this.props.padding } },
                    React.createElement(
                        Component,
                        _extends({ ref: 'buttonElement' }, others, { className: cls, onClick: _this.onClick }),
                        children
                    )
                );
            } else {
                return React.createElement(
                    Component,
                    _extends({ ref: 'buttonElement' }, others, { className: cls, onClick: _this.onClick }),
                    children
                );
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Button;
}(React.Component);

Button.propTypes = {
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
    size: React.PropTypes.string,
    padding: React.PropTypes.string
};
Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
    padding: ''
};

var index = {
    Button: Button
};

return index;

})));
//# sourceMappingURL=react-weui.js.map
