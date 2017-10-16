var WeUI = (function (React,format,zh_cn,InfiniteCalendar,reactInfiniteCalendar_styles_css,qrcode) {
'use strict';

React = 'default' in React ? React['default'] : React;
format = 'default' in format ? format['default'] : format;
zh_cn = 'default' in zh_cn ? zh_cn['default'] : zh_cn;
InfiniteCalendar = 'default' in InfiniteCalendar ? InfiniteCalendar['default'] : InfiniteCalendar;
qrcode = 'default' in qrcode ? qrcode['default'] : qrcode;

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
 * 头像组件
 */
//import defaultAvatar from './avatar_default.png'

var Avatar = function (_React$Component) {
    inherits(Avatar, _React$Component);

    function Avatar() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Avatar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var src = _this.props.src || defaultAvatar;
            if (src == 'http://zcrun.com/images/head.png') {
                src = defaultAvatar;
            }
            var width = _this.props.width || '70px';
            var style = {
                width: width,
                height: width
            };
            return React.createElement('img', { className: "weui_avatar " + _this.props.className, style: style,
                onClick: _this.props.onClick, src: src });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Avatar;
}(React.Component);

/**
 * 按钮组件
 */
var Button$1 = function (_React$Component) {
    inherits(Button, _React$Component);

    function Button() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

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
                if (_this.props.href.indexOf('tel:') === -1) {
                    location.assign(_this.props.href);
                }
                return false;
            }
            _this.props.onClick && _this.props.onClick(e);
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
            var cls = classNames({
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
            });
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

Button$1.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal',
    padding: ''
};

/**
 * iconfont组件
 */
var Icon = function (_React$Component) {
    inherits(Icon, _React$Component);

    function Icon() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Icon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var cls = 'weui-icon icon iconfont icon-' + _this.props.type + ' ' + _this.props.className;
            var style = _this.props.style || {};
            if (_this.props.type == 'blank') {
                style['margin-right'] = '22px';
            }
            return React.createElement('i', { id: _this.props.id, className: cls, style: style,
                onClick: _this.props.onClick, onMouseOver: _this.props.onMouseOver });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Icon;
}(React.Component);

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

Util.getDate = function (time, format$$1) {
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
    return date.Format(format$$1 || 'YYYY-MM-DD');
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
 * 卡片组件
 */
var Card = function (_React$Component) {
    inherits(Card, _React$Component);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            collapseVisible: false,
            collapse: false
        }, _this.componentDidMount = function () {
            window.setTimeout(function () {
                _this.refs.weui_card_wrap && _this.setState({
                    collapse: _this.refs.weui_card_wrap.clientHeight <= 230 ? false : true,
                    collapseVisible: _this.refs.weui_card_wrap.clientHeight <= 230 ? false : true
                });
            }, 1000);
        }, _this.toggleCollapse = function () {
            _this.setState({
                collapse: !_this.state.collapse
            });
        }, _this.render = function () {
            var collapseCls = _this.state.collapse ? '' : 'uncollapse';
            var arrowCls = _this.props.arrow == 'horizontal' ? 'arrow' : '';
            if (!_this.props.collapsable) {
                return React.createElement(
                    'div',
                    { className: "weui_card uncollapse " + arrowCls + " " + _this.props.className,
                        onClick: _this.props.onClick },
                    React.createElement(
                        'div',
                        { ref: 'weui_card_wrap', className: 'wrap' },
                        _this.props.triangle == 1 ? React.createElement('div', { className: 'triangle' }) : null,
                        _this.props.arrow == 'horizontal' ? React.createElement(Icon, { type: 'right', className: 'arrow' }) : null,
                        _this.props.children
                    )
                );
            }
            return React.createElement(
                'div',
                { className: "weui_card " + collapseCls + ' ' + arrowCls + ' ' + _this.props.className,
                    onClick: _this.props.onClick },
                React.createElement(
                    'div',
                    { ref: 'weui_card_wrap', className: 'wrap' },
                    _this.props.triangle ? React.createElement('div', { className: 'triangle' }) : null,
                    _this.props.arrow == 'horizontal' ? React.createElement(Icon, { type: 'right', className: 'arrow' }) : null,
                    _this.props.children
                ),
                _this.state.collapseVisible ? React.createElement(Icon, { type: 'xiala', className: 'cursor', onClick: _this.toggleCollapse }) : null
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Card;
}(React.Component);

Card.defaultProps = {
    arrow: '',
    triangle: true,
    collapsable: false
};

var Swipe = (function (container, options) {
	var noop = function noop() {};
	var offloadFn = function offloadFn(fn) {
		return setTimeout(fn || noop, 0);
	};

	if (!container) {
		return;
	}

	options = options || {};

	var _options = options,
	    _options$startSlide = _options.startSlide,
	    startSlide = _options$startSlide === undefined ? 0 : _options$startSlide,
	    _options$autoPlay = _options.autoPlay,
	    autoPlay = _options$autoPlay === undefined ? true : _options$autoPlay,
	    _options$interval = _options.interval,
	    interval = _options$interval === undefined ? 3500 : _options$interval,
	    _options$speed = _options.speed,
	    speed = _options$speed === undefined ? 300 : _options$speed,
	    _options$easing = _options.easing,
	    easing = _options$easing === undefined ? 'ease' : _options$easing,
	    _options$dots = _options.dots,
	    dots = _options$dots === undefined ? true : _options$dots,
	    _options$continuous = _options.continuous,
	    continuous = _options$continuous === undefined ? true : _options$continuous,
	    callback = _options.callback,
	    swipingCb = _options.swiping,
	    transitionEndCb = _options.transitionEnd,
	    disableScroll = _options.disableScroll;


	var element = container.children[0];
	var slides = void 0,
	    slidePos = void 0,
	    width = void 0,
	    length = void 0;
	var index = parseInt(startSlide, 10) || 0;

	var _setup = function _setup() {
		slides = element.children;
		length = slides.length;

		continuous = length < 2 ? false : continuous;

		if (continuous && length < 3) {
			element.appendChild(slides[0].cloneNode(true));
			element.appendChild(slides[1].cloneNode(true));
			slides = element.children;
		}

		slidePos = new Array(slides.length);

		width = container.getBoundingClientRect().width || container.offsetWidth;

		element.style.width = slides.length * width + 'px';

		var pos = slides.length;

		while (pos--) {
			var _slide = slides[pos];

			_slide.style.width = width + 'px';
			_slide.setAttribute('data-index', pos);

			_slide.style.left = pos * -width + 'px';

			_slide.style.webkitTransitionTimingFunction = _slide.style.transitionTimingFunction = easing;
			_slide.style.transitionProperty = 'transform';

			move(pos, index > pos ? -width : index < pos ? width : 0, 0);

			if (continuous) {
				move(circle(index - 1), -width, 0);
				move(circle(index + 1), width, 0);
			}

			container.style.visibility = 'visible';
		}
	};

	// create dots
	var ul = null;
	var createDots = function createDots() {
		ul = document.createElement('ul');
		var html = '';

		for (var i = 0; i < length; i++) {
			var cls = 'dot';
			if (i == index) {
				cls += ' active';
			}
			html += '<li class="' + cls + '"></li>';
		}

		ul.innerHTML = html;
		container.appendChild(ul);
	};

	var updateDots = function updateDots() {
		var dots = ul.children;
		var len = dots.length;

		for (var i = 0; i < len; i++) {
			dots[i].classList.remove('active');
		}

		// use (index % length) instead of (index) for
		// when length = 2, dots would not active
		dots[index % len].classList.add('active');
	};

	var _prev = function _prev() {
		if (continuous) {
			_slide2(index - 1);
		} else if (index) {
			_slide2(index - 1);
		}
	};

	var _next = function _next() {
		if (continuous) {
			_slide2(index + 1);
		} else if (index < slides.length - 1) {
			_slide2(index + 1);
		}
	};

	var circle = function circle(index) {
		return (slides.length + index % slides.length) % slides.length;
	};

	var _slide2 = function _slide2(to, slideSpeed) {
		if (index == to) {
			return;
		}
		var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward
		if (continuous) {
			var natural_direction = direction;
			direction = -slidePos[circle(to)] / width;

			if (direction !== natural_direction) {
				to = -direction * slides.length + to;
			}
		}

		var diff = Math.abs(index - to) - 1;

		// move all the slides between index and to in the right direction
		while (diff--) {
			move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
		}to = circle(to);

		move(index, width * direction, slideSpeed || speed);
		move(to, 0, slideSpeed || speed);

		if (continuous) {
			move(circle(to - direction), -(width * direction), 0);
		}

		index = to;
		offloadFn(callback && callback(index, slides[index]));

		if (dots !== false && length > 1) {
			updateDots();
		}
	};

	var move = function move(index, dist, speed) {
		translate(index, dist, speed);
		slidePos[index] = dist;
	};

	var translate = function translate(index, dist, speed) {
		var slide = slides[index];
		var style = slide && slide.style;

		if (!style) return;

		style.webkitTransitionDuration = style.transitionDuration = speed + 'ms';

		style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	};

	var tid = void 0;

	var begin = function begin() {
		tid = setTimeout(_next, interval);
	};

	var _stop = function _stop() {
		if (tid) {
			clearTimeout(tid);
		}
	};

	var _start = {};
	var delta = {};
	var isScrolling = void 0;

	var events = {
		handleEvent: function handleEvent(event) {
			switch (event.type) {
				case 'touchstart':
					this.start(event);break;
				case 'touchmove':
					this.move(event);break;
				case 'touchend':
					offloadFn(this.end(event));break;
				case 'webkitTransitionEnd':
				case 'transitionend':
					offloadFn(this.transitionEnd(event));break;
				case 'resize':
					offloadFn(_setup);break;
			}
		},
		start: function start(event) {
			var touches = event.touches[0];

			_start = {
				x: touches.pageX,
				y: touches.pageY,
				time: +new Date()
			};

			// used for testing first move event
			isScrolling = undefined;

			// reset delta and end measurements
			delta = {};

			// attach touchmove and touchend listeners
			element.addEventListener('touchmove', this, false);
			element.addEventListener('touchend', this, false);
		},
		move: function move(event) {
			// ensure swiping with one touch and not pinching
			if (event.touches.length > 1 || event.scale && event.scale !== 1) return;

			if (disableScroll) event.preventDefault();

			var touches = event.touches[0];

			// measure change in x and y
			delta = {
				x: touches.pageX - _start.x,
				y: touches.pageY - _start.y
			};

			if (typeof isScrolling == 'undefined') {
				isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
			}

			// if user is not trying to scroll vertically
			if (!isScrolling) {
				// prevent native scrolling
				event.preventDefault();

				// stop slideshow
				_stop();

				// increase resistance if first or last slide
				if (continuous) {
					// we don't add resistance at the end
					translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
					translate(index, delta.x + slidePos[index], 0);
					translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);
				} else {
					delta.x = delta.x / (!index && delta.x > 0 || // if first slide and sliding left
					index == slides.length - 1 && // or if last slide and sliding right
					delta.x < 0 // and if sliding at all
					? Math.abs(delta.x) / width + 1 : // determine resistance level
					1); // no resistance if false

					// translate 1:1
					translate(index - 1, delta.x + slidePos[index - 1], 0);
					translate(index, delta.x + slidePos[index], 0);
					translate(index + 1, delta.x + slidePos[index + 1], 0);
				}
				swipingCb && swipingCb(-delta.x / width);
			}
		},
		end: function end(event) {
			var slideDuration = +new Date() - _start.time;

			// determine if slide attempt triggers next/prev slide
			var isValidSlide = Number(slideDuration) < 250 && // if slide duration is less than 250ms
			Math.abs(delta.x) > 20 || // and if slide amt is greater than 20px
			Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

			// determine if slide attempt is past start and end
			var isPastBounds = !index && delta.x > 0 || // if first slide and slide amt is greater than 0
			index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0

			if (continuous) {
				isPastBounds = false;
			}

			// determine direction of swipe (true:right, false:left)
			var direction = delta.x < 0;

			if (!isScrolling) {
				if (isValidSlide && !isPastBounds) {

					if (direction) {

						if (continuous) {
							// we need to get the next in this direction in place

							move(circle(index - 1), -width, 0);
							move(circle(index + 2), width, 0);
						} else {
							move(index - 1, -width, 0);
						}

						move(index, slidePos[index] - width, speed);
						move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
						index = circle(index + 1);
					} else {
						if (continuous) {
							// we need to get the next in this direction in place

							move(circle(index + 1), width, 0);
							move(circle(index - 2), -width, 0);
						} else {
							move(index + 1, width, 0);
						}

						move(index, slidePos[index] + width, speed);
						move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
						index = circle(index - 1);
					}

					if (dots !== false && length > 1) {
						updateDots();
					}

					callback && callback(index, slides[index]);
				} else {
					// invalid spipe
					if (continuous) {

						move(circle(index - 1), -width, speed);
						move(index, 0, speed);
						move(circle(index + 1), width, speed);
					} else {

						move(index - 1, -width, speed);
						move(index, 0, speed);
						move(index + 1, width, speed);
					}
				}
			}

			// kill touchmove and touchend event listeners until touchstart called again
			element.removeEventListener('touchmove', events, false);
			element.removeEventListener('touchend', events, false);
		},
		transitionEnd: function transitionEnd(event) {

			if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

				if (autoPlay) begin();

				transitionEndCb && transitionEndCb.call(event, index, slides[index]);
			}
		}
	};

	// trigger setup
	_setup();

	// show dots
	if (dots && length > 1) {
		createDots();
	}

	// start auto slideshow if applicable
	if (autoPlay) begin();

	// set touchstart event on element
	element.addEventListener('touchstart', events, false);

	element.addEventListener('webkitTransitionEnd', events, false);
	element.addEventListener('transitionend', events, false);

	window.addEventListener('resize', events, false);

	return {
		setup: function setup() {
			_setup();
		},
		slide: function slide(to, speed) {
			// cancel slideshow
			_stop();
			_slide2(to, speed);
		},
		prev: function prev() {
			// cancel slideshow
			_stop();
			_prev();
		},
		next: function next() {
			// cancel slideshow
			_stop();
			_next();
		},
		stop: function stop() {
			// cancel slideshow
			_stop();
		},
		getPos: function getPos() {
			// return current index position
			return index;
		},
		getNumSlides: function getNumSlides() {
			// return total number of slides
			return length;
		},
		kill: function kill() {
			// cancel slideshow
			_stop();

			// reset element
			element.style.width = '';
			element.style.left = '';

			// reset slides
			var pos = slides.length;
			while (pos--) {

				var slide = slides[pos];
				slide.style.width = '';
				slide.style.left = '';

				translate(pos, 0, 0);
			}

			// remove current event listeners
			element.removeEventListener('touchstart', events, false);
			element.removeEventListener('webkitTransitionEnd', events, false);
			element.removeEventListener('transitionend', events, false);
			window.removeEventListener('resize', events, false);
		}
	};
});

/**
 * 轮播组件
 */
var Carousel = function (_React$Component) {
    inherits(Carousel, _React$Component);

    function Carousel() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Carousel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            var swipeOptions = _this.props.swipeOptions;

            _this.swipe = Swipe(_this.refs.container, swipeOptions);
        }, _this.componentWillUnmount = function () {
            _this.swipe.kill();
            _this.swipe = void 0;
        }, _this.renderItems = function () {
            var items = _this.props.items;
            return items.map(function (item, key) {
                return React.createElement(
                    'div',
                    { className: 'carousel-item', key: key },
                    item
                );
            });
        }, _this.render = function () {
            return React.createElement(
                'div',
                { ref: 'container', className: 'react-swipe-container ' + _this.props.className },
                React.createElement(
                    'div',
                    { className: 'wrapper' },
                    _this.renderItems()
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Carousel;
}(React.Component);

Carousel.propTypes = {
    swipeOptions: React.PropTypes.shape({
        startSlide: React.PropTypes.number, // initial picture index
        speed: React.PropTypes.number, // transition duration
        easing: React.PropTypes.string, // transition time function
        interval: React.PropTypes.number, // time for swipe to next picture
        dots: React.PropTypes.bool, // show dots ? true -> show : false -> not, default = true
        autoPlay: React.PropTypes.bool, // true -> auto swipe, default = true
        continuous: React.PropTypes.bool, // true -> continuous swipe, default = true
        disableScroll: React.PropTypes.bool, // false -> ignore swipe, default = true
        swiping: React.PropTypes.func, // function when swiping
        callback: React.PropTypes.func, // function for swipe to next picture
        transitionEnd: React.PropTypes.func // function for transition end. valid or invalid swipe
    }),
    className: React.PropTypes.string,
    items: React.PropTypes.array
};
Carousel.defaultProps = {
    swipeOptions: {
        autoPlay: false,
        disableScroll: false
    },
    items: [],
    className: ''
};

/**
 * 单选框组件
 */
//import chcked from './checkbox_checked.png'
//import uncheck from './checkbox_uncheck.png'

var Checkbox = function (_React$Component) {
    inherits(Checkbox, _React$Component);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
            _this.setState({
                checked: _this.props.checked
            });
        }, _this.toggleCheck = function () {
            var checked = !_this.state.checked;
            _this.setState({
                checked: checked
            });
            _this.props.onChange(checked);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            var checkImg = this.state.checked ? checked : uncheck;
            return React.createElement(
                'div',
                { className: 'weui_checkbox', onClick: this.toggleCheck },
                React.createElement('img', { src: checkImg })
            );
        }
    }]);
    return Checkbox;
}(React.Component);

