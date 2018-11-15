const LOGIN = 'login'
const LOGOUT = 'logout'

export function loginAction(userInfo) {
    return { type: LOGIN, userInfo }
}
export function logoutAction() {
    return { type: LOGOUT }
}
