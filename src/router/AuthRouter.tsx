import * as React from 'react'
import { Route } from 'react-router-dom'
import { Redirect, withRouter, RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'

interface LoginState {
    isLogin: boolean
    name: string
}
class AuthRouter extends React.Component<
    RouteComponentProps<{}> & {
        Comp?: any
        loginState: LoginState
        path?: any
    },
    {}
> {
    constructor(props: any) {
        super(props)
    }
    render() {
        const { Comp, path, loginState } = this.props
        console.log(loginState)
        const loggedIn = loginState.isLogin
        return (
            <Route
                path={path}
                render={props => {
                    return loggedIn ? <Comp {...props} /> : <Redirect to="/login" />
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
