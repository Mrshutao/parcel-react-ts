import * as React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Home from '../react/Home'

interface LoginState {
    isLogin: boolean
    name: string
}
class AuthRouter extends React.Component<
    {
        loginState: LoginState
        path?: any
    },
    {}
> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const { path, loginState } = this.props
        const loggedIn = loginState.isLogin
        return (
            <Route
                path={path}
                render={props => {
                    return loggedIn ? <Home {...props} /> : <Redirect to="/login" />
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return { loginState: state.authReducer }
}
const mapDispatchToProps = dispatch => {
    return {
        actions: {},
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthRouter)
