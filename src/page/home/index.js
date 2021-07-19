import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

import FixedNav from '../../layout/fixedNav';

const Index = () => {
    let history = useHistory()
    const goToPage = (route) => {
        history.push(route)
    }
    return (
    <div className={'homePage'}>
        <FixedNav />
        <div className="background">
            <div className="elementsWrapper">
                <div className="piece about-us" >
                    <div className="title">
                        <span className="text">About Us</span>
                    </div>
                    <div className="desc">
                        <div>
                            
                        <Button variant={'contained'} color={'primary'} onClick={()=>goToPage('/aboutus')} >About Us</Button>
                        </div>
                    </div>
                </div>
                <div className="piece projects" >
                    <div className="title">
                        <span className="text">Projects</span>
                    </div>
                    <div className="desc">
                        <Button variant={'contained'} color={'primary'} onClick={()=>goToPage('/projects')} >Projects</Button>
                    </div>
                </div>
                <div className="piece members" >
                    <div className="title">
                        <span className="text">Members</span>
                    </div>
                    <div className="desc">
                        <Button variant={'contained'} color={'primary'} onClick={()=>goToPage('/members')} >Members</Button>
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