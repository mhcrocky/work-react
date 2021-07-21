import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import {isUserLoggedIn} from '../util/auth'
import {homeStyles} from '../page/home/_style'
import * as auth from "../firebase/auth"

const FixedNav = () => {
    let classes = homeStyles()
    let history = useHistory()
    const goToPage = (route) => {
        history.push(route)
    }
    return (
        <div className={classes.fixedNav}>
            {(isUserLoggedIn())?(
            <>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/user/dashboard')}>Dashboard</Button>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>auth.logOut()} >Logout</Button>
            </>
            ):(<>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/login')} >Login </Button>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/register')} >Register </Button>
            </>)}
        </div>
    )
}

export default FixedNav