import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as AppRouter, Route, Switch ,Redirect} from 'react-router-dom'

import {Routes} from './routes'
import {isUserLoggedIn} from '../util/auth'
import {auth } from '../firebase/index'

const HomePage = lazy(()=>import('../page/home/index'))

const Router = () => {

    const [user,setUser] = useState(null)
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


    useEffect(()=>{
        console.log(user)
        // const project = database.ref('/project');
        // project.on('value', (snapshot) => {
        //     const todos = snapshot.val();
        //     const projectList = [];
        //     for (let id in todos) {
        //       projectList.push({ id, ...todos[id] });
        //     }
        //     console.log(projectList)
        // });
        auth.onAuthStateChanged(()=>{
            setUser(auth.currentUser)
            // if(auth.currentUser){
            //     // auth.currentUser.
            // }
        })
    });
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