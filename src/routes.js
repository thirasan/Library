import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
  Head,
  Home,
  App
} from './components'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/'
             component={Head}>
        <IndexRoute component={Home} />
        <route path='App'
               component={App} />
      </Route>
    </Router>
  )
}