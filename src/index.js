import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

const Router  = lazy(()=>import('./router/'))

ReactDOM.render(
  <Suspense fallback={<>Loading</>}>
    <Router />
  </Suspense>
  ,document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
