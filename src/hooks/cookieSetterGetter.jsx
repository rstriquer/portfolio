import React from 'react'

const getCookieValue = (name) => {
    for (var t = name + "=", o = decodeURIComponent(document.cookie).split(";"), c = 0; c < o.length; c++) {
        for (var n = o[c]; " " === n.charAt(0);)
            n = n.substring(1);
        if (0 === n.indexOf(t))
            return n.substring(t.length, n.length)
    }
    return ""
}

const setCookieValue = (cookieName, cookieValue, cookieExpires) => {
    var c = new Date();
    c.setTime(c.getTime() + 24 * cookieExpires * 60 * 60 * 1e3);
    var n = "expires=" + c.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + n + ";path=/"
}


export { getCookieValue, setCookieValue }