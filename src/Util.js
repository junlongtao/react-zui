/**
 * 常用函数工具类
 */
'use strict'

import React from 'react'

const userAgent = navigator.userAgent
export default class Util {

    static enableAopFeature = () => {
        Function.prototype.before = function (func) {
            var _self = this
            return _self.beforeFuncList ? _self.beforeFuncList.push(func) : _self.beforeFuncList = [func],
                function () {
                    for (var i = _self.beforeFuncList.length - 1; i > -1; i--) if (_self.beforeFuncList[i].apply(this, arguments) === !1) return !1;
                    return _self.apply(this, arguments);
                }
        }
        Function.prototype.after = function (func) {
            var _self = this
            return function () {
                var ret = _self.apply(this, arguments)
                return ret === !1 ? !1 : (func.apply(this, arguments), ret)
            }
        }
    }

    static conf = (name) => {
        const conf = ENV === 'dev' ? Util.extend(mainConf, localConf) : mainConf
        return conf[name]
    }

    /**
     * 终端类型检测
     * @returns {{trident: boolean, presto: boolean, webKit: boolean, gecko: boolean, mobile: boolean, ios: boolean, android: boolean, iPhone: boolean, iPad: boolean, webApp: boolean}}
     */
    static os = {
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
        apicloud: window.location.href.indexOf('file://') === -1 ? false : true,
    }

    /**
     * 采用强制覆盖合并对象n到对象o
     * @param o
     * @param n
     * @returns {*}
     */
    static extend = (o, n) => {
        for (var p in n) {
            o[p] = n[p]
        }
        return o
    }

    /**
     * layer错误提示弹窗
     * @param msg
     * @param time
     */
    static errorTip = (msg, time = 2.5) => {
        if (msg == '需要登录') {

        }
        layer.open({
            content: msg || '请求错误',
            time: time,
            shadeClose: true
        })
    }

    /**
     * 错误提示页面
     * @param msg
     */
    static errorPage = (msg) => {
        Util.assign('#error/' + msg)
    }

    /**
     * layer toast
     * @param msg
     * @param time
     */
    static toast = (msg, time = 2.5, callback) => {
        layer.open({
            content: msg,
            time: time,
            shadeClose: true
        })
        window.setTimeout(()=> {
            callback && callback()
        }, time * 1000)
    }

    /**
     * layer弹窗提示用户进行实名认证
     * @param msg
     */
    static authTip = (msg) => {
        layer.open({
            content: msg || '需要认证',
            btn: ['去认证', '取消'],
            yes: function (index) {
                Util.assign('#auth?rurl='
                    + encodeURIComponent(location.href))
                layer.close(index)
            }
        })
    }

    /**
     * 获取cookie
     * @param name
     * @returns {string}
     */
    static getCookie = (name) => {
        let matches = (document.cookie + ';').match(new RegExp(name + "=([^;]*)"))
        return matches ? matches[1] : null
    }

    /**
     * 添加cookie
     * @param name
     * @param value
     * @param ms
     */
    static setCookie = (name, value, ms) => {
        var exp = new Date();
        exp.setTime(exp.getTime() + ms);
        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
        console.log(document.cookie)
    }

    /**
     * 移除cookie
     * @param name
     */
    static removeCookie = (name) => {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = Util.getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }

    /**
     * 要求微信登录
     */
    static requireWxLogin = () => {
        window.href = window.location.href
        Util.confirm('请您先使用微信账号登录智筹', (res)=> {
            if (window.href.indexOf('/login') === -1) {
                Util.replace('#me/login?rurl=' + encodeURIComponent(window.href))
            }
        })
    }

    /**
     * 是否登录
     * @returns {boolean}
     */
    static isLogin = () => {
        return Util.getCookie('_identity') ? true : false;
    }

    /**
     * 需要登录
     */
    static requireLogin = (loginedCallback) => {
        window.rurl = location.href
        UserService.isLogin((res) => {
            if (res.data == false && window.rurl.indexOf('/login') === -1) {
                Util.setStorage('page_animate', 'slide_up')
                Util.replace('#me/login?rurl=' + encodeURIComponent(window.rurl))
            } else {
                loginedCallback && loginedCallback()
            }
        })
    }

