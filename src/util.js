export function preZero(str) {
    return parseInt(str) < 10 ? ('0' + str) : str
}

export function extend(o, n) {
    for (var p in n) {
        o[p] = n[p]
    }
    return o
}

export function setDocumentTitle(title) {
    if (title === document.title) {
        return false
    }

    document.title = title
    const iframeElement = document.createElement('iframe')
    iframeElement.setAttribute('src', '/favicon.ico')
    iframeElement.style.display = 'none'

    const body = document.getElementsByTagName('body')[0]
    iframeElement.onload = function () {
        setTimeout(function () {
            iframeElement.onload = null
            body.removeChild(iframeElement)
        }, 0)
    }
    body.appendChild(iframeElement)
}

export function onScrollBottom (callbackName, callback) {
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

export function addEvent (obj,type,fn) {
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

export function onWindowScroll (onScrollTop, onScrollBottom) {  
    addEvent(window,'scroll', () => {
        //滚动条在Y轴上的滚动距离
        const scrollTop = document.body.scrollTop||document.documentElement.scrollTop

        //文档的总高度
        const scrollHeight = document.body.scrollHeight||document.documentElement.scrollHeight

        //浏览器视口的高度
        const windowHeight = document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight

        //触发滚动至底部的回调
        if (scrollTop + windowHeight >= scrollHeight && onScrollBottom) {
            onScrollBottom()
        }

        //触发滚动至顶部的回调
        if (scrollTop <= 10 && onScrollTop){
            onScrollTop()
        }
    }) 
}

export function getMonthDayCount(month){ 
    const date = new Date(month)  
    date.setMonth(date.getMonth() + 1) 
    date.setDate(0) 
    return date.getDate()
}

export function parsejson (str) {
    try{
        return JSON.parse(str)
    }catch(e){
        return {}
    }
}
