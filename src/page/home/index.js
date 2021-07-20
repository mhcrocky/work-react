import { lazy } from 'react'

// import ErrorPage from './error'

export const routes = [
    {
        path: '/about',
        component: lazy(() => import('./aboutUs')),
    },{
        path: '/member',
        component: lazy(() => import('./members')),
    },{
        path: '/project',
        component: lazy(() => import('./projects')),
    },{
        path: '/',
        component: lazy(() => import('./home')),
    }
]

