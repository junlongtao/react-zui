'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.preZero = preZero;
exports.extend = extend;
exports.setDocumentTitle = setDocumentTitle;
exports.onScrollBottom = onScrollBottom;
exports.addEvent = addEvent;
exports.onWindowScroll = onWindowScroll;
exports.getMonthDayCount = getMonthDayCount;
exports.parsejson = parsejson;
function preZero(str) {
    return parseInt(str) < 10 ? '0' + str : str;
}

function extend(o, n) {
    for (var p in n) {
        o[p] = n[p];
    }
    return o;
}

function setDocumentTitle(title) {
    if (title === document.title) {
        return false;
    }

    document.title = title;
    var iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', '/favicon.ico');
    iframeElement.style.display = 'none';

    var body = document.getElementsByTagName('body')[0];
    iframeElement.onload = function () {
        setTimeout(function () {
            iframeElement.onload = null;
            body.removeChild(iframeElement);
        }, 0);
    };
    body.appendChild(iframeElement);
}

function onScrollBottom(callbackName, callback) {
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
}

function addEvent(obj, type, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + type, function () {
            fn.call(obj);
        });
    } else {
        obj.addEventListener(type, fn, false);
    }
}

function onWindowScroll(onScrollTop, onScrollBottom) {
    addEvent(window, 'scroll', function () {
        //滚动条在Y轴上的滚动距离
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        //文档的总高度
        var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

        //浏览器视口的高度
        var windowHeight = document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;

        //触发滚动至底部的回调
        if (scrollTop + windowHeight >= scrollHeight && onScrollBottom) {
            onScrollBottom();
        }

        //触发滚动至顶部的回调
        if (scrollTop <= 10 && onScrollTop) {
            onScrollTop();
        }
    });
}

function getMonthDayCount(month) {
    var date = new Date(month);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date.getDate();
}

function parsejson(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return {};
    }
}