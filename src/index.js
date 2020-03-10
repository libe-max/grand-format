import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import config from './config.json'

ReactDOM.render(<App {...config} />, document.getElementById('root'))
