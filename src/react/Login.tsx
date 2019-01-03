import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { loginAction } from '../redux/actions'
interface LoginState {
    isLogin: boolean
    name: string
}
class Login extends React.Component<RouteComponentProps<{}> & { loginState?: LoginState }, {}> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    toSub() {
        this.props['actions'].login({ userName: '舒涛' })
        this.props.history.push('/main')
    }
    render() {
        console.log(this.props.loginState)
        return (
            <div className="container">
                <button onClick={() => this.toSub()}>登录</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { loginState: state.authReducer }
}
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            login: args => dispatch(loginAction(args)),
        },
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
