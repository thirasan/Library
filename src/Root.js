import React, { Component } from 'react'
import routes from './routes'
import { Router, browserHistory } from 'react-router'

export default class Root extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          {routes()}
        </Router>
      </div>
    )
  }
}