var CityPicker = function (_React$Component) {
    inherits(CityPicker, _React$Component);

    function CityPicker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, CityPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = CityPicker.__proto__ || Object.getPrototypeOf(CityPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            cityData: [],
            letterListMarginLeft: 0
        }, _this.componentWillReceiveProps = function (nextProps) {
            var prefixCls = _this.props.prefixCls;
            _this.setState({
                cityData: CityData.slice(0, 2),
                letterListMarginLeft: document.getElementById(prefixCls + '-city-picker').scrollWidth / 2 - 40 + 'px'
            });
            if (nextProps.status === 'open') {
                window.setTimeout(function () {
                    _this.setState({
                        cityData: CityData
                    });
                }, 500);
            }
            document.getElementById(prefixCls + '-city-picker').scrollTop = 0;
        }, _this.render = function () {
            var scrollTop = 0;
            var scrollMap = {};
            var status = _this.props.status;
            var prefixCls = _this.props.prefixCls;
            var letters = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
            return React.createElement(
                'div',
                { id: prefixCls + '-city-picker', className: prefixCls + '-city-picker ' + status },
                React.createElement(
                    'div',
                    { className: prefixCls + "-city-picker-name" },
                    React.createElement(Icon, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-city-picker-list", id: prefixCls + '-city-picker-list' },
                    _this.state.cityData.map(function (item, key) {
                        scrollMap[item.initial] = scrollTop;
                        scrollTop = scrollTop + 40;
                        return React.createElement(
                            'div',
                            { key: key, className: prefixCls + "-city-picker-set" },
                            React.createElement(
                                'div',
                                { className: prefixCls + "-city-picker-first-word" },
                                item.initial === '★' ? '★ 热门城市' : item.initial
                            ),
                            item.list.map(function (item, key) {
                                scrollTop = scrollTop + 40;
                                return React.createElement(
                                    'div',
                                    { key: key, className: prefixCls + "-city-picker-item", onClick: function onClick() {
                                            _this.props.onChange(item.name);
                                            _this.props.onBackClick();
                                        } },
                                    item.name
                                );
                            })
                        );
                    })
                ),
                status === 'open' ? React.createElement(
                    'div',
                    { className: prefixCls + '-city-picker-letter-list',
                        style: { marginLeft: _this.state.letterListMarginLeft } },
                    letters.map(function (item, key) {
                        return React.createElement(
                            'div',
                            { key: key, className: prefixCls + '-city-picker-letter-item', onClick: function onClick() {
                                    document.getElementById(prefixCls + '-city-picker-list').scrollTop = scrollMap[item];
                                } },
                            item
                        );
                    })
                ) : null
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return CityPicker;
}(React.Component);

CityPicker.defaultProps = {
    prefixCls: 'weui',
    status: ''
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/

var hasOwn = {}.hasOwnProperty;

function classNames$1() {
	var classes = [];

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			classes.push(classNames$1.apply(null, arg));
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

var Mask = function (_React$Component) {
    inherits(Mask, _React$Component);

    function Mask() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Mask);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Mask.__proto__ || Object.getPrototypeOf(Mask)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                transparent = _this$props.transparent,
                others = objectWithoutProperties(_this$props, ['transparent']);

            var className = classNames$1({
                'weui_mask': !transparent,
                'weui_mask_transparent': transparent
            });

            return React.createElement('div', _extends({ className: className }, others));
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Mask;
}(React.Component);

Mask.propTypes = {
    transparent: React.PropTypes.bool
};
Mask.defaultProps = {
    transparent: false
};

var Confirm = function (_React$Component) {
    inherits(Confirm, _React$Component);

    function Confirm() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Confirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return _this.props.visible ? React.createElement(
                'div',
                { className: prefix + '-confirm' },
                React.createElement(Mask, null),
                React.createElement(
                    'div',
                    { className: prefix + '-confirm-wrap' },
                    React.createElement(
                        'div',
                        { className: prefix + '-confirm-content' },
                        _this.props.children
                    ),
                    React.createElement(
                        'div',
                        { className: prefix + '-confirm-footer clear' },
                        React.createElement(
                            Button$1,
                            { plain: true, className: prefix + '-confirm-button', onClick: _this.props.onCancel },
                            '\u53D6\u6D88'
                        ),
                        React.createElement(
                            Button$1,
                            { className: prefix + '-confirm-button', onClick: _this.props.onSubmit },
                            '\u786E\u8BA4'
                        )
                    )
                )
            ) : null;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Confirm;
}(React.Component);

Confirm.defaultProps = {
    prefix: 'weui',
    visible: false,
    onCancel: function onCancel() {},
    onSubmit: function onSubmit() {}
};

/**
 * 倒计时组件
 */
var Countdown = function (_React$Component) {
    inherits(Countdown, _React$Component);

    function Countdown() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Countdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            leftsec: 0
        }, _this.componentDidMount = function () {
            Util.setInterval(function () {
                var current = new Date().getTime();
                current = parseInt(current / 1000);
                var leftsec = _this.props.endtime - current;
                _this.setState({
                    leftsec: leftsec < 0 ? 0 : leftsec
                });
            }, 1000);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Countdown, [{
        key: 'render',
        value: function render() {
            var day = void 0,
                hour = void 0,
                minute = void 0,
                second = void 0;
            var leftsecond = this.state.leftsec;
            if (leftsecond < 0) {
                day = hour = minute = second = 0;
            } else {
                day = Math.floor(leftsecond / (60 * 60 * 24));
                hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
                minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
                second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
            }
            return day > 0 ? React.createElement(
                'span',
                { className: 'weui_countdown' },
                Util.preZero(day),
                '\u5929',
                Util.preZero(hour),
                '\u5C0F\u65F6'
            ) : React.createElement(
                'span',
                { className: 'weui_countdown' },
                Util.preZero(hour),
                ':',
                Util.preZero(minute),
                ':',
                Util.preZero(second)
            );
        }
    }]);
    return Countdown;
}(React.Component);

/**
 * 内容为空提示组件
 */
var EmptyTip = function (_React$Component) {
    inherits(EmptyTip, _React$Component);

    function EmptyTip() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, EmptyTip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = EmptyTip.__proto__ || Object.getPrototypeOf(EmptyTip)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return React.createElement(Icon, { type: 'empty', className: 'weui_empty_tip' });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return EmptyTip;
}(React.Component);

var FilePicker = function (_React$Component) {
    inherits(FilePicker, _React$Component);

    function FilePicker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, FilePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FilePicker.__proto__ || Object.getPrototypeOf(FilePicker)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return React.createElement('input', { type: 'file', className: prefix + '-file-picker' });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return FilePicker;
}(React.Component);

FilePicker.defaultProps = {
    prefix: 'weui'
};

/**
 * header
 */
var Header = function (_React$Component) {
    inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.onBackClick = function () {
            if (_this.props.prev) {
                location.assign(_this.props.prev);
            } else {
                history.back();
            }
        }, _this.showShareActionSheet = function () {
            var icons = [{ iconName: 'icon iconfont icon-weixin', title: '微信好友' }, { iconName: 'icon iconfont icon-pengyouquan', title: '朋友圈' }];
            ActionSheet.showShareActionSheetWithOptions({
                options: icons,
                message: '分享',
                cancelButtonText: '取消'
            }, function (buttonIndex) {
                _this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
                if ((typeof api === 'undefined' ? 'undefined' : _typeof(api)) == 'object' && !_this.state.wechatInstalled) {
                    Util.toast('您未安装微信,暂时无法使用微信分享');
                    return false;
                }
                if ((typeof api === 'undefined' ? 'undefined' : _typeof(api)) == "object") {
                    var wx = api.require('wx');
                    var content = _this.props.shareContent;
                    wx.shareWebpage({
                        scene: buttonIndex == 0 ? 'session' : 'timeline',
                        title: content.title,
                        description: content.desc,
                        thumb: content.imgUrl,
                        contentUrl: content.link
                    }, function (ret, err) {
                        if (ret.status) {
                            Util.toast('分享成功', 1);
                        } else if (err.code == 2) {
                            Util.toast('取消分享', 1);
                        } else {
                            Util.errorTip('分享失败:' + err.code + ', 请稍后再试');
                        }
                    });
                }
            });
        }, _this.render = function () {
            //只有微信pc版显示header,微信手机端不显示header
            if (Util.os.wechat && Util.os.ios) {
                return null;
            }
            if (Util.os.wechat && Util.os.android) {
                return null;
            }

            var prefix = _this.props.prefix;
            return React.createElement(
                'div',
                { className: prefix + '-header ' + _this.props.className },
                React.createElement(
                    'div',
                    { className: prefix + '-header-wrap' },
                    _this.props.back ? React.createElement(Icon, { type: 'back', className: 'cursor', onClick: _this.onBackClick }) : null,
                    _this.props.children
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Header;
}(React.Component);

Header.defaultProps = {
    prev: '',
    back: false,
    title: null,
    prefix: 'weui'
};

/**
 * image组件
 */
var Image = function (_React$Component) {
    inherits(Image, _React$Component);

    function Image() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Image);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: 'loading'
        }, _this.render = function () {
            var cls = "weui_image_" + _this.state.status + ' ' + _this.props.className;
            return React.createElement('img', { title: '\u52A0\u8F7D\u4E2D', className: cls, src: _this.props.src, onLoad: function onLoad() {
                    _this.setState({
                        status: 'done'
                    });
                }, onClick: _this.props.onClick });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Image;
}(React.Component);

var InfiniteDatePicker = function (_React$Component) {
    inherits(InfiniteDatePicker, _React$Component);

    function InfiniteDatePicker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, InfiniteDatePicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InfiniteDatePicker.__proto__ || Object.getPrototypeOf(InfiniteDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var display = _this.props.visible ? 'block' : 'none';
            var locale = {
                locale: zh_cn,
                todayLabel: {
                    long: "今天",
                    short: "今天"
                },
                weekdays: ['日', '一', '二', '三', '四', '五', '六'],
                weekStartsOn: 1
            };
            var theme = {
                accentColor: '#6ac2b6',
                floatingNav: {
                    background: '#3aa593',
                    chevron: '#FFA726',
                    color: '#FFF'
                },
                headerColor: '#6ac2b6',
                selectionColor: '#6ac2b6',
                textColor: {
                    active: '#FFF',
                    default: '#333'
                },
                todayColor: '#6ac2b6',
                weekdayColor: '#6ac2b6'
            };
            var prefixCls = _this.props.prefixCls;
            return _this.props.visible ? React.createElement(
                'div',
                { className: prefixCls + "-infinite-date-picker" },
                React.createElement(Mask, { onClick: _this.props.onClose }),
                React.createElement(InfiniteCalendar, {
                    width: '95%',
                    height: 400,
                    theme: theme,
                    locale: locale,
                    minDate: _this.props.minDate,
                    maxDate: _this.props.maxDate,
                    selected: _this.props.selected,
                    onSelect: function onSelect(val) {
                        _this.props.onChange(format(val, 'YYYY-MM-DD'));
                    } })
            ) : null;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return InfiniteDatePicker;
}(React.Component);

InfiniteDatePicker.defaultProps = {
    prefixCls: 'weui',
    visible: true,
    onClose: function onClose() {},
    onChange: function onChange() {}
};

var Label = function (_React$Component) {
    inherits(Label, _React$Component);

    function Label() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Label);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            return React.createElement(
                'div',
                { className: prefix + '-label ' + _this.props.className },
                React.createElement(
                    'div',
                    { className: prefix + '-label-content' },
                    _this.props.children
                ),
                React.createElement('div', { className: prefix + '-label-triangle' })
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Label;
}(React.Component);

Label.defaultProps = {
    prefix: 'weui',
    className: ''
};

var Link = function (_React$Component) {
    inherits(Link, _React$Component);

    function Link() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Link);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
            if (_this.props.href.indexOf('tel:') != -1) {
                return false;
            }
            if (_this.props.href.indexOf('mailto:') != -1) {
                return false;
            }

            Util.assign(_this.props.href);
        }, _this.renderHref = function () {
            if (_this.props.href.indexOf('tel:') != -1) {
                return _this.props.href;
            }
            if (_this.props.href.indexOf('mailto:') != -1) {
                return _this.props.href;
            }

            return 'javascript:;';
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            return React.createElement(
                'a',
                { href: _this.renderHref(), className: prefix + '-link ' + _this.props.className, onClick: _this.onClick },
                _this.props.children
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Link;
}(React.Component);

Link.defaultProps = {
    prefix: 'weui',
    href: '',
    className: ''
};

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

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

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
})();

/**
 * Created by jf on 15/12/10.
 */

var RadioItem$1 = function (_React$Component) {
    inherits(RadioItem, _React$Component);

    function RadioItem() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, RadioItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefix = _this.props.prefix;
            var cls = _this.props.active ? 'active' : '';
            return React.createElement(
                'div',
                { className: prefix + '-item cursor ' + cls, onClick: function onClick() {
                        _this.props.onChange(_this.props.value);
                    } },
                React.createElement(
                    'span',
                    { className: 'circle' },
                    React.createElement('i', { className: 'inner' })
                ),
                _this.props.children
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return RadioItem;
}(React.Component);

RadioItem$1.defaultProps = {
    prefix: 'weui-radio',
    onChange: function onChange() {},
    value: ''
};

var Radio = function (_React$Component2) {
    inherits(Radio, _React$Component2);

    function Radio() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, Radio);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefix = _this2.props.prefix;
            var value = _this2.props.value || _this2.props.children[0].props.value;
            return React.createElement(
                'div',
                { className: prefix + '-radio clear' },
                _this2.props.children.map(function (item, key) {
                    var active = value === item.props.value ? true : false;
                    return React.createElement(
                        Radio.Item,
                        { key: key,
                            active: active,
                            value: item.props.value,
                            onChange: _this2.props.onChange },
                        item.props.children
                    );
                })
            );
        }, _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return Radio;
}(React.Component);

Radio.defaultProps = {
    children: [],
    prefix: 'weui',
    value: ''
};


Radio.Item = RadioItem$1;

/**
 * 评分组件
 */
var Rater = function (_React$Component) {
    inherits(Rater, _React$Component);

    function Rater() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Rater);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Rater.__proto__ || Object.getPrototypeOf(Rater)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
            if (_this.props.static) {
                return false;
            }
            _this.props.onChange(value);
        }, _this.renderStars = function () {
            var stars = [];

            var _loop = function _loop(i) {
                var is_active = i < _this.props.value ? true : false;
                var cls = "star " + (i % 2 == 0 ? 'left' : 'right') + ' ' + (is_active ? 'active' : '');
                stars.push(React.createElement(
                    'div',
                    { key: i, className: cls, onClick: function onClick() {
                            _this.onChange(i + 1);
                        }, onMouseOver: function onMouseOver() {
                            _this.onChange(i + 1);
                        } },
                    React.createElement(Icon, { type: 'star' })
                ));
            };

            for (var i = 1; i < 10; i++) {
                _loop(i);
            }
            return stars;
        }, _this.onFirstClick = function () {
            if (_this.props.static) {
                return false;
            }
            if (_this.props.value > 1) {
                _this.props.onChange(1);
            } else if (_this.props.value == 1) {
                _this.props.onChange(0);
            } else {
                _this.props.onChange(1);
            }
        }, _this.render = function () {
            return React.createElement(
                'div',
                { className: 'weui_rater clear' },
                React.createElement(
                    'div',
                    { className: "star left " + (_this.props.value > 0 ? 'active' : ''), onClick: _this.onFirstClick,
                        onMouseEnter: function onMouseEnter() {
                            _this.onChange(1);
                        },
                        onMouseLeave: function onMouseLeave() {
                            _this.onChange(0);
                        } },
                    React.createElement(Icon, { type: 'star' })
                ),
                _this.renderStars(),
                React.createElement(
                    'span',
                    null,
                    _this.props.value + '分'
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Rater;
}(React.Component);

Rater.defaultProps = {
    value: 0,
    max: 5,
    static: false
};

var Picker = function (_React$Component) {
    inherits(Picker, _React$Component);

    function Picker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Picker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Picker.__proto__ || Object.getPrototypeOf(Picker)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var status = _this.props.status;
            var prefixCls = _this.props.prefixCls;
            var value = _this.props.value ? _this.props.value : _this.props.data[0];
            return React.createElement(
                'div',
                { className: prefixCls + '-picker ' + status },
                React.createElement(
                    'div',
                    { className: prefixCls + "-picker-name" },
                    React.createElement(Icon, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                _this.props.data.map(function (item, key) {
                    return React.createElement(
                        'div',
                        { key: key, className: prefixCls + "-picker-option", onClick: function onClick() {
                                _this.props.onChange(item);
                                _this.props.onBackClick();
                            } },
                        item,
                        item === value ? React.createElement(Icon, { type: 'xuanze' }) : null
                    );
                })
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Picker;
}(React.Component);

Picker.defaultProps = {
    prefixCls: 'weui',
    status: ''
};

var Switch = function (_React$Component) {
    inherits(Switch, _React$Component);

    function Switch() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Switch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: 1
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({ value: nextProps.value });
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var activeCls = _this.state.value == 1 ? 'active' : '';
            return React.createElement(
                'span',
                { className: prefix + '-switch ' + activeCls, onClick: function onClick() {
                        var value = _this.state.value ? 0 : 1;
                        _this.setState({ value: value });
                        _this.props.onChange && _this.props.onChange(value);
                    } },
                React.createElement('span', { className: prefix + '-switch-circle' })
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Switch;
}(React.Component);

Switch.defaultProps = {
    value: true,
    prefix: 'weui',
    onChange: null
};

/**
 * 标签选择
 */
var TagPicker = function (_React$Component) {
    inherits(TagPicker, _React$Component);

    function TagPicker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TagPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TagPicker.__proto__ || Object.getPrototypeOf(TagPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            tagList: [],
            category: ''
        }, _this.componentWillReceiveProps = function (nextProps) {
            if (!_this.state.category) {
                var categoryList = _this.getCategoryList();
                var category = categoryList[0];
                _this.setState({
                    category: category,
                    tagList: nextProps.data[category]
                });
            }
        }, _this.getCategoryList = function () {
            var res = [];
            for (var i in _this.props.data) {
                res.push(i);
            }
            return res;
        }, _this.getActiveTags = function () {
            var value = _this.getValue();
            return value[_this.state.category] || [];
        }, _this.getValue = function () {
            try {
                return JSON.parse(_this.props.value);
            } catch (e) {
                return {};
            }
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.props.status;
            var categoryList = _this.getCategoryList();
            return React.createElement(
                'div',
                { className: prefix + '-tag-picker ' + status },
                React.createElement(
                    'div',
                    { className: prefix + "-tag-picker-name" },
                    React.createElement(Icon, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                React.createElement(
                    'div',
                    { className: prefix + '-tag-picker-content' },
                    React.createElement(
                        'ul',
                        { className: prefix + '-tag-picker-category-list' },
                        categoryList.map(function (item, key) {
                            var cls = item === _this.state.category ? 'active' : '';
                            return React.createElement(
                                'li',
                                { className: prefix + '-tag-picker-category-list-item ' + cls, key: key, onClick: function onClick() {
                                        _this.setState({
                                            category: item,
                                            tagList: _this.props.data[item]
                                        });
                                    } },
                                item
                            );
                        })
                    ),
                    React.createElement(
                        'ul',
                        { className: prefix + '-tag-picker-tag-list' },
                        _this.state.tagList.map(function (item, key) {
                            var tags = _this.getActiveTags();
                            var cls = tags.indexOf(item) === -1 ? '' : 'active';
                            return React.createElement(
                                'li',
                                { className: prefix + '-tag-picker-tag-list-item ' + cls, key: key, onClick: function onClick() {
                                        var value = _this.getValue();
                                        var tags = _this.getActiveTags();
                                        if (tags.indexOf(item) === -1) {
                                            tags.push(item);
                                        } else {
                                            tags.splice(tags.indexOf(item), 1);
                                        }
                                        value[_this.state.category] = tags;
                                        _this.props.onChange(JSON.stringify(value));
                                    } },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return TagPicker;
}(React.Component);

TagPicker.defaultProps = {
    status: '',
    prefix: 'weui',
    name: '请选择标签',
    multiCategory: false,
    data: {
        '技术': ['技术总监', 'CTO', '项目经理', '测试', '架构师', '微信开发', '前端开发', '后端开发', '运维', '硬件研发', 'AR/VR', '算法', 'Android', 'iOS', 'Java', 'PHP', 'C/C++', 'HTML5', '.NET/C#', 'unity3d'],
        // '产品' : ['产品总监', '产品经理', '移动产品经理', '游戏策划'],
        '产品': ['产品总监', '产品经理', '数据产品经理', '游戏策划', '需求疏理', '产品顾问'],
        // '设计' : ['设计总监', 'UI', 'UE', 'APP设计师', '平面设计师'],
        '设计': ['设计总监', 'UI设计', 'UE/UX', '平面设计师', '动画设计', '工业设计', '结构设计'],
        // '运营' : ['运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划'],
        '运营': ['运营总监', 'COO', '用户运营', '产品运营', '数据运营', '新媒体运营', '文案策划', '内容编辑', 'SEO'],
        // '市场与销售' : ['市场总监', '销售总监', '市场策划', '市场推广', '地推',  'BD', '渠道资源'],
        '市场与销售': ['市场总监', '销售总监', '市场策划', '市场推广', '地面推广', 'BD', '品牌建设', '渠道资源'],
        // '其他' : ['创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '其他'],
        '其他': ['创业教练', '创业导师', '法律', '融资辅导', '融资顾问', '招聘', '财务', '其他']
    }
};

/**
 * 标签选择
 */
var YearData = ['至今'];
for (var i = new Date().getFullYear(); i > 1970; i--) {
    YearData.push(i);
}

var MonthData = [];
for (var _i = 1; _i <= 12; _i++) {
    _i = _i < 10 ? '0' + _i : _i;
    MonthData.push(_i);
}

var MonthPicker = function (_React$Component) {
    inherits(MonthPicker, _React$Component);

    function MonthPicker() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, MonthPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MonthPicker.__proto__ || Object.getPrototypeOf(MonthPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            year: new Date().getFullYear()
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.props.status;
            return React.createElement(
                'div',
                { className: prefix + '-month-picker ' + status },
                React.createElement(
                    'div',
                    { className: prefix + "-month-picker-name" },
                    React.createElement(Icon, { type: 'back', onClick: _this.props.onBackClick }),
                    _this.props.name
                ),
                React.createElement(
                    'div',
                    { className: prefix + '-month-picker-content' },
                    React.createElement(
                        'ul',
                        { className: prefix + '-month-picker-year-list' },
                        YearData.map(function (item, key) {
                            var cls = item === _this.state.year ? 'active' : '';
                            return React.createElement(
                                'li',
                                { className: prefix + '-month-picker-year-list-item ' + cls, key: key, onClick: function onClick() {
                                        _this.setState({ year: item, month: '01' });
                                        item == '至今' && _this.props.onChange('至今');
                                    } },
                                item
                            );
                        })
                    ),
                    React.createElement(
                        'ul',
                        { className: prefix + '-month-picker-month-list' },
                        _this.state.year == '至今' ? null : MonthData.map(function (item, key) {
                            var cls = item === _this.state.month ? 'active' : '';
                            return React.createElement(
                                'li',
                                { className: prefix + '-month-picker-month-list-item ' + cls, key: key, onClick: function onClick() {
                                        _this.setState({ month: item });
                                        _this.props.onChange(_this.state.year + '-' + item);
                                    } },
                                item,
                                '\u6708',
                                item == _this.state.month ? React.createElement(Icon, { type: 'check' }) : null
                            );
                        })
                    )
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return MonthPicker;
}(React.Component);

MonthPicker.defaultProps = {
    status: '',
    prefix: 'weui',
    name: '选择日期'
};

var Header$2 = function (_React$Component) {
    inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-header " + _this.props.className, onClick: _this.props.onClick },
                React.createElement(
                    'div',
                    { className: prefixCls + "-content" },
                    _this.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-extra" },
                    _this.props.extra,
                    React.createElement(Icon, { type: _this.props.arrow })
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Header;
}(React.Component);

Header$2.defaultProps = {
    className: '',
    prefixCls: 'weui-list'
};

var Footer = function (_React$Component2) {
    inherits(Footer, _React$Component2);

    function Footer() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, Footer);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefixCls = _this2.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-footer " + _this2.props.className, onClick: _this2.props.onClick },
                React.createElement(
                    'div',
                    { className: prefixCls + "-content" },
                    _this2.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-extra" },
                    _this2.props.extra,
                    React.createElement(Icon, { type: _this2.props.arrow })
                )
            );
        }, _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return Footer;
}(React.Component);

Footer.defaultProps = {
    className: '',
    prefixCls: 'weui-list'
};

var ListItem = function (_React$Component3) {
    inherits(ListItem, _React$Component3);

    function ListItem() {
        var _ref3;

        var _temp3, _this3, _ret3;

        classCallCheck(this, ListItem);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this3 = possibleConstructorReturn(this, (_ref3 = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref3, [this].concat(args))), _this3), _this3.render = function () {
            var prefixCls = _this3.props.prefixCls;
            var checkCls = _this3.props.arrow === 'check' ? 'active ' : ' ';
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + checkCls + _this3.props.className, style: _this3.props.style, onClick: function onClick() {
                        if (_this3.props.href) {
                            Util.slideIn(_this3.props.href);
                            return false;
                        }
                        _this3.props.onClick && _this3.props.onClick();
                    } },
                React.createElement(
                    'div',
                    { className: prefixCls + "-content" },
                    _this3.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-extra" },
                    _this3.props.extra,
                    React.createElement(Icon, { type: _this3.props.arrow })
                )
            );
        }, _temp3), possibleConstructorReturn(_this3, _ret3);
    }

    return ListItem;
}(React.Component);

ListItem.defaultProps = {
    href: '',
    style: {},
    arrow: '',
    className: '',
    onClick: null,
    prefixCls: 'weui-list'
};

var SwitchItem = function (_React$Component4) {
    inherits(SwitchItem, _React$Component4);

    function SwitchItem() {
        var _ref4;

        var _temp4, _this4, _ret4;

        classCallCheck(this, SwitchItem);

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        return _ret4 = (_temp4 = (_this4 = possibleConstructorReturn(this, (_ref4 = SwitchItem.__proto__ || Object.getPrototypeOf(SwitchItem)).call.apply(_ref4, [this].concat(args))), _this4), _this4.render = function () {
            var prefixCls = _this4.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + '-switch-item' },
                React.createElement(
                    'div',
                    { className: prefixCls + "-content" },
                    _this4.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-extra" },
                    React.createElement(Switch, { value: _this4.props.value, onChange: function onChange(value) {
                            _this4.props.onChange && _this4.props.onChange(value);
                        } })
                )
            );
        }, _temp4), possibleConstructorReturn(_this4, _ret4);
    }

    return SwitchItem;
}(React.Component);

SwitchItem.defaultProps = {
    value: 1,
    onClick: null,
    onChange: null,
    prefixCls: 'weui-list'
};

var FileItem = function (_React$Component5) {
    inherits(FileItem, _React$Component5);

    function FileItem() {
        var _ref5;

        var _temp5, _this5, _ret5;

        classCallCheck(this, FileItem);

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
        }

        return _ret5 = (_temp5 = (_this5 = possibleConstructorReturn(this, (_ref5 = FileItem.__proto__ || Object.getPrototypeOf(FileItem)).call.apply(_ref5, [this].concat(args))), _this5), _this5.render = function () {
            var prefixCls = _this5.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-file-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this5.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'div',
                        null,
                        React.createElement('input', { type: 'file', onChange: function onChange(e) {
                                if (e.target.files[0].size > 8 * 1024 * 1024) {
                                    Util.errorTip('最大支持上传8MB大小的文件');
                                    return false;
                                }
                                _this5.props.onChange(e.target.files[0]);
                            } }),
                        _this5.props.value == '请选择' ? React.createElement(
                            'span',
                            null,
                            '\u8BF7\u9009\u62E9'
                        ) : React.createElement('img', { src: _this5.props.value }),
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                )
            );
        }, _temp5), possibleConstructorReturn(_this5, _ret5);
    }

    return FileItem;
}(React.Component);

FileItem.defaultProps = {
    prefixCls: 'weui-list',
    value: '请选择'
};

var InputItem = function (_React$Component6) {
    inherits(InputItem, _React$Component6);

    function InputItem() {
        var _ref6;

        var _temp6, _this6, _ret6;

        classCallCheck(this, InputItem);

        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
        }

        return _ret6 = (_temp6 = (_this6 = possibleConstructorReturn(this, (_ref6 = InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call.apply(_ref6, [this].concat(args))), _this6), _this6.render = function () {
            var prefixCls = _this6.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-input-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this6.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement('input', { type: _this6.props.type, value: _this6.props.value, onChange: function onChange(e) {
                            _this6.props.onChange(e.target.value);
                        }, placeholder: _this6.props.placeholder })
                )
            );
        }, _temp6), possibleConstructorReturn(_this6, _ret6);
    }

    return InputItem;
}(React.Component);

InputItem.defaultProps = {
    prefixCls: 'weui-list',
    placeholder: '请输入',
    type: 'text',
    value: ''
};

var CodeInputItem = function (_React$Component7) {
    inherits(CodeInputItem, _React$Component7);

    function CodeInputItem() {
        var _ref7;

        var _temp7, _this7, _ret7;

        classCallCheck(this, CodeInputItem);

        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
        }

        return _ret7 = (_temp7 = (_this7 = possibleConstructorReturn(this, (_ref7 = CodeInputItem.__proto__ || Object.getPrototypeOf(CodeInputItem)).call.apply(_ref7, [this].concat(args))), _this7), _this7.state = {
            countdown: 30
        }, _this7.onButtonClick = function () {
            if (_this7.renderButtonCls() != 'active') {
                return false;
            }
            window.codeBtnInterval = window.setInterval(function () {
                _this7.setState({
                    countdown: _this7.state.countdown === 0 ? 30 : _this7.state.countdown - 1
                });
                if (_this7.state.countdown === 30) {
                    window.clearInterval(window.codeBtnInterval);
                    delete window.codeBtnInterval;
                }
            }, 1000);
            _this7.props.onButtonClick();
        }, _this7.renderButtonCls = function () {
            var mobile = _this7.props.mobile;
            return _this7.state.countdown === 30 && mobile && /^1[34578]\d{9}$/.test(mobile) ? 'active' : '';
        }, _this7.render = function () {
            var prefixCls = _this7.props.prefixCls;
            var buttonCls = _this7.renderButtonCls();
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-code-input-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this7.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement('input', { type: _this7.props.type, value: _this7.props.value, onChange: function onChange(e) {
                            _this7.props.onChange(e.target.value);
                        }, placeholder: _this7.props.placeholder }),
                    React.createElement(
                        Button$1,
                        { className: prefixCls + "-code-button " + buttonCls, onClick: _this7.onButtonClick },
                        _this7.state.countdown === 30 ? '获取验证码' : _this7.state.countdown + 's'
                    )
                )
            );
        }, _temp7), possibleConstructorReturn(_this7, _ret7);
    }

    return CodeInputItem;
}(React.Component);

CodeInputItem.defaultProps = {
    value: '',
    mobile: '',
    type: 'text',
    prefixCls: 'weui-list',
    placeholder: '请输入验证码',
    onButtonClick: function onButtonClick() {}
};

var TextAreaItem = function (_React$Component8) {
    inherits(TextAreaItem, _React$Component8);

    function TextAreaItem() {
        var _ref8;

        var _temp8, _this8, _ret8;

        classCallCheck(this, TextAreaItem);

        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
        }

        return _ret8 = (_temp8 = (_this8 = possibleConstructorReturn(this, (_ref8 = TextAreaItem.__proto__ || Object.getPrototypeOf(TextAreaItem)).call.apply(_ref8, [this].concat(args))), _this8), _this8.componentDidMount = function () {
            var value = localStorage.getItem(_this8.props.prefixCls + '-textarea-item-value');
            value && _this8.props.onChange(value);
        }, _this8.componentWillUnmount = function () {
            localStorage.removeItem(_this8.props.prefixCls + '-textarea-item-value');
        }, _this8.render = function () {
            var prefixCls = _this8.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-textarea-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this8.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement('textarea', { ref: 'textarea', rows: _this8.props.rows, value: _this8.props.value, onChange: function onChange(e) {
                            var textarea = _this8.refs.textarea;
                            textarea.style.height = textarea.scrollHeight + 'px';

                            var value = e.target.value.substr(0, _this8.props.count);
                            localStorage.setItem(_this8.props.prefixCls + '-textarea-item-value', value);
                            _this8.props.onChange(value);
                        }, placeholder: _this8.props.placeholder }),
                    React.createElement(
                        'p',
                        { className: prefixCls + '-textarea-counter' },
                        _this8.props.value.length,
                        ' / ',
                        _this8.props.count
                    )
                )
            );
        }, _temp8), possibleConstructorReturn(_this8, _ret8);
    }

    return TextAreaItem;
}(React.Component);

TextAreaItem.defaultProps = {
    rows: 5,
    count: 1000,
    value: '',
    placeholder: '请输入',
    prefixCls: 'weui-list'
};

var SelectItem = function (_React$Component9) {
    inherits(SelectItem, _React$Component9);

    function SelectItem() {
        var _ref9;

        var _temp9, _this9, _ret9;

        classCallCheck(this, SelectItem);

        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
        }

        return _ret9 = (_temp9 = (_this9 = possibleConstructorReturn(this, (_ref9 = SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call.apply(_ref9, [this].concat(args))), _this9), _this9.render = function () {
            var prefixCls = _this9.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-select-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this9.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'select',
                        { onChange: function onChange() {
                                _this9.props.onChange;
                            } },
                        _this9.props.data.map(function (item, key) {
                            return React.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    ),
                    React.createElement(
                        'span',
                        null,
                        ' ~ '
                    ),
                    React.createElement(
                        'select',
                        { onChange: function onChange() {
                                _this9.props.onChange;
                            } },
                        _this9.props.data.map(function (item, key) {
                            return React.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp9), possibleConstructorReturn(_this9, _ret9);
    }

    return SelectItem;
}(React.Component);

SelectItem.defaultProps = {
    data: [],
    prefixCls: 'weui-list'
};

var DoubleSelectItem = function (_React$Component10) {
    inherits(DoubleSelectItem, _React$Component10);

    function DoubleSelectItem() {
        var _ref10;

        var _temp10, _this10, _ret10;

        classCallCheck(this, DoubleSelectItem);

        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
        }

        return _ret10 = (_temp10 = (_this10 = possibleConstructorReturn(this, (_ref10 = DoubleSelectItem.__proto__ || Object.getPrototypeOf(DoubleSelectItem)).call.apply(_ref10, [this].concat(args))), _this10), _this10.render = function () {
            var prefixCls = _this10.props.prefixCls;
            var minValue = (_this10.props.value || '~').split('~')[0];
            var maxValue = (_this10.props.value || '~').split('~')[1];
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-double-select-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this10.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(Icon, { type: 'right' }),
                    React.createElement(
                        'select',
                        { className: 'max-select', value: maxValue, onChange: function onChange(e) {
                                _this10.props.onMaxChange(e.target.value);

                                var value = _this10.props.value || '~';
                                _this10.props.onChange(value.split('~')[0] + '~' + e.target.value);
                            } },
                        React.createElement(
                            'option',
                            { value: '' },
                            '\u8BF7\u9009\u62E9'
                        ),
                        _this10.props.maxData.map(function (item, key) {
                            return React.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    ),
                    React.createElement(
                        'span',
                        null,
                        ' ~ '
                    ),
                    React.createElement(
                        'select',
                        { className: 'min-select', value: minValue, onChange: function onChange(e) {
                                _this10.props.onMinChange(e.target.value);

                                var value = _this10.props.value || '~';
                                _this10.props.onChange(e.target.value + '~' + value.split('~')[1]);
                            } },
                        React.createElement(
                            'option',
                            { value: '' },
                            '\u8BF7\u9009\u62E9'
                        ),
                        _this10.props.minData.map(function (item, key) {
                            return React.createElement(
                                'option',
                                { value: item, key: key },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp10), possibleConstructorReturn(_this10, _ret10);
    }

    return DoubleSelectItem;
}(React.Component);

DoubleSelectItem.defaultProps = {
    data: [],
    prefixCls: 'weui-list',
    onMaxChange: function onMaxChange() {},
    onMinChange: function onMinChange() {}
};

var PickerItem = function (_React$Component11) {
    inherits(PickerItem, _React$Component11);

    function PickerItem() {
        var _ref11;

        var _temp11, _this11, _ret11;

        classCallCheck(this, PickerItem);

        for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
        }

        return _ret11 = (_temp11 = (_this11 = possibleConstructorReturn(this, (_ref11 = PickerItem.__proto__ || Object.getPrototypeOf(PickerItem)).call.apply(_ref11, [this].concat(args))), _this11), _this11.state = {
            pickerStatus: ''
        }, _this11.onPickerBackClick = function () {
            _this11.setState({
                pickerStatus: 'close'
            });
        }, _this11.render = function () {
            var prefixCls = _this11.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-picker-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this11.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this11.setState({
                                    pickerStatus: 'open'
                                });
                            } },
                        _this11.props.value || '请选择',
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                ),
                React.createElement(Picker, { name: _this11.props.name,
                    data: _this11.props.data,
                    value: _this11.props.value,
                    status: _this11.state.pickerStatus,
                    onChange: _this11.props.onChange,
                    onBackClick: _this11.onPickerBackClick })
            );
        }, _temp11), possibleConstructorReturn(_this11, _ret11);
    }

    return PickerItem;
}(React.Component);

PickerItem.defaultProps = {
    prefixCls: 'weui-list',
    value: '请选择',
    name: '请选择',
    data: []
};

var RadioItem = function (_React$Component12) {
    inherits(RadioItem, _React$Component12);

    function RadioItem() {
        var _ref12;

        var _temp12, _this12, _ret12;

        classCallCheck(this, RadioItem);

        for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            args[_key12] = arguments[_key12];
        }

        return _ret12 = (_temp12 = (_this12 = possibleConstructorReturn(this, (_ref12 = RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).call.apply(_ref12, [this].concat(args))), _this12), _this12.render = function () {
            var prefixCls = _this12.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-radio-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this12.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        Radio,
                        { onChange: _this12.props.onChange, value: _this12.props.value },
                        _this12.props.data.map(function (item, key) {
                            return React.createElement(
                                Radio.Item,
                                { key: key, value: item, active: _this12.props.value === item ? true : false },
                                item
                            );
                        })
                    )
                )
            );
        }, _temp12), possibleConstructorReturn(_this12, _ret12);
    }

    return RadioItem;
}(React.Component);

RadioItem.defaultProps = {
    prefixCls: 'weui-list',
    value: '',
    data: []
};

var CityPickerItem = function (_React$Component13) {
    inherits(CityPickerItem, _React$Component13);

    function CityPickerItem() {
        var _ref13;

        var _temp13, _this13, _ret13;

        classCallCheck(this, CityPickerItem);

        for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            args[_key13] = arguments[_key13];
        }

        return _ret13 = (_temp13 = (_this13 = possibleConstructorReturn(this, (_ref13 = CityPickerItem.__proto__ || Object.getPrototypeOf(CityPickerItem)).call.apply(_ref13, [this].concat(args))), _this13), _this13.state = {
            pickerStatus: ''
        }, _this13.onPickerBackClick = function () {
            _this13.setState({
                pickerStatus: 'close'
            });
        }, _this13.render = function () {
            var prefixCls = _this13.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-picker-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this13.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this13.setState({
                                    pickerStatus: 'open'
                                });
                            } },
                        _this13.props.value || '请选择',
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                ),
                React.createElement(CityPicker, { name: _this13.props.name,
                    value: _this13.props.value,
                    status: _this13.state.pickerStatus,
                    onChange: _this13.props.onChange,
                    onBackClick: _this13.onPickerBackClick })
            );
        }, _temp13), possibleConstructorReturn(_this13, _ret13);
    }

    return CityPickerItem;
}(React.Component);

