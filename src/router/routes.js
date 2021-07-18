import { lazy } from 'react'
const Routes = [
    {
      path: '/',
      component: lazy(() => import('../page/home/index'))
    }
]

export {Routes}