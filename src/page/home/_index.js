import { useHistory } from 'react-router-dom'

import FixedNav from '../../layout/fixedNav';
import { useState } from 'react';
import { useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import * as auth from '../../firebase/auth';
import defaultImage from '../../img/about.jpg'
import useStyles from './_style';



const Index = () => {
    let history = useHistory()
    const classes = useStyles()

    const [hover,setHover]  = useState(false)

    useEffect(()=>{
        console.log(hover)
    })

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
    const goToPage = (route) => {
        console.log(hover)
        history.push(route)
    }
    const HomePiece = (props) => {
        return(
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={`${classes.homePiece} ${props.class}`} >
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
        (<div className="profile">
            <Avatar alt="" src={(user.photoURL?user.photoURL:defaultImage)} className="avartar" />
            <div className="relative pl-10" >
                    {(user?user.displayName:'')}
            </div>
        </div>):<div className="profile"></div>)
    }
    return (
    <div className={'homePage'}>
        <FixedNav />
        <div className={classes.homeRoot}>
            <div className={`homeMain ${classes.homeMain}`}>
                {pieces.map((piece,index)=>(
                    <HomePiece name={piece.name} desc={piece.desc} class={piece.class} key={index}/>
                ))}
                <div className={`${classes.homeCore}`}>
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

export default Index