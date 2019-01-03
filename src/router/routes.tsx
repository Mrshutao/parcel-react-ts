import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import Login from '../react/Login'
import NotFound from '../react/NotFound'

export default class Routes extends React.Component<{}, {}> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/" render={props => <AuthRouter />} />
                </Switch>
            </Router>
        )
    }
}
