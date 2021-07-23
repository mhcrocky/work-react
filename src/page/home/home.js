import { useState } from 'react';
import { Button, Fab } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp} from '@material-ui/icons';

import {HomePiece,FixedNav} from '../_layout'
import './style.scss'

import logo from '../../img/logo.png'

const Index = () => {
    const pieces = [{
        title:'About Us',
        className:'about-us'
    },{
        title:'projects',
        className:'projects'
    },{
        title:'Members',
        className:'members'
    }]
    const   [scroll,setScroll] = useState(0)

    const   ScrollButton = () => {
        return (
        <>
            <Fab className={'btn-scroll scroll-up'} onClick={()=>setScroll(((scroll-1)<1)?0:scroll-1)}>
                <KeyboardArrowUp  />
            </Fab>
            <Fab className={'btn-scroll scroll-down'} onClick={()=>setScroll(((scroll+1)>2)?2:scroll+1)}>
                <KeyboardArrowDown  />
            </Fab>
        </>
        )
    }
    return (
    <div>
        <FixedNav />
        <ScrollButton />
        <div className="home">
            <div className="wrapper">
                {pieces.map((piece,index)=>(
                    <HomePiece title={piece.title} className={piece.className} key={index}>
                        <Button>{piece.title}</Button>
                    </HomePiece>
                ))}
                <div className="piece main" >
                <div style={{ display:'block',height:'100%',width:'100%' }}>
                            <div className="avatar">
                                <div className="img">                                
                                    <img alt="" src={logo} className="" />
                                </div>
                                <div className="desc-main">
                                    <code>
                                        Welcome MGCOM!!!
                                    </code>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index