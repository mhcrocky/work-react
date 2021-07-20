import { lazy } from 'react'

export const routes =[
    {
        path: '/login/',
        type:'UN_AUTH',
        component: lazy(() => import('./login'))
    },{
        path: '/register/',
        type:'UN_AUTH',
        component: lazy(() => import('./register'))
    }
]