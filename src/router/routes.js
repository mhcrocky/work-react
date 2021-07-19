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
    },{
      path: '/aboutus',
      component: lazy(() => import('../page/home/aboutUs'))
    },{
      path: '/members',
      component: lazy(() => import('../page/home/members'))
    },{
      path: '/projects',
      component: lazy(() => import('../page/home/projects'))
    },{
      path: '/dashboard',
      type:'AUTH',
      component: lazy(() => import('../page/user/dashboard'))
    }
]

export {Routes}