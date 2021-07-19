import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'

import {ThemeProvider} from '@material-ui/core/styles'
import * as theme from './layout/config/theme'
import reportWebVitals from './util/reportWebVitals'

const Router  = lazy(()=>import('./router/'))

ReactDOM.render(
    <ThemeProvider theme={theme.main}>
        <Suspense fallback={<>Loading</>}>
            <Router />
        </Suspense>
    </ThemeProvider>,document.getElementById('root')
)
reportWebVitals()
