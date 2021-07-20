import { lazy } from 'react'
import * as Router from '../../route'
import { Switch} from 'react-router-dom'
const routes = [{
    path: '/user/member',
    component: lazy(() => import('./dashboard')),
},{
    path: '/user/',
    component: 'dsfdsf',
  }
]
const View = () => {
    return (
        <div>
            
            <Switch>
                {Router.ResolveRoutes(routes)}
            </Switch>
        </div>
    )
}
export  {View,routes}