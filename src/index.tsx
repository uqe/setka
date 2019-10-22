import React from 'react'
import { render } from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

render(<App />, rootElement)

serviceWorker.register()
