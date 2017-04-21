import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Head from './components/Header/Head'
import Home from './components/Home'
import App from './components/App'
import Search from './components/Search'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Head}>
      <IndexRoute component={Home} />
      <Route path='app' component={App} >
          <Route path='search'  component={Search} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
