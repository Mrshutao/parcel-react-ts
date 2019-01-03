import { combineReducers } from 'redux'

//管理登录验证相关的信息和事件
const LOGIN = 'login'
const LOGOUT = 'logout'

const localAuthState = sessionStorage.getItem('auth')

const initialState = localAuthState
    ? JSON.parse(localAuthState)
    : {
          isLogin: false,
          userInfo: { userName: '' },
      }

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            const newState = {
                isLogin: true,
                userInfo: action.userInfo,
            }
            sessionStorage.setItem('auth', JSON.stringify(newState))
            return newState
        case LOGOUT:
            return { isLogin: false, userInfo: null }
        default:
            return state
    }
}
export default combineReducers({
    authReducer,
})