CityPickerItem.defaultProps = {
    prefixCls: 'weui-list',
    value: '请选择',
    name: '选择城市'
};

var TagPickerItem = function (_React$Component14) {
    inherits(TagPickerItem, _React$Component14);

    function TagPickerItem() {
        var _ref14;

        var _temp14, _this14, _ret14;

        classCallCheck(this, TagPickerItem);

        for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
            args[_key14] = arguments[_key14];
        }

        return _ret14 = (_temp14 = (_this14 = possibleConstructorReturn(this, (_ref14 = TagPickerItem.__proto__ || Object.getPrototypeOf(TagPickerItem)).call.apply(_ref14, [this].concat(args))), _this14), _this14.state = {
            pickerStatus: ''
        }, _this14.onPickerBackClick = function () {
            _this14.setState({
                pickerStatus: 'close'
            });
        }, _this14.renderTags = function () {
            var value = {};
            try {
                value = JSON.parse(_this14.props.value);
            } catch (e) {
                value = {};
            }

            var items = [];
            for (var i in value) {
                items = items.concat(value[i]);
            }

            return items.length > 0 ? items.map(function (item, key) {
                return React.createElement(
                    'span',
                    { key: key },
                    item
                );
            }) : '请选择';
        }, _this14.render = function () {
            var prefixCls = _this14.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-tag-picker-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this14.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this14.setState({ pickerStatus: 'open' });
                            } },
                        _this14.renderTags(),
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                ),
                React.createElement(TagPicker, { name: _this14.props.name,
                    data: _this14.props.data,
                    value: _this14.props.value,
                    status: _this14.state.pickerStatus,
                    onChange: _this14.props.onChange,
                    onBackClick: _this14.onPickerBackClick })
            );
        }, _temp14), possibleConstructorReturn(_this14, _ret14);
    }

    return TagPickerItem;
}(React.Component);

