import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthRouter from './AuthRouter'
import Login from '../react/Login'
import Home from '../react/Home'
import NotFound from '../react/NotFound'

export default class Routes extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <AuthRouter path="/main" Comp={Home} />
                </div>
            </Router>
        )
    }
}
