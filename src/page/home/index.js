import { Button } from '@material-ui/core'
import './index.scss'

const Index = () => {
  return (
    <div>
        <div className="fixed-nav">
            <Button >Login </Button>
            <Button >Register </Button>
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