TagPickerItem.defaultProps = {
    value: '',
    name: '选择标签',
    prefixCls: 'weui-list'
};

var MonthPickerItem = function (_React$Component15) {
    inherits(MonthPickerItem, _React$Component15);

    function MonthPickerItem() {
        var _ref15;

        var _temp15, _this15, _ret15;

        classCallCheck(this, MonthPickerItem);

        for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
            args[_key15] = arguments[_key15];
        }

        return _ret15 = (_temp15 = (_this15 = possibleConstructorReturn(this, (_ref15 = MonthPickerItem.__proto__ || Object.getPrototypeOf(MonthPickerItem)).call.apply(_ref15, [this].concat(args))), _this15), _this15.state = {
            pickerStatus: ''
        }, _this15.onPickerBackClick = function () {
            _this15.setState({
                pickerStatus: 'close'
            });
        }, _this15.render = function () {
            var prefixCls = _this15.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-tag-picker-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this15.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control" },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this15.setState({ pickerStatus: 'open' });
                            } },
                        _this15.props.value || '请选择',
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                ),
                React.createElement(MonthPicker, { value: _this15.props.value, status: _this15.state.pickerStatus,
                    onChange: _this15.props.onChange, onBackClick: _this15.onPickerBackClick })
            );
        }, _temp15), possibleConstructorReturn(_this15, _ret15);
    }

    return MonthPickerItem;
}(React.Component);

