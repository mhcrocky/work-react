import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './index.scss'
import {isUserLoggedIn} from '../../redux/util'
import {logOut} from "../../firebase/index";

const Index = () => {
    let history = useHistory()
    const goToPage = (route) => {
        history.push(route)
    }
    return (
    <div>
        <div className="fixed-nav">
            {(isUserLoggedIn())?(
            <>
                <Button onClick={()=>goToPage('/dashboard')}>Dashboard</Button>
                <Button onClick={()=>logOut()} >Logout</Button>
            </>
            ):(<>
                <Button onClick={()=>goToPage('login')} >Login </Button>
                <Button onClick={()=>goToPage('register')} >Register </Button>
            </>)}
        </div>
        <div className="background">
            <div className="elementsWrapper">
                <div className="piece about-us" >
                    <div className="title">
                        <span className="text">About Us</span>
                    </div>
                    <div className="desc">
                        <Button>About Us</Button>
                    </div>
                </div>
                <div className="piece projects" >
                    <div className="title">
                        <span className="text">Projects</span>
                    </div>
                    <div className="desc">
                        <Button >Projects</Button>
                    </div>
                </div>
                <div className="piece members" >
                    <div className="title">
                        <span className="text">Members</span>
                    </div>
                    <div className="desc">
                        <Button >Members</Button>
                    </div>
                </div>
                <div className="main">
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index