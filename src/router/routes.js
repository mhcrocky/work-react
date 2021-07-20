import { lazy } from 'react'
const Routes = [
    {
      path: '/login/',
      type:'UN_AUTH',
      component: lazy(() => import('../page/auth/login'))
    },{
      path: '/register/',
      type:'UN_AUTH',
      component: lazy(() => import('../page/auth/register'))
    },{
      path: '/user/',
      type:'AUTH',
      component: lazy(() => import('../page/user/_index')),
    },{
      path: '/admin/',
      type:'ADMIN',
      component: lazy(() => import('../page/user/_index')),
    }
]

export {Routes}