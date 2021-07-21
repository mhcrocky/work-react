import { useState }     from 'react'
import { useHistory }   from 'react-router-dom'
import { Fab}           from '@material-ui/core'
import { 
    KeyboardArrowUp,
    KeyboardArrowDown } from '@material-ui/icons'

import {homeStyles} from './_style'

import logo         from '../../img/logo.png'
import page2Image   from '../../img/bg_2.jpg'
import page3Image   from '../../img/bg_3.jpg'

import Card         from '../../layout/card'
import FixedNav     from '../../layout/fixedNav'
import {auth}       from '../../firebase'

const Home = () => {
    let     history = useHistory()
    const   goToPage = (route) => {
        history.push(route)
    }
        
    const   classes = homeStyles()

    const   [scroll,setScroll] = useState(0)
    
    const   pieces = [{
            name:'about',
            desc:'sadsadasd',
            class:'hue-rotate',
            // bg:logo
        },{
            name:'project',
            desc:'About Me!!',
            class:'opacity',
            // bg:logo
        },{
            name:'member',
            desc:'About Me!!',
            class:'sepia',
            // bg:logo
        }
    ]   

    const   pieces_page2 = [{
        name:'fdsfasf',
        desc:'sadsadasd',
        class:'hue-rotate',
        // bg:logo
    },{
        name:'cocoa',
        desc:'About Me!!',
        class:'opacity',
        // bg:logo
    },{
        name:'lemon',
        desc:'About Me!!',
        class:'sepia',
        // bg:logo
    }]
    const   pieces_page3 = [{
        name:'cho',
        desc:'sadsadasd',
        class:'hue-rotate',
        // bg:logo
    },{
        name:'dsf',
        desc:'About Me!!',
        class:'opacity',
        // bg:logo
    },{
        name:'dsfsdf',
        desc:'About Me!!',
        class:'sepia',
        // bg:logo
    }]
    const   ScrollButton = () => {
        return (
        <>
            <Fab className={classes.scrollDownBtn} onClick={()=>setScroll(((scroll-1)<1)?0:scroll-1)}>
                <KeyboardArrowUp  />
            </Fab>
            <Fab className={classes.scrollUpBtn} onClick={()=>setScroll(((scroll+1)>2)?2:scroll+1)}>
                <KeyboardArrowDown  />
            </Fab>
        </>
        )
    }

    const   HomePiece = (props) => {
        const data = props.data
        return(
            <div className={`${classes.homePiece} ${data.class}`} >
                <div className="title">
                    <span className="text">{data.name}</span>
                </div>
                <div className="desc" onClick={()=>goToPage(`/${data.name}`)}>
                    <Card className={'w-100'} bg={data.bg}>
                        {data.desc}
                    </Card>
                </div>
            </div>
        )
    }

    const   Page1 = () => {
        return (
        <div className={`${scroll?'h-0 w-0':''}`}>
            <div className={classes.homeRoot}>
                <div className={`homeMain ${classes.homeMain}`}>
                    {pieces.map((piece,index)=>(
                        <HomePiece data={piece} key={index}/>
                    ))}
                    <div className={`${classes.homePiece} ${classes.homeCore}`}>
                        <div style={{ display:'block',height:'100%',width:'100%' }}>
                            <div className="title">
                                <img alt="" src={logo} className="avatar" />
                            </div>
                            <div className="desc">
                                <code>
                                                                        
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    const   Page2 = () => {
        return(
        <div className={` ${(scroll!==1)?'h-0 w-0 hidden':'h-screen w-100'}`}>
            <div className={classes.homeRoot} style={{ backgroundImage:`url(${page2Image})` }}>
                <div className={`homeMain ${classes.homeMain}`}>
                    {pieces_page2.map((piece,index)=>(
                        <HomePiece data={piece} key={index}/>
                    ))}
                </div>
            </div>
        </div>
        )
    }
    const   Page3 = () => {
        return(
        <div className={` ${(scroll!==2)?'h-0 w-0 hidden':'h-screen w-100'}`}>
            <div className={classes.homeRoot} style={{ backgroundImage:`url(${page3Image})` }}>
                <div className={`homeMain ${classes.homeMain}`}>
                    {pieces_page3.map((piece,index)=>(
                        <HomePiece data={piece} key={index}/>
                    ))}
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            {auth.currentUser?(<ScrollButton />):''}        
            <FixedNav />
            <Page1 />
            {auth.currentUser?(<><Page2 /><Page3 /></>):''} 
        </div>
  )
}

export default Home