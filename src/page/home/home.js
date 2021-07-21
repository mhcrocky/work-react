import { useHistory } from 'react-router-dom'

import FixedNav from '../../layout/fixedNav'
import { useState } from 'react'
import { useEffect } from 'react'
import { Avatar, Button ,Fab} from '@material-ui/core'
import * as auth from '../../firebase/auth'
import defaultImage from '../../img/about.jpg'
import {homeStyles} from './_style'
import { KeyboardArrowUp,KeyboardArrowDown } from '@material-ui/icons'

const Home = () => {
    let history = useHistory()
    const goToPage = (route) => {
        history.push(route)
    }
        
    const classes = homeStyles()

    const [scroll,setScroll] = useState(0)
    
    const pieces = [{
            name:'about',
            desc:'About Me!!',
            class:classes.homeAbout
        },{
            name:'project',
            desc:'About Me!!',
            class:classes.homeProject
        },{
            name:'member',
            desc:'About Me!!',
            class:classes.homeMember
        }
    ]
    
    const HomePiece = (props) => {
        return(
            <div className={`${classes.homePiece} ${props.class}`} >
                <div className="title">
                    <span className="text">{props.name}</span>
                </div>
                <div className="desc" onClick={()=>goToPage(`/${props.name}`)}>
                    <pre>
                        {props.desc}
                    </pre>
                </div>
            </div>
        )
    }

    const Profile = () => {
        const user = auth.user()
        console.log()
        return (user?
        (<div className="title">
            <Avatar alt="" src={(user.photoURL?user.photoURL:defaultImage)} className="avartar" />
            <div className="relative pl-10 dname" >
                    {(user?user.displayName:'')}
            </div>
        </div>):<div className="title profile"></div>)
    }

    const Page1 = () => {
        return (
        <div className={`homePage ${scroll?'h-0 w-0':''}`}>
            <div className={classes.homeRoot}>
                <div className={`homeMain ${classes.homeMain}`}>
                    {pieces.map((piece,index)=>(
                        <HomePiece name={piece.name} desc={piece.desc} class={piece.class} key={index}/>
                    ))}
                    <div className={`${classes.homePiece} ${classes.homeCore}`}>
                        <div style={{ display:'block',height:'100%',width:'100%' }}>
                            <Profile />
                            <div className="desc">
                                <pre>
                                    This is HomePage!!!
                                </pre>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
    const Page2 = () => {
        return(
        <div className={` ${(scroll!==1)?'h-0 w-0 hidden':'h-screen w-100'}`}>
            page 2
        </div>
        )
    }
    const Page3 = () => {
        return(
        <div className={` ${(scroll!==2)?'h-0 w-0 hidden':'h-screen w-100'}`}>
            page 3
        </div>
        )
    }
    return (
    <div>
        <Fab className={classes.scrollDownBtn} onClick={()=>setScroll(((scroll-1)<1)?0:scroll-1)}>
            <KeyboardArrowUp  />
        </Fab>
        <Fab className={classes.scrollUpBtn} onClick={()=>setScroll(((scroll+1)>2)?2:scroll+1)}>
            <KeyboardArrowDown  />
        </Fab>
        <FixedNav />
        <Page1 />
        <Page2 />
        <Page3 />
        
    </div>
  )
}

export default Home