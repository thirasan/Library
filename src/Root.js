import React, { Component } from 'react'
import routes from './routes'

export default class Root extends Component {
  render() {
    return (
        routes()
    )
  }
}