MonthPickerItem.defaultProps = {
    value: '',
    name: '选择日期',
    prefixCls: 'weui-list'
};

var DatePickerItem = function (_React$Component16) {
    inherits(DatePickerItem, _React$Component16);

    function DatePickerItem() {
        var _ref16;

        var _temp16, _this16, _ret16;

        classCallCheck(this, DatePickerItem);

        for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
            args[_key16] = arguments[_key16];
        }

        return _ret16 = (_temp16 = (_this16 = possibleConstructorReturn(this, (_ref16 = DatePickerItem.__proto__ || Object.getPrototypeOf(DatePickerItem)).call.apply(_ref16, [this].concat(args))), _this16), _this16.state = {
            datePickerVisible: false
        }, _this16.render = function () {
            var prefixCls = _this16.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-date-picker-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-label" },
                    _this16.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-control", onClick: function onClick() {
                            _this16.setState({ datePickerVisible: true });
                        } },
                    React.createElement(
                        'div',
                        null,
                        _this16.props.value || '请选择',
                        React.createElement(Icon, { type: 'horizontal' })
                    )
                ),
                React.createElement(InfiniteDatePicker, { visible: _this16.state.datePickerVisible, onClose: function onClose() {
                        _this16.setState({
                            datePickerVisible: false
                        });
                    }, selected: new Date(_this16.props.value), onChange: function onChange(val) {
                        _this16.setState({
                            datePickerVisible: false
                        });
                        _this16.props.onChange(val);
                    } })
            );
        }, _temp16), possibleConstructorReturn(_this16, _ret16);
    }

    return DatePickerItem;
}(React.Component);

