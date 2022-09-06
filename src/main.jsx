import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
import App from './HelloWorlApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value= {4} />
  </React.StrictMode>
)
