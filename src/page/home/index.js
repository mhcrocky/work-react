import { useHistory } from 'react-router-dom'

import FixedNav from '../../layout/fixedNav';
import { useState } from 'react';
import { useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import * as auth from '../../firebase/auth'
import defaultImage from '../../img/about.jpg'
const pieces = [
    {
        name:'about',
        desc:'About Me!!'
    },{
        name:'project',
        desc:'About Me!!'
    },{
        name:'member',
        desc:'About Me!!'
    }
]

const Index = () => {
    const [hover,setHover]  = useState(false)
    let history = useHistory()
    const goToPage = (route) => {
        console.log(hover)
        history.push(route)
    }
    useEffect(()=>{
        console.log(hover)
    })
    const HomePiece = (props) => {
        return(
            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={`piece ${props.name}`} >
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
        (<div className={(hover?'profile-lg':'profile flex')}>
            <Avatar alt="" src={(user.photoURL?user.photoURL:defaultImage)} className="avartar" />
            <div className={(hover?'relative top-12 text-center':'relative top-12')} >
                    {(user?user.displayName:'')}
            </div>
        </div>):<div className="profile"></div>)
    }
    return (
    <div className={'homePage'}>
        <FixedNav />
        <div className="background">
            <div className="elementsWrapper">
                {pieces.map((piece,index)=>(
                    <HomePiece name={piece.name} desc={piece.desc} key={index}/>
                ))}
                <div className="main">
                    <div style={{ display:'block',height:'100%',width:'100%' }}>
                        <Profile />
                        <div className={( hover?'desc-sm opacity-0':'desc opacity-100' )}>
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