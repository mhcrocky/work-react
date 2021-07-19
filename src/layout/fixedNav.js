import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'
import {isUserLoggedIn} from '../util/auth'

import {logOut} from "../firebase/index";

const FixedNav = () => {
    let history = useHistory()
    const goToPage = (route) => {
        history.push(route)
    }
    return (
        <div className="fixed-nav">
            {(isUserLoggedIn())?(
            <>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/dashboard')}>Dashboard</Button>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>logOut()} >Logout</Button>
            </>
            ):(<>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/login')} >Login </Button>
                <Button className={'text-black'} variant={'outlined'} color={'secondary'} onClick={()=>goToPage('/register')} >Register </Button>
            </>)}
        </div>
    )
}

export default FixedNav