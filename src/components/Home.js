import React, { Component } from 'react'
import styles from './Home.scss'

class Home extends Component {
  render() {
    return (
      <h2 className={styles['title']}>
        Library
      </h2>
    )
  }
}

export default Home