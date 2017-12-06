
export function parseUrl (key){
    if (location.href.indexOf('?') === -1) {
        return []
    }
    const search = location.href.match(/\?(.*)/)[1]
    const searches = search.split('&')

    const res = {}
    searches.map((item, key)=>{
        const kvs = item.split('=')
        res[kvs[0]] = kvs[1]
    })
    return key?res[key]:res
}

export function setStorage (key, val) {
    try {
        localStorage.setItem(key, val)
    } catch (e) {
        Util.setCookie(key, val, 365 * 24 * 60 * 60 * 1000);//抛出异常使用cookie存储
    }
}

export function getStorage (key) {
    try {
        localStorage.setItem('cookieTest', 'test');//判断是否支持存储
        return localStorage.getItem(key);
    } catch (e) {
        return Util.getCookie(key)//同样抛出异常我们使用cookie去取值
    }
}

export function removeStorage (key) {
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

export function getCookie(name) {
    let matches = (document.cookie + ';').match(new RegExp(name + "=([^;]*)"))
    return matches ? matches[1] : null
}

/**
 * 添加cookie
 * @param name
 * @param value
 * @param ms
 */
export function setCookie (name, value, ms) {
    var exp = new Date();
    exp.setTime(exp.getTime() + ms);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
    console.log(document.cookie)
}

/**
 * 移除cookie
 * @param name
 */
export function removeCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = Util.getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
