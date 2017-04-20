import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Head from './components/Head'
import Home from './components/Home'
import App from './components/App'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Head}>
      <IndexRoute component={Home} />
      <Route path='app' component={App} />
    </Route>
  </Router>
), document.getElementById('root'))
