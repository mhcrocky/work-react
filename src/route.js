import { lazy, Suspense, useState } from 'react'
import { BrowserRouter as AppRouter, Route, Switch ,Redirect} from 'react-router-dom'

// import * as Auth from './page/auth'
// import * as Home from './page/home'
// import * as Admin from './page/admin'
// import * as User from './page/user'

// import {isUserLoggedIn} from './util/auth'
import {auth } from './firebase/index'

// const ErrorPage = lazy(()=>import('./page/home/error'))
// const HomePage = lazy(()=>import('./page/home/home'))

const FinalRoute = props => {
    const route = props.route
    // if (route.type ==='UN_AUTH'&&isUserLoggedIn()) {
    //     return <Redirect to='/' />
    // } else if (route.type ==='AUTH' && !isUserLoggedIn()) {
    //     return <Redirect to='/login' />
    // }
    return (<route.component {...props} >
        {props.children??(
            <>{ResolveRoutes(props.children)}</>
        )}
    </route.component>)
}

const ResolveRoutes = (Routes) => {
    const routesAndPaths = (route_list) => {
        const routes = []
        const paths = []

        if (route_list) {
            route_list.map(route => {
                routes.push(route)
                paths.push(route.path)
                return (<></>)
            })
        }
    
        return { routes, paths }
    }
    const { routes, paths } = routesAndPaths(Routes)

    const routerProps = {}
    return(
        <Route path={paths}>
            <Switch>
            {routes.map(route => {
                return (
                <Route key={route.path} path={route.path} exact={route.exact === true} render={props => {
                    Object.assign(routerProps, { ...props, meta: route.meta })
                    return (
                    <Suspense fallback={route.spinner}>
                        <FinalRoute route={route} {...props} />
                    </Suspense>)}} 
                />)
            })}
            </Switch>
        </Route>
    )
}



const Render = () => {
    const [user,setUser] = useState(null)

    auth.onAuthStateChanged((user)=>{
        setUser(user)
    })

    return (
        <AppRouter>
            <Switch user={user}>
                {/* <Route exact path={'/'} render={props=>(<HomePage  {...props} />)} />
                {ResolveRoutes(Auth.routes)}
                {ResolveRoutes(User.routes)}
                {ResolveRoutes(Admin.routes)}
                {ResolveRoutes(Home.routes)}
                <Route exact path={'*'} render={props=>(<ErrorPage {...props}/>)} /> */}
            </Switch>
        </AppRouter>

    )
}
export  {Render,ResolveRoutes,FinalRoute}