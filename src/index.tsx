import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import '../src/css/index.scss'
import Routes from './router/routes'
import Store from './redux/store'
ReactDom.render(
    <Provider store={Store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
)
