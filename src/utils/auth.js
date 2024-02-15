import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const TimeKey = 'Admin-Time'

export function getToken () {
    return Cookies.get(TokenKey)
}

export function setToken (token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken () {
    return Cookies.remove(TokenKey)
}

export function getTime () {
    return Cookies.get(TimeKey)
}

export function setTime (token) {
    return Cookies.set(TimeKey, token)
}

export function removeTime () {
    return Cookies.remove(TimeKey)
}
