import { combineReducers } from 'redux'

//管理登录验证相关的信息和事件
const LOGIN = 'login'
const LOGOUT = 'logout'

export function authReducer(state = { isLogin: false, userInfo: { userName: '' } }, action) {
    switch (action.type) {
        case LOGIN:
            return { isLogin: true, userInfo: action.userInfo }
        case LOGOUT:
            return { isLogin: false, userInfo: null }
        default:
            return state
    }
}
export default combineReducers({
    authReducer,
})
