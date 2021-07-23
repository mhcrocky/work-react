import { lazy } from 'react'

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
    }
]

