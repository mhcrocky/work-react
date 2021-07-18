import { Suspense, lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

import {Routes} from './routes'

const HomePage = lazy(()=>import('../page/home/index'))

const Router = () => {
    const routesAndPaths = () => {
        const routes = []
        const paths = []

        if (Routes) {
            Routes.map(route => {
                routes.push(route)
                paths.push(route.path)
                return (<></>);
            })
        }
    
        return { routes, paths }
      }
    const ResolveRoutes = () => {
        const { routes, paths } = routesAndPaths()
        return(
            <Route path={paths} >
                <Switch>
                {routes.map(route => {
                    return (
                    <Route key={route.path} path={route.path} exact={route.exact === true} render={props => {
                        return (
                        <Suspense fallback={null}>
                            {route.component}
                        </Suspense>)}} 
                    />)
                })}
                </Switch>
            </Route>
        )
    }

    return (
        <AppRouter>
            <Switch>
                <Route exact path={'/'} render={props=>(<HomePage/>)} />
                {ResolveRoutes()}
                <Route exact path={'*'} render={props=>(<>404</>)} />
            </Switch>
        </AppRouter>

    )

}
export default Router