    /**
     * 跳转登录页
     */
    static toLogin = () => {
        window.rurl = location.href
        if (window.rurl.indexOf('/login') === -1) {
            Util.setStorage('page_animate', 'slide_up')
            Util.replace('#me/login?rurl=' + encodeURIComponent(window.rurl))
        }
    }

    /**
     * 根据浮点数获取百分值
     * @param num
     * @param option 参数配置,
     * option.unit: 返回值是否带%, true,返回带%,option.unit=false,返回不带%
     * option.decimal: 返回值精确小数点位数,默认为2
     * @returns {*}
     */
    static getPercent = (num, option) => {
        option = Util.extend({
            unit: true,
            decimal: 2
        }, option)

        num = parseFloat(num) * 100
        num = num.toFixed(option.decimal)
        num = num.replace(/0+$/, '')
        if (parseInt(num) == num) {
            num = parseInt(num)
        }
        return option.unit ? num + '%' : num
    }

    /**
     * 根据浮点数获取分数形式字符串,如 0.2 返回 2/10
     * @param num
     * @returns {string}
     */
    static getFraction = (num) => {
        num = parseInt(num * 10)
        if (num > 10) num = 10
        if (num < 0) num = 0
        return num + '/' + (10 - num)
    }

    /**
     * 根据浮点数返回"xx分成"形式的字符串,如 0.2 返回 二八分成
     * @param num
     * @returns {string}
     */
    static getFractionStr = (num) => {
        num = parseInt(num * 10)
        if (num > 10) num = 10
        if (num < 0) num = 0
        const numMap = {
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
        }
        return numMap[num] + numMap[10 - num] + '分成'
    }

