import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './HeaderBar.scss'
import $ from 'JQuery'

export default class HeaderBar extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link
            to={{ pathname: `/${this.props.user}` }}
            className={styles['brand']}>
            Library
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: `/${this.props.user}/app` }}
                className={styles['menu__link']}>
                <span>
                  BOOK
                </span>
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{ pathname: `/${this.props.user}/digital` }}
                className={styles['menu__link']}>
                <span>
                  DIGITAL MEDIA
                </span>
              </Link>
            </li>
                        <li className={styles['menu__item']}>
              <Link
                to={{ pathname: `/${this.props.user}/query` }}
                className={styles['menu__link']}>
                <span>
                  Query
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}