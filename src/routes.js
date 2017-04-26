import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Head from './components/Header/Head'
import Home from './components/Home'
import App from './components/App'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Head}>
        <IndexRoute component={Home} />
        <Route path='app' component={App} />
      </Route>
    </Router>
  )
}