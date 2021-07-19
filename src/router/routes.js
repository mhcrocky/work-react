import { lazy } from 'react'
const Routes = [
    {
      path: '/login',
      type:'UN_AUTH',
      component: lazy(() => import('../page/auth/login'))
    },{
      path: '/register',
      type:'UN_AUTH',
      component: lazy(() => import('../page/auth/register'))
    }
]

export {Routes}