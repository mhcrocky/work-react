import { Suspense, lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch ,Redirect} from 'react-router-dom'

import {Routes} from './routes'
import {isUserLoggedIn} from '../redux/util'
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

    const FinalRoute = props => {
        const route = props.route
        console.log(route)
        // let action, resource
        // if (route.meta) {
        //     action = route.meta.action ? route.meta.action : null
        //     resource = route.meta.resource ? route.meta.resource : null
        // }
        if (route.type ==='UN_AUTH'&&isUserLoggedIn()) {
            return <Redirect to='/' />
        } else if (route.type ==='AUTH' && !isUserLoggedIn()) {
            return <Redirect to='/login' />
        }
        return <route.component {...props} />
    }

    const ResolveRoutes = () => {
        const { routes, paths } = routesAndPaths()
        const routerProps = {}

        return(
            <Route path={paths} >
                <Switch>
                {routes.map(route => {
                    return (
                    <Route key={route.path} path={route.path} exact={route.exact === true} render={props => {
                        Object.assign(routerProps, { ...props, meta: route.meta })
                        return (
                        <Suspense fallback={null}>
                            <FinalRoute route={route} {...props} />
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