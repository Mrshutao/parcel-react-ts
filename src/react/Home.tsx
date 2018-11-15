import * as React from 'react'
import { connect } from 'react-redux'
interface LoginState {
    isLogin: boolean
    name: string
}
class Home extends React.Component<{ loginState: LoginState }, {}> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props.loginState)
        return (
            <div className="container">
                <h1>hello world</h1>
            </div>
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
)(Home)
