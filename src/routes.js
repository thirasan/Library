import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Head from './components/Header/Head'
import Home from './components/Home'
import App from './components/App'
import Query from './components/Query'
import Digital from './components/Digital'
import Book from './document/Book'
import Login from './Login'
import { Router, browserHistory } from 'react-router'
import {Provider} from 'react-redux';
import store from './store';

export default () => {
  return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Login}/>
          <Route path='/:user' component={Head}>
            <IndexRoute component={Home} />
            <Route path='app' component={App}/>
            <Route path='digital' component={Digital}/>
            <Route path='query' component={Query} />
            <Route path='book/:id' component={Book} />
          </Route>
        </Router>
      </Provider>
  )
}