import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'

const rootEl = document.getElementById('root')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  // เมื่อไหร่ก็ตามที่โค๊ดภายใต้ Root รวมถึง subcomponent ภายใต้ Root
  // มีการเปลี่ยนแปลง ให้ทำ HMR ด้วย Root ตัวใหม่
  // ที่เราตั้งชื่อให้ว่า NextRootApp
  module.hot.accept('./Root', () => {
    const NextRootApp = require('./Root').default
    
    render(
      <AppContainer>
         <NextRootApp />
      </AppContainer>,
      rootEl
    );
  });
}