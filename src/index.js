import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/app.scss'
const $mountNode = $('<div class="container app"></div>').appendTo(document.body)
const render = (NewApp) => ReactDOM.render(<NewApp />, $mountNode[0])
render(App)