DatePickerItem.defaultProps = {
    value: '',
    name: '选择日期',
    prefixCls: 'weui-list'
};

var RaterItem = function (_React$Component17) {
    inherits(RaterItem, _React$Component17);

    function RaterItem() {
        var _ref17;

        var _temp17, _this17, _ret17;

        classCallCheck(this, RaterItem);

        for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
            args[_key17] = arguments[_key17];
        }

        return _ret17 = (_temp17 = (_this17 = possibleConstructorReturn(this, (_ref17 = RaterItem.__proto__ || Object.getPrototypeOf(RaterItem)).call.apply(_ref17, [this].concat(args))), _this17), _this17.render = function () {
            var prefixCls = _this17.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + "-item " + prefixCls + "-rater-item" },
                React.createElement(
                    'div',
                    { className: prefixCls + "-content" },
                    _this17.props.children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + "-extra" },
                    React.createElement(Rater, { value: _this17.props.value, onChange: _this17.props.onChange })
                )
            );
        }, _temp17), possibleConstructorReturn(_this17, _ret17);
    }

    return RaterItem;
}(React.Component);

RaterItem.defaultProps = {
    value: '',
    prefixCls: 'weui-list'
};

var List = function (_React$Component18) {
    inherits(List, _React$Component18);

    function List() {
        var _ref18;

        var _temp18, _this18, _ret18;

        classCallCheck(this, List);

        for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
            args[_key18] = arguments[_key18];
        }

        return _ret18 = (_temp18 = (_this18 = possibleConstructorReturn(this, (_ref18 = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref18, [this].concat(args))), _this18), _this18.render = function () {
            return React.createElement(
                'div',
                { className: _this18.props.prefixCls + "-list " + _this18.props.className, style: _this18.props.style },
                _this18.props.children
            );
        }, _temp18), possibleConstructorReturn(_this18, _ret18);
    }

    return List;
}(React.Component);

List.defaultProps = {
    style: {},
    className: '',
    prefixCls: 'weui'
};


List.Header = Header$2;
List.Footer = Footer;
List.Item = ListItem;
List.FileItem = FileItem;
List.InputItem = InputItem;
List.CodeInputItem = CodeInputItem;
List.TextareaItem = List.TextAreaItem = TextAreaItem;
List.SelectItem = SelectItem;
List.DoubleSelectItem = DoubleSelectItem;
List.RaterItem = RaterItem;
List.RadioItem = RadioItem;
List.SwitchItem = SwitchItem;
List.PickerItem = PickerItem;
List.TagPickerItem = TagPickerItem;
List.CityPickerItem = CityPickerItem;
List.DatePickerItem = DatePickerItem;
List.MonthPickerItem = MonthPickerItem;

var ListLoading = function (_React$Component) {
    inherits(ListLoading, _React$Component);

    function ListLoading() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, ListLoading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ListLoading.__proto__ || Object.getPrototypeOf(ListLoading)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + '-list-loading', onClick: _this.props.onClick },
                _this.props.hasMore ? React.createElement(Icon, { type: 'loading' }) : React.createElement(
                    'div',
                    { className: 'no_more' },
                    '\u6CA1\u6709\u66F4\u591A\u4E86'
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return ListLoading;
}(React.Component);

ListLoading.defaultProps = {
    visible: true,
    hasMore: true,
    prefixCls: 'weui'
};

/**
 * loading组件
 */
var Loading = function (_React$Component) {
    inherits(Loading, _React$Component);

    function Loading() {
        classCallCheck(this, Loading);
        return possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
    }

    createClass(Loading, [{
        key: 'render',
        value: function render() {
            //return <div className="weui_loading" id={this.props.id}
            //    style={{'display':'none'}}>
            //    <img className="loader" src={puffSvg}/>
            //</div>
            return React.createElement(
                'div',
                { className: 'weui_loading', id: this.props.id },
                React.createElement(
                    'div',
                    { className: 'loading' },
                    React.createElement('div', { className: 'dot white' }),
                    React.createElement('div', { className: 'dot' }),
                    React.createElement('div', { className: 'dot' }),
                    React.createElement('div', { className: 'dot' }),
                    React.createElement('div', { className: 'dot' })
                )
            );
        }
    }]);
    return Loading;
}(React.Component);

/**
 *水印标记
 */
var Mark = function (_React$Component) {
    inherits(Mark, _React$Component);

    function Mark() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Mark);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Mark.__proto__ || Object.getPrototypeOf(Mark)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            return React.createElement(
                'div',
                { className: 'weui_mark' },
                _this.props.content
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Mark;
}(React.Component);

var Modal = function (_React$Component) {
    inherits(Modal, _React$Component);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            status: ''
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                status: nextProps.status
            });
        }, _this.render = function () {
            var cls = _this.props.className;
            var status = _this.state.status;
            var prefixCls = _this.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + '-modal ' + cls + ' ' + status },
                React.createElement(
                    'div',
                    { className: prefixCls + '-modal-content', ref: prefixCls + '-modal-content' },
                    _this.props.children,
                    React.createElement(
                        'div',
                        { className: prefixCls + '-modal-close', onClick: function onClick() {
                                _this.setState({
                                    status: 'close'
                                });
                            } },
                        React.createElement('div', { className: 'line' }),
                        React.createElement(Icon, { type: 'guanbi' })
                    )
                ),
                React.createElement(Mask, { onClick: function onClick() {
                        _this.setState({
                            status: 'close'
                        });
                    } })
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Modal;
}(React.Component);

Modal.defaultProps = {
    prefixCls: 'weui'
};

//import networkimg from './img/network.jpg'

var NetworkStatusCheck = function (_React$Component) {
    inherits(NetworkStatusCheck, _React$Component);

    function NetworkStatusCheck() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, NetworkStatusCheck);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = NetworkStatusCheck.__proto__ || Object.getPrototypeOf(NetworkStatusCheck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            online: true
        }, _this.componentDidMount = function () {
            //监听网络状态
            window.addEventListener("online", function () {
                _this.setState({
                    online: true
                });
            }, false);
            window.addEventListener("offline", function () {
                _this.setState({
                    online: false
                });
            }, false);
        }, _this.render = function () {
            return !_this.state.online ? React.createElement(
                'div',
                { className: 'network_status_check' },
                React.createElement(
                    'div',
                    { className: 'network_error' },
                    React.createElement('img', { src: networkimg }),
                    React.createElement(
                        'div',
                        { className: 'tip_text' },
                        '\u7F51\u7EDC\u4E0D\u53EF\u7528'
                    ),
                    React.createElement(
                        'div',
                        { className: 'tip_text small' },
                        '\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5'
                    ),
                    React.createElement(
                        Button,
                        { onClick: function onClick() {
                                window.location.reload();
                            } },
                        '\u70B9\u51FB\u91CD\u8BD5'
                    )
                )
            ) : null;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return NetworkStatusCheck;
}(React.Component);