    /**
     * 阿拉伯数字金额转中文数字, 如 1000 返回 壹万元整
     * @param n
     * @returns {*}
     */
    static arab2ch = (n) => {
        if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
            return "invalid input";
        let unit = "千百拾亿千百拾万千百拾元角分", str = ""
        n += "00"
        let p = n.indexOf('.')
        if (p >= 0)
            n = n.substring(0, p) + n.substr(p + 1, 2)
        unit = unit.substr(unit.length - n.length)
        for (let i = 0; i < n.length; i++)
            str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i))
                + unit.charAt(i)
        return str.replace(/零(千|百|拾|角)/g, "零")
            .replace(/(零)+/g, "零")
            .replace(/零(万|亿|元)/g, "$1")
            .replace(/(亿)万|壹(拾)/g, "$1$2")
            .replace(/^元零?|零分/g, "")
            .replace(/元$/g, "元整")
    }

    /**
     * 金额单位分转为元,
     * @param num 金额数,单位分
     * @param language 返回形式, 'ch'返回中文形式(壹万元整), ''返回数字形式(￥1,000)
     * @returns {*}
     */
    static fen2yuan = (num, language) => {
        const yuan = parseInt(num / 100)
        switch (language) {
            case 'ch':
                return Util.arab2ch(yuan)

            default:
                return '￥' + Util.thousandBitSeperator(yuan)
        }
    }

    /**
     * 根据时间戳获取日期
     * @param time
     * @param format 日期格式, 默认 'YYYY-MM-DD'
     * @returns {*}
     */
    static getDate = (time, format) => {
        Date.prototype.Format = function (formatStr) {
            var str = formatStr;
            var Week = ['日', '一', '二', '三', '四', '五', '六'];
            var month = this.getMonth() + 1;
            str = str.replace(/yyyy|YYYY/, this.getFullYear());
            str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

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
        }
        const date = new Date()
        if (time) {
            date.setTime(parseInt(time) * 1000)
        }
        return date.Format(format || 'YYYY-MM-DD')
    }

    /**
     * 根据日期字符串获取周几
     * @param date
     * @returns {string}
     */
    static getWeekDay = (date) => {
        date = new Date(date)
        return '周' + ("日一二三四五六".charAt(date.getDay()))
    }

    /**
     * 从当前页面的URL获取参数值
     * @param name
     * @returns {*}
     */
    static getParam = (name, defaultVal = '') => {
        if (location.href.indexOf('?') === -1) {
            return defaultVal ? defaultVal : ''
        }
        let search = location.href.match(/\?(.*)/)[1]
        search = search.replace('?', '&')
        const searches = search.split('&')
        for (let item in searches) {
            let pattern = new RegExp(name + '=' + '(.*)')
            if (searches[item].match(pattern)) {
                return decodeURIComponent(searches[item].match(pattern)[1])
            }
        }
        return decodeURIComponent(defaultVal)
    }

    /**
     * 获取当前url中的键值对
     * @returns {{}}
     */
    static getParams = () => {
        if (location.href.indexOf('?') === -1) return {}
        let search = location.href.match(/\?(.*)/)[1]
        search = search.replace('?', '&')
        const searchItems = search.split('&')
        const res = {}
        for (let i in searchItems) {
            const item = searchItems[i]
            const key = item.split('=')[0]
            const val = item.split('=')[1]
            res[key] = val
        }
        return res
    }

    /**
     * 使用当前url添加query string
     * @param params
     * @returns {string}
     */
    static buildParams = (params) => {
        let matches = location.href.match(/(.*)\?/)
        let url = matches ? matches[1] : location.href
        let search = '?'
        for (let i in params) {
            search += (i + '=' + params[i] + '&')
        }
        return url + search.substring(0, search.length - 1)
    }

    /**
     * 在当前url上添加query string
     * @param params
     * @returns {string}
     */
    static addParams = (params) => {
        const originParams = Util.getParams()
        return Util.buildParams(Util.extend(originParams, params))
    }

    static removeParam = (name) => {
        if (location.href.indexOf(name) === -1) {
            return location.href
        }
        return location.href.replace(new RegExp("&?" + name + "=.*&?"), '')
    }

    /**
     * html特殊字符转义
     * @param str
     * @returns {string}
     */
    static htmlSpecialChars = (str) => {
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
    }

    /**
     * 根据还剩余秒数获取剩余天数
     * @param leftsec
     * @returns {number}
     */
    static getLeftDay = (leftsec) => {
        const left = leftsec / 60 / 60 / 24
        return Math.floor(left)
    }

    /**
     * 将intervalId存入window.mInervals,在Page Component
     * 载入时统一用Util.clearInterval清除
     * @param content
     * @param msecond
     * @returns {number}
     */
    static setInterval = (content, msecond) => {
        if (!window.mIntervals) {
            window.mIntervals = []
        }
        const id = window.setInterval(content, msecond)
        window.mIntervals.push(id)
        return id
    }

    /**
     * clear all intervals of window.mInervals
     * @param intervalId
     */
    static clearInterval = (intervalId) => {
        if (intervalId) {
            window.clearInterval(intervalId)
        } else if (window.mIntervals) {
            for (let i in window.mIntervals) {
                window.clearInterval(
                    window.mIntervals[i]
                )
            }
        }
    }

    /**
     * 添加cookie
     * @param name
     * @param value
     * @param hour
     * @param path
     * @param domain
     * @returns {boolean}
     */
    static addCookie = (name, value, hour, path, domain) => {
        var str = name + "=" + escape(value)
        //为0时不设定过期时间，浏览器关闭时cookie自动消失
        if (hour > 0) {
            var date = new Date()
            var ms = hour * 3600 * 1000
            date.setTime(date.getTime() + ms)
            str += "; expires=" + date.toGMTString()
        }
        path = path ? path : '/'
        domain = domain ? domain : '.maidada.cn'
        document.cookie = str + ';path=' + path
            + ';domain=' + domain
        return true
    }

    /**
     * 清除cookie
     */
    static clearCookie = () => {
        const keys = document.cookie.match(/[^ =;]+(?=\=)/g)
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }

    /**
     * 添加千分位, 如 1000 返回 1,000
     * @param num
     * @returns {*}
     */
    static thousandBitSeperator = (num) => {
        return num && num
                .toString()
                .replace(/(^|\s)\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
    }

    /**
     * 去除所有HTML标记
     * @param str
     * @returns {*}
     */
    static delHtmlTag = (str) => {
        return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
    }

    /**
     * 调起APP打开指定页面
     * @param url 要打开的页面URL,需包含完整的schema,
     * 如 tthybc://user/detail?id=***
     */
    static openApp = (url) => {
        if (Util.os.iPhone) {
            Util.assign(url)
        } else {
            const ifr = document.createElement('iframe')
            ifr.display = 'none'
            ifr.src = url
            document.body.appendChild(ifr)
            window.setTimeout(()=> {
                document.body.removeChild(ifr)
            }, 5000)
        }
    }

    /**
     * 身份证隐藏中间位数,只显示前六后四
     * @param idcard
     * @returns {string}
     */
    static hideIdcard = (idcard) => {
        return idcard.substr(0, 6) + '********' + idcard.substr(14, 4)
    }

    /**
     * 跳转APP应用市场
     * 微信内跳转应用宝,非微信内跳转各自的应用市场
     */
    static appMarket = () => {
        Util.toast('您未安装APP,正在带您前往应用市场... ...', 5)
        const qqAppMarket = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ttyongche.rose'
        if (Util.os.wechat) {
            Util.assign(qqAppMarket)
        } else if (Util.os.android) {
            Util.assign(qqAppMarket)
        } else {
            Util.assign('https://itunes.apple.com/us/app/hao-you-bang-chou-peng-you/id1121929386?l=zh&ls=1&mt=8')
        }
    }

    /**
     * 隐藏或显示全局的ajax loading
     * @param visible
     */
    static ajaxLoading = (visible) => {
        const loading = document.getElementById('ajax_loading')
        if (loading) {
            if (visible) {
                loading.style.display = 'block'
                //loading.className = 'weui_loading bounceInDown animated'
            } else {
                loading.style.display = 'none'
                //loading.className = 'weui_loading fadeOut animated'
            }
        }
    }

    /**
     * 环境限制,如 限制在微信里使用
     * @param env
     */
    static onlyEnv = (env) => {
        switch (env) {
            case 'wechat':
                if (!Util.os.wechat) {
                    Util.assign('#')
                }
                break
        }
    }

    /**
     * 获取int型数组中某个元素的下标
     * @param arr
     * @param value
     * @returns {*}
     */
    static arrayIndex = (arr, value) => {
        const str = arr.toString()
        const index = str.indexOf(value)
        if (index >= 0) {
            //存在返回索引
            const reg1 = new RegExp("((^|,)" + value + "(,|$))", "gi")
            return str.replace(reg1, "$2@$3").replace(/[^,@]/g, "").indexOf("@")
        } else {
            //不存在此项
            return -1
        }
    }

    /**
     * 获取数组中某个元素的下标
     * @param arr
     * @param val
     * @returns {number}
     */
    static indexOf = (arr, val) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == val) return i
        }
        return -1
    }

    /**
     * 删除数组中某个元素
     * @param arr
     * @param val
     * @returns {*}
     */
    static remove = (arr, val) => {
        const index = Util.indexOf(arr, val)
        if (index > -1) {
            arr.splice(index, 1)
        }
        return arr
    }

    /**
     * 根据最大长度限制截断字符串
     * @param str
     * @param length
     * @returns {string}
     */
    static maxLength = (str, length) => {
        return str.length < length ? str : (str.substr(0, length) + '......')
    }

    /**
     * 记录Y轴滚动条当前滚动距离
     */
    static storeScrollPosition = () => {

        //滚动条在Y轴上的滚动距离
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

        //浏览器视口的高度
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }

        Util.setStorage('originScrollPosition', scrollTop)
    }

    /**
     * 恢复滚动条之前的滚动距离
     */
    static returnOriginScrollPosition = () => {
        const y = Util.getStorage('originScrollPosition')
        window.scrollTo(0, y)
        Util.setStorage('originScrollPosition', 0)
    }

    /**
     * 绑定滚动至顶部时回调
     * @param callback
     */
    static onScrollTop = (callback) => {
        window.onscroll = () => {
            //滚动条在Y轴上的滚动距离
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

            if (scrollTop < 500) {
                callback && callback()
            }
        }
    }

    /**
     * 绑定滚动至底部时的回调
     * @param callback
     */
    static onScrollBottom = (callbackName, callback) => {
        if (!window.onScrollBottomCallbacks) {
            window.onScrollBottomCallbacks = {}
        }
        window.onScrollBottomCallbacks[callbackName] = callback

        window.onscroll = () => {
            //滚动条在Y轴上的滚动距离
            var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
            if (document.body) {
                bodyScrollTop = document.body.scrollTop;
            }
            if (document.documentElement) {
                documentScrollTop = document.documentElement.scrollTop;
            }
            scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

            //文档的总高度
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if (document.body) {
                bodyScrollHeight = document.body.scrollHeight;
            }
            if (document.documentElement) {
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;

            //浏览器视口的高度
            var windowHeight = 0;
            if (document.compatMode == "CSS1Compat") {
                windowHeight = document.documentElement.clientHeight;
            } else {
                windowHeight = document.body.clientHeight;
            }

            if (scrollTop + windowHeight >= scrollHeight) {
                for (let name in window.onScrollBottomCallbacks) {
                    window.onScrollBottomCallbacks[name].call()
                }
            }
        }
    }

    /**
     * 允许/禁止页面滚动
     * @param scroll
     */
    static pageScroll = (scroll) => {
        if (scroll) {
            document.getElementById('container').style.overflow = null
        } else {
            document.getElementById('container').style.overflow = 'hidden'
        }
    }

    /**
     * 页面向左滑入
     * @param url
     * @param type
     * @returns {boolean}
     */
    static slideIn = (url, type) => {
        if (location.href.indexOf(url) != -1) {
            return false
        }
        Util.setStorage('page_animate', 'slide_in')
        type === 'replace' ? Util.replace(url) : Util.assign(url)
    }

    /**
     * 页面从底部向上滑入
     * @param url
     * @returns {boolean}
     */
    static slideUp = (url, type) => {
        if (location.href.indexOf(url) != -1) {
            return false
        }
        Util.setStorage('page_animate', 'slide_up')
        type === 'replace' ? Util.replace(url) : Util.assign(url)
    }

    /**
     * 页面旋转进入
     * @param url
     * @returns {boolean}
     */
    static rotateIn = (url, type) => {
        if (location.href.indexOf(url) != -1) {
            return false
        }
        Util.setStorage('page_animate', 'rotate_in')
        type === 'replace' ? Util.replace(url) : Util.assign(url)
    }

    static getParamsFromUrl = (url) => {
        if (url.indexOf('?') === -1) {
            return {}
        }
        let search = url.match(/\?(.*)/)[1]
        search = search.replace('?', '&')
        const searchItems = search.split('&')
        const res = {}
        for (let i in searchItems) {
            const item = searchItems[i]
            const key = item.split('=')[0]
            const val = item.split('=')[1]
            res[key] = val
        }
        return res
    }

    static addParamsToUrl = (params, url) => {
        const originParams = Util.getParamsFromUrl(url)
        return Util.buildParamsToUrl(Util.extend(originParams, params), url)
    }

    static buildParamsToUrl = (params, url) => {
        let matches = url.match(/(.*)\?/)
        let search = '?'
        for (let i in params) {
            search += (i + '=' + params[i] + '&')
        }
        return (matches ? matches[1] : url) + search.substring(0, search.length - 1)
    }

    /**
     * 移除<br/>
     * @param str
     * @returns {*}
     */
    static removeBr = (str) => {
        str = str.replace(/<br\s?\/?>/g, '')
        return str
    }

    /**
     * 检测是否为空对象
     * @param obj
     * @returns {boolean}
     */
    static isEmptyObject = (obj) => {
        for (let key in obj) {
            return false
        }
        return true
    }

    /**
     * 获取简历填写完整度
     * @param resume
     * @returns {*}
     */
    static getResumeIntegrity = (resume) => {
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
                if ((resume[i] instanceof Object)) {
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
    }

    /**
     * 获取App版本,默认是requirement
     * @returns {string}
     */
    static getVersion = () => {
        return Util.getStorage('version') || 'requirement'
    }

    /**
     * 设置App版本
     * @param version
     */
    static setVersion = (version) => {
        if (version) {
            Util.setStorage('version', version)
            return true
        } else {
            return false
        }
    }

    /**
     * 从categoryTags中获取第一个category
     * @param tags
     * @returns {*}
     */
    static getCategory = (tags) => {
        let category
        for (var i in tags) {
            category = i
        }
        return category
    }

    /**
     * 获取categoryTags中的tag数量
     * @param tags
     * @returns {number}
     */
    static getTagCount = (tags) => {
        let count = 0
        for (let i in tags) {
            count += tags[i].length
        }
        return count
    }

    /**
     * 记录zc_source
     */
    static storeZcSource = () => {
        const source = Util.getParam('zc_source')
        if (source) {
            Util.setStorage('zc_source', source)
        }
    }

    /**
     * 添加当前登录用户的推荐id
     */
    static addRecommendId = () => {
        UserService.isLogin((res)=> {
            res.data && UserService.info({}, (res)=> {
                Util.replace(Util.addParams({
                    recommend_uid: res.data.id
                }))
            })
        })
    }

    /**
     * 确认操作
     * @param content
     * @param yes
     */
    static confirm = (content, yes) => {
        layer.open({
            content: content,
            btn: ['确认', '取消'],
            yes: (index) => {
                layer.close(index)
                yes()
            }
        })
    }

    static confirmPay = (yes) => {
        layer.open({
            content: '付款完成前请不要关闭此窗口, 完成付款后请根据付款情况点击下面的按钮',
            btn: ['已完成付款', '付款遇到问题'],
            no: (index) => {
                layer.close(index)
                Util.ajaxLoading(false)
            },
            yes: (index) => {
                layer.close(index)
                yes()
            }
        })
    }

    /**
     * 跳转web链接
     * @param url
     */
    static openArticle = (url) => {
        if (Util.os.apicloud) {
            var browser = api.require('webBrowser');
            browser.open({url: url});
        } else {
            url && Util.assign(url)
        }
    }

    /**
     * 获取App version
     * @returns {string}
     */
    static getAppVersion = () => {
        let version = '1.0.0'
        if (typeof api == 'object') {
            version = api.appVersion
        }
        return 'v' + version
    }

    /**
     * 滚动Y轴至底部
     * @returns {boolean}
     */
    static scrollBottom = () => {
        //文档的总高度
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        for (let i = 0; i < 5; i++) {
            window.scrollTo(0, scrollHeight)
        }
    }

    /**
     * 判断是否安装微信
     * @param callback
     */
    static wechatInstalled = (callback) => {
        if (typeof api == 'object' && api.appInstalled) {
            const bundle = api.systemType == 'ios' ? 'weixin' : 'com.tencent.mm'
            api.appInstalled({
                appBundle: bundle
            }, (ret, err) => {
                callback && callback(ret.installed)
            })
        }
    }

    /**
     * 获取当前年份
     * @returns {number}
     */
    static getCurrentYear = () => {
        return (new Date()).getFullYear()
    }

    /**
     * 0~9个位数字前面补0
     * @param i
     * @returns {string}
     */
    static getFullNum = (i) => {
        return i < 10 ? ('0' + i) : i
    }

    /**
     * 获取Y轴滚动条滚动距离
     * @returns {number}
     */
    static getScrollTop = () => {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop
    }

    static jsonlog = (content) => {
        console.log(JSON.stringify(content))
    }

    static getRongyunErrorMsg = (errorCode) => {
        let info = ''
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
        return info
    }

    static getOrderType = (type) => {
        switch (parseInt(type)) {
            case 3:
                return '时租'

            case 4:
                return '月租'

            case 5:
                return '任务租'
        }
    }

    //微信里自动授权登录
    static wechatAutoLogin = () => {
        Util.os.wechat && Util.replace('http://zhichou.com/api/auth/wechat')
    }

    static zeroTail = (val)=> {
        val = (val || 0)
        return val.toString().indexOf('.') === -1 ? val + '.00' : val
    }

    static preZero = (str) => {
        return parseInt(str) < 10 ? ('0' + str) : str
    }

    static appDownload = () => {
        Util.slideIn('http://a.app.qq.com/o/simple.jsp?pkgname=com.d782570386.nhy')
    }

    static hideMiddleChars = (str) => {
        return str.substr(0, 8) + '...' + str.substr(str.length - 5, 5)
    }

    static trim = (str) => {
        return str.toString().replace(new RegExp(/\s/g), '')
    }

    static requireRole(role, tipText) {
        if (Util.getVersion() != role) {
            Util.confirm(tipText, ()=> {
                Util.setStorage('change_version_rurl', location.href)
                Util.slideIn('#/me/talent')
            })
            return false
        }
        return true
    }

    //转换\r\n为<br/>
    static replaceWrap = (str) => {
        return (str || '').replace(/(\r)*\n/g, "<br/>")
    }

    static incrKey = (key, max) => {
        let val = parseInt(Util.getStorage(key) || 0) + 1
        Util.setStorage(key, val < max ? val : max)
        return val
    }

    static sadd = (key, val) => {
        const arr = JSON.parse(Util.getStorage(key)) || []
        Util.indexOf(arr, val) === -1 && arr.push(val)
        Util.setStorage(key, JSON.stringify(arr))
        return arr.length
    }

    static sremove = (key, val) => {
        let arr = JSON.parse(Util.getStorage(key)) || []
        arr = Util.remove(arr, val)
        Util.setStorage(key, JSON.stringify(arr))
        return arr.length
    }

    //转换\r\n为<br/>
    static replaceWrap = (str) => {
        return (str || '').replace(/(\r)*\n/g, "<br/>")
    }

    static setStorage = (key, val) => {
        try {
            localStorage.setItem(key, val)
        } catch (e) {
            Util.setCookie(key, val, 365 * 24 * 60 * 60 * 1000);//抛出异常使用cookie存储
        }
    }

    static getStorage = (key) => {
        try {
            localStorage.setItem('cookieTest', 'test');//判断是否支持存储
            return localStorage.getItem(key);
        } catch (e) {
            return Util.getCookie(key)//同样抛出异常我们使用cookie去取值
        }
    }

    static removeStorage = (key) => {
        if (!key) {
            return false
        }
        try {
            localStorage.setItem('cookieTest', 'test');//正常清除
            localStorage.removeItem(key);
        } catch (e) {
            Util.removeCookie(key)
        }
    }

    static objectEqual = (obj1, obj2) => {
        let res = true
        for (let i in obj1) {
            if (obj1[i] != obj2[i]) {
                res = false
            }
        }
        return res
    }

    static transformHashUrl = (url) => {
        url = url.replace(/#/, '')
        return url[0] === '/' ? url : ('/' + url)
    }

    static assign = (url) => {
        if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {
            location.assign(url)
            return false
        }
        browserHistory.push(Util.transformHashUrl(url))
    }

    static replace = (url) => {
        if (url.indexOf('http://') != -1 || url.indexOf('https://') != -1) {
            location.replace(url)
            return false
        }
        browserHistory.replace(Util.transformHashUrl(url))
    }

    static createRandStr = (len) => {
        let res = ''
        for (let i = 0; i < len; i++) {
            res += String.fromCharCode(Math.random() * 128)
        }
        return res
    }
}
