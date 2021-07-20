import { Route, Switch } from "react-router-dom"

const At = () => {
    return (
        <div>
            
            <Switch>
                <Route path={'/user/main'}>
                    main page
                </Route>
                <Route path={'/user/test'}>
                    test page
                </Route>
            </Switch>
        </div>
    )
}
export default At