/**
 * page组件
 */
var Notify = function (_React$Component) {
    inherits(Notify, _React$Component);

    function Notify() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Notify);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Notify.__proto__ || Object.getPrototypeOf(Notify)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                visible: nextProps.visible
            });
        }, _this.onCloseClick = function () {
            _this.setState({
                visible: false
            });
        }, _this.onClick = function () {
            _this.props.onClick(_this.props.data);
        }, _this.render = function () {
            var top = _this.state.visible ? '0' : '-100px';
            var visibility = _this.state.visible ? 'visible' : 'hidden';
            return React.createElement(
                'div',
                { className: 'weui_notify', style: { top: top, visibility: visibility } },
                React.createElement(Icon, { type: 'notice', className: 'fade_in' }),
                React.createElement(Icon, { type: 'close', className: 'fade_in cursor', onClick: _this.onCloseClick }),
                React.createElement(
                    'div',
                    { onClick: _this.onClick },
                    _this.props.content
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Notify;
}(React.Component);

/**
 * 返回顶部组件
 */
var ReturnTop = function (_React$Component) {
    inherits(ReturnTop, _React$Component);

    function ReturnTop() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, ReturnTop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ReturnTop.__proto__ || Object.getPrototypeOf(ReturnTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            cls: '',
            visible: false

            //滚动条在Y轴上的滚动距离
        }, _this.getScrollTop = function () {
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
        }, _this.componentDidMount = function () {
            Util.onScrollBottom('setReturnTopVisible', function () {
                var visible = _this.getScrollTop() > 500 ? true : false;
                _this.setState({
                    visible: visible
                });
            });
        }, _this.onClick = function () {
            _this.setState({
                cls: 'fly_out'
            });

            var timer = setInterval(function () {
                var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                window.scrollTo(0, currentPosition - 200);
            }, 1);
            setTimeout(function () {
                window.scrollTo(0, 0);
                clearInterval(timer);
                _this.setState({
                    visible: false,
                    cls: ''
                });
            }, 1000);
        }, _this.render = function () {
            return React.createElement(
                'div',
                { id: 'return_top', className: "weui_return_top cursor " + _this.state.cls,
                    style: { display: _this.state.visible ? 'block' : 'none' }, onClick: _this.onClick },
                React.createElement(Icon, { type: 'rocket' })
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return ReturnTop;
}(React.Component);

/**
 * 悬浮咨询按钮
 */
var ConsultPatch = function (_React$Component) {
    inherits(ConsultPatch, _React$Component);

    function ConsultPatch() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, ConsultPatch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ConsultPatch.__proto__ || Object.getPrototypeOf(ConsultPatch)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
            // const isMobile = Util.os.android||Util.os.iPhone
            // if(!isMobile){
            //     var tenantId='76965df13fc84a05a38d84fb7886ebd1';
            //     document.write(unescape("%3Cscript id='aikfWebMainJs' src='"+((window.location.protocol=="file:")?"http:":window.location.protocol)+"//www.aikf.com/ask/resources/app/ask/webMain.js?_="+Math.random()+"' type='text/javascript'%3E%3C/script%3E"))
            // }
        }, _this.render = function () {
            var isMobile = Util.os.android || Util.os.iPhone;
            return isMobile ? React.createElement(
                'div',
                { className: 'weui_consult_patch', onClick: function onClick() {
                        var url = Util.os.android || Util.os.iPhone ? 'http://www.aikf.com/ask/h5/bjzckjyxgs.htm' : 'http://www.aikf.com/ask/bjzckjyxgs.htm';
                        Util.assign(url);
                    } },
                React.createElement(Icon, { type: 'consult' })
            ) : null;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return ConsultPatch;
}(React.Component);

/**
 *侧边栏下载App和关注公账号二维码
 */
var DownloadPatch = function (_React$Component) {
    inherits(DownloadPatch, _React$Component);

    function DownloadPatch() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, DownloadPatch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DownloadPatch.__proto__ || Object.getPrototypeOf(DownloadPatch)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            if (Util.os.android || Util.os.iPhone) {
                return null;
            }
            return React.createElement(
                'div',
                { className: 'download_patch' },
                React.createElement(
                    'p',
                    null,
                    '\u667A\u7B79APP\u6B63\u5F0F\u4E0A\u7EBF'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u88C5\u5728\u53E3\u888B\u91CC\u7684\u4EBA\u624D/\u4EFB\u52A1\u5E93, \u4E0D\u6765\u8BD5\u8BD5\u4E48?'
                ),
                React.createElement('img', { className: 'qr_code', src: '/static/assets/download_qr_code.jpg' }),
                React.createElement(
                    'p',
                    null,
                    '\u5173\u6CE8\u667A\u7B79\u516C\u4F17\u53F7'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u6700\u65B0\u4EBA\u624D/\u4EFB\u52A1\u63A8\u8350, \u6BCF\u5468\u4E00\u53D1\u5E03'
                ),
                React.createElement('img', { className: 'qr_code', src: '/static/assets/follow_qr_code.jpg' }),
                React.createElement('img', { className: 'long_logo', src: '/static/assets/long_logo.png' }),
                React.createElement(
                    'p',
                    { className: 'slogan' },
                    '\u4E92\u8054\u7F51\u9AD8\u7EA7\u4EBA\u624D\u4E00\u7AD9\u5F0F\u76F4\u79DF\u5E73\u53F0'
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return DownloadPatch;
}(React.Component);

/**
 * page组件
 */
var Page = function (_React$Component) {
    inherits(Page, _React$Component);

    function Page() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Page);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            online: navigator.onLine,
            notifyData: '',
            notifyVisible: false
        }, _this.handleAppPushData = function (data) {
            Util.jsonlog(data);
            switch (data.msg_type) {
                case 'private_chat':
                    Util.slideIn('#workbench/private_chat?conversation_type=' + data.conversation_type + '&target_id=' + data.user_id);
                    break;

                case 'group_chat':
                    Util.slideIn('#workbench/group_chat?conversation_type=' + data.conversation_type + '&target_id=' + data.target_id);
                    break;
            }
        }, _this.registerPushListener = function () {
            window.registerPushListenerIntervalId = Util.setInterval(function () {
                if ((typeof api === 'undefined' ? 'undefined' : _typeof(api)) == 'object') {
                    //注册小米推送,监听推送消息
                    api.require('mipush').registerPush({
                        appId: '2882303761517533099',
                        appKey: '5891753372099'
                    });
                    //设置消息监听
                    api.require('mipush').setListener(function (ret) {
                        var data = void 0;
                        if (ret['payload[user_id]']) {
                            data = {
                                content: ret['payload[content]'],
                                user_id: ret['payload[user_id]'],
                                msg_type: ret['payload[msg_type]'],
                                target_id: ret['payload[target_id]'],
                                message_type: ret['payload[message_type]'],
                                conversation_type: ret['payload[conversation_type]']
                            };
                        } else {
                            data = JSON.parse(ret.content);
                        }
                        if (_this.props.onReceiveAppPush) {
                            _this.props.onReceiveAppPush(data);
                            return false;
                        }
                        _this.setState({
                            notifyData: data,
                            notifyVisible: true
                        });
                    });
                    //监听通知点击事件
                    api.addEventListener({
                        name: 'appintent'
                    }, function (ret, err) {
                        if (ret.appParam.key_message) {
                            ret = ret.appParam.key_message.match(/content=\{(.*?)\},/);
                            _this.handleAppPushData(JSON.parse(ret[1]));
                        }
                    });
                    //移除interval
                    Util.clearInterval(window.registerPushListenerIntervalId);
                }
            }, 500);
        }, _this.componentDidMount = function () {
            //移除ajax loading
            Util.ajaxLoading(false);

            //监听网络状态
            window.addEventListener("online", function () {
                _this.setState({
                    online: true
                });
            }, false);
            window.addEventListener("offline", function () {
                _this.setState({
                    online: false
                });
            }, false);

            //回调跳转
            var wxrurl = Util.getStorage('wxrurl');
            if (wxrurl && _this.props.title != '绑定手机号' && _this.props.title != '设置密码' && _this.props.title !== '个人资料') {
                Util.removeStorage('wxrurl');
                Util.replace(wxrurl);
            }

            //滚动至顶部
            switch (true) {
                case location.href.indexOf('task/list') != -1:
                case location.href.indexOf('talent/list') != -1:
                    break;

                default:
                    window.scrollTo(0, 0);
            }

            //配置微信jssdk
            if (Util.os.wechat) {
                WeixinService.config();
            }

            //更新标题
            if (_this.props.title) {
                _this.updateTitle(_this.props.title);
            }

            //移除过期的interval
            Util.clearInterval();

            //清除talent_list, task_list内存中的数据
            _this.clearMemoryStorage();

            //监听App push消息
            if (Util.os.ios || Util.os.android) {
                _this.registerPushListener();
            }

            //友盟事件统计
            _czc.push(["_trackPageview", location.href, location.href]);

            //移除page_animate
            window.setTimeout(function () {
                Util.setStorage('page_animate', '');
            }, 1000);

            //更新login_at
            UserService.updateActiveAt({ loading: false });
        }, _this.clearMemoryStorage = function () {
            var hash = window.location.hash.split('?')[0];
            var excluded = ['#/task/list', '#/task/detail', '#/task/project_detail', '#/task/applicant'];
            if (excluded.indexOf(hash) === -1) {
                window.task_list = null;
            }
            excluded = ['#/talent/list', '#/talent/detail'];
            if (excluded.indexOf(hash) === -1) {
                window.talent_list = null;
            }
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.updateTitle(nextProps.title);
        }, _this.updateTitle = function (title) {
            if (title === document.title) {
                return false;
            }
            document.title = title;
            var iframeElement = document.createElement('iframe');
            iframeElement.setAttribute('src', './favicon.ico');
            iframeElement.style.display = 'none';
            var body = document.getElementsByTagName('body')[0];
            iframeElement.onload = function () {
                setTimeout(function () {
                    iframeElement.onload = null;
                    body.removeChild(iframeElement);
                }, 0);
            };
            body.appendChild(iframeElement);
        }, _this.renderHeader = function () {
            return _this.props.title ? React.createElement(Header, {
                title: _this.props.title,
                back: _this.props.back,
                shareContent: _this.props.appShareContent,
                prev: _this.props.prev
            }) : null;
        }, _this.render = function () {
            var _classNames;

            var className = _this.props.className;

            var pageAnimate = Util.getStorage('page_animate');
            var cls = classNames$1((_classNames = {}, defineProperty(_classNames, className, className), defineProperty(_classNames, 'slide_in', pageAnimate === 'slide_in'), defineProperty(_classNames, 'slide_up', pageAnimate === 'slide_up'), defineProperty(_classNames, 'weui_page', true), defineProperty(_classNames, 'weui_page_no_header', Util.os.wechat && (Util.os.ios || Util.os.android)), defineProperty(_classNames, 'weui_page_not_app', Util.os.apicloud ? false : true), defineProperty(_classNames, 'weui_page_network_error', _this.state.online ? false : true), _classNames));

            if (!_this.state.online) {
                return React.createElement(
                    'div',
                    { className: cls },
                    _this.renderHeader(),
                    React.createElement(
                        'div',
                        { className: 'network_error' },
                        React.createElement('img', { src: networkimg }),
                        React.createElement(
                            'div',
                            { className: 'tip_text' },
                            '\u7F51\u7EDC\u4E0D\u53EF\u7528'
                        ),
                        React.createElement(
                            'div',
                            { className: 'tip_text small' },
                            '\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5'
                        ),
                        React.createElement(
                            Button$1,
                            { onClick: function onClick() {
                                    window.location.reload();
                                } },
                            '\u70B9\u51FB\u91CD\u8BD5'
                        )
                    )
                );
            }

            if (_this.props.blank) {
                return React.createElement(
                    'div',
                    { className: cls },
                    _this.renderHeader(),
                    React.createElement(
                        'div',
                        { className: 'loading_text' },
                        React.createElement(
                            'div',
                            { className: 'big clear' },
                            'ZHICHOU'
                        ),
                        React.createElement('div', { className: 'mask' }),
                        '\u79DF\u725B\u4EBA\u4E0A\u667A\u7B79'
                    )
                );
            }

            return React.createElement(
                'div',
                { className: cls },
                _this.renderHeader(),
                _this.props.children,
                React.createElement(DownloadPatch, null),
                React.createElement(Loading, { id: 'ajax_loading' }),
                React.createElement(Notify, { content: '\u60A8\u6536\u5230\u4E86\u4E00\u6761\u65B0\u6D88\u606F', data: _this.state.notifyData, visible: _this.state.notifyVisible,
                    onClick: _this.handleAppPushData }),
                _this.props.returnTop ? React.createElement(ReturnTop, null) : null
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Page;
}(React.Component);

Page.propTypes = {
    title: React.PropTypes.string
};
Page.defaultProps = {
    blank: false,
    onlyWx: false,
    returnTop: true
};

var Paragraph = function (_React$Component) {
    inherits(Paragraph, _React$Component);

    function Paragraph() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Paragraph);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            var children = Util.replaceWrap(_this.props.children);
            var text = _this.props.max ? Util.maxLength(children, _this.props.max) : children;
            return React.createElement('p', { className: prefixCls + '-paragraph ' + _this.props.className, dangerouslySetInnerHTML: {
                    __html: text
                } });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Paragraph;
}(React.Component);

Paragraph.defaultProps = {
    prefixCls: 'weui',
    className: '',
    max: ''
};

/**
 *二维码图片组件
 */

var Qrcode = function (_React$Component) {
    inherits(Qrcode, _React$Component);

    function Qrcode() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Qrcode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Qrcode.__proto__ || Object.getPrototypeOf(Qrcode)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            if (!_this.props.text) {
                return null;
            }

            var typeNumber = 8;
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(_this.props.text);
            qr.make();
            return React.createElement('div', { className: 'weui_qr_code', dangerouslySetInnerHTML: {
                    __html: qr.createImgTag(4, 10)
                } });
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Qrcode;
}(React.Component);

/**
 * 范围下拉列表组件
 */
var RangeSelect = function (_React$Component) {
    inherits(RangeSelect, _React$Component);

    function RangeSelect() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, RangeSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = RangeSelect.__proto__ || Object.getPrototypeOf(RangeSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            valueMin: 0,
            valueMax: 0
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                valueMin: nextProps.valueMin,
                valueMax: nextProps.valueMax
            });
        }, _this.onValueMinChange = function (e) {
            var valueMin = parseInt(e.target.value);
            var valueMax = 0;
            if (valueMin >= parseInt(_this.state.valueMax)) {
                if (valueMin + _this.props.step > _this.props.max) {
                    valueMax = _this.props.max;
                } else {
                    valueMax = valueMin + _this.props.step;
                }
            } else {
                valueMax = _this.state.valueMax;
            }
            _this.setState({
                valueMin: valueMin,
                valueMax: valueMax
            });
            _this.props.onChange(valueMin, valueMax);
        }, _this.onValueMaxChange = function (e) {
            var valueMax = parseInt(e.target.value);
            var valueMin = 0;
            if (parseInt(_this.state.valueMin) >= valueMax) {
                if (valueMax - _this.props.step < _this.props.min) {
                    valueMin = _this.props.min;
                } else {
                    valueMin = valueMax - _this.props.step;
                }
            } else {
                valueMin = _this.state.valueMin;
            }
            _this.setState({
                valueMin: valueMin,
                valueMax: valueMax
            });
            _this.props.onChange(valueMin, valueMax);
        }, _this.renderMinOptions = function () {
            var min = _this.props.min;
            var max = _this.props.max;
            var step = _this.props.step;
            var options = [];
            for (var i = min; i < max; i += step) {
                options.push(React.createElement(
                    'option',
                    { key: i, value: i },
                    i
                ));
            }
            return options;
        }, _this.renderMaxOptions = function () {
            var min = _this.props.min;
            var max = _this.props.max;
            var step = _this.props.step;
            var options = [];
            for (var i = min + step; i < max; i += step) {
                options.push(React.createElement(
                    'option',
                    { key: i, value: i },
                    i
                ));
            }
            options.push(React.createElement(
                'option',
                { key: max },
                max
            ));
            return options;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(RangeSelect, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = objectWithoutProperties(_props, ['className', 'children']);

            var cls = classNames$1(defineProperty({
                weui_range_select: true
            }, className, className));
            var unit = this.props.unit ? React.createElement(
                'span',
                { className: 'unit' },
                this.props.unit
            ) : null;
            return React.createElement(
                'div',
                { className: cls },
                React.createElement(
                    'select',
                    { onChange: this.onValueMinChange, value: this.state.valueMin, dir: 'rtl',
                        className: 'min' },
                    this.renderMinOptions()
                ),
                React.createElement(
                    'span',
                    { className: 'symbol' },
                    '~'
                ),
                React.createElement(
                    'select',
                    { onChange: this.onValueMaxChange, value: this.state.valueMax, dir: 'rtl',
                        className: 'max' },
                    this.renderMaxOptions()
                ),
                unit
            );
        }
    }]);
    return RangeSelect;
}(React.Component);

RangeSelect.propTypes = {
    min: React.PropTypes.number,
    valueMin: React.PropTypes.number,
    max: React.PropTypes.number,
    valueMax: React.PropTypes.number,
    step: React.PropTypes.number,
    onChange: React.PropTypes.func
};

var TabBarItem = function (_React$Component) {
    inherits(TabBarItem, _React$Component);

    function TabBarItem() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TabBarItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var prefixCls = _this.props.prefixCls;
            var active = _this.props.active ? 'active' : '';
            return React.createElement(
                'div',
                { className: prefixCls + '-item ' + active, onClick: function onClick() {
                        Util.replace(_this.props.url);
                    } },
                _this.props.children
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return TabBarItem;
}(React.Component);

TabBarItem.defaultProps = {
    active: false,
    prefixCls: 'weui-tab-bar'
};

var TabBar = function (_React$Component2) {
    inherits(TabBar, _React$Component2);

    function TabBar() {
        var _ref2;

        var _temp2, _this2, _ret2;

        classCallCheck(this, TabBar);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = possibleConstructorReturn(this, (_ref2 = TabBar.__proto__ || Object.getPrototypeOf(TabBar)).call.apply(_ref2, [this].concat(args))), _this2), _this2.render = function () {
            var prefixCls = _this2.props.prefixCls;
            return React.createElement(
                'div',
                { className: prefixCls + '-tab-bar' },
                _this2.props.children
            );
        }, _temp2), possibleConstructorReturn(_this2, _ret2);
    }

    return TabBar;
}(React.Component);

TabBar.defaultProps = {
    prefixCls: 'weui'
};


TabBar.Item = TabBarItem;

/**
 * page组件
 */
var TextTip = function (_React$Component) {
    inherits(TextTip, _React$Component);

    function TextTip() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TextTip);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextTip.__proto__ || Object.getPrototypeOf(TextTip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: false
        }, _this.renderContent = function () {
            return _this.state.visible ? React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'title' },
                    _this.props.title,
                    React.createElement(Icon, { type: 'close', onClick: function onClick() {
                            _this.setState({ visible: false });
                        } })
                ),
                React.createElement(
                    'div',
                    { className: 'details' },
                    _this.props.children
                )
            ) : null;
        }, _this.render = function () {
            return React.createElement(
                Link,
                { href: 'javascript: void(0)', className: 'weui_text_tip' },
                React.createElement(
                    'span',
                    { className: 'clear', onClick: function onClick() {
                            _this.setState({ visible: true });
                        } },
                    _this.props.title
                ),
                _this.renderContent()
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return TextTip;
}(React.Component);

/**
 * Created by jf on 15/10/27.
 */

var Toast = function (_React$Component) {
    inherits(Toast, _React$Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
            var _this$props = _this.props,
                icon = _this$props.icon,
                show = _this$props.show,
                children = _this$props.children;


            return React.createElement(
                'div',
                { className: icon === 'loading' ? 'weui_loading_toast' : '', style: { display: show ? 'block' : 'none' } },
                React.createElement(Mask, { transparent: true }),
                React.createElement(
                    'div',
                    { className: 'weui_toast' },
                    React.createElement(Icon, { value: icon }),
                    React.createElement(
                        'p',
                        { className: 'weui_toast_content' },
                        children
                    )
                )
            );
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return Toast;
}(React.Component);

Toast.propTypes = {
    icon: React.PropTypes.string,
    show: React.PropTypes.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};

/**
 *顶部提示
 */
var TopNotice = function (_React$Component) {
    inherits(TopNotice, _React$Component);

    function TopNotice() {
        var _ref;

        var _temp, _this, _ret;

        classCallCheck(this, TopNotice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TopNotice.__proto__ || Object.getPrototypeOf(TopNotice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            visible: true
        }, _this.onCloseClick = function () {
            _this.setState({
                visible: false
            });
        }, _this.render = function () {
            var closeIcon = _this.props.mode === 'closable' ? React.createElement(Icon, { type: 'guanbi', className: 'cursor', onClick: _this.onCloseClick }) : null;
            return _this.state.visible ? React.createElement(
                'div',
                { className: 'weui_top_notice yellow_color' },
                React.createElement(Icon, { type: 'tishi' }),
                _this.props.children,
                closeIcon
            ) : null;
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    return TopNotice;
}(React.Component);

TopNotice.defaultProps = {
    mode: 'closable'
};

var index = {
    Avatar: Avatar,
    Button: Button$1,
    Card: Card,
    Carousel: Carousel,
    Checkbox: Checkbox,
    CityPicker: CityPicker,
    Confirm: Confirm,
    Countdown: Countdown,
    EmptyTip: EmptyTip,
    FilePicker: FilePicker,
    Header: Header,
    Icon: Icon,
    Image: Image,
    InfiniteDatePicker: InfiniteDatePicker,
    Label: Label,
    Link: Link,
    List: List,
    ListLoading: ListLoading,
    Loading: Loading,
    Mark: Mark,
    Mask: Mask,
    Modal: Modal,
    MonthPicker: MonthPicker,
    NetworkStatusCheck: NetworkStatusCheck,
    Notify: Notify,
    Page: Page,
    Paragraph: Paragraph,
    Picker: Picker,
    Qrcode: Qrcode,
    Radio: Radio,
    RangeSelect: RangeSelect,
    Rater: Rater,
    ReturnTop: ReturnTop,
    Switch: Switch,
    TabBar: TabBar,
    Tabs: Tabs,
    TagPicker: TagPicker,
    TextTip: TextTip,
    Toast: Toast,
    TopNotice: TopNotice
};

return index;

}(React,format,zh_cn,InfiniteCalendar,null,qrcode));
//# sourceMappingURL=react-weui.js.map
