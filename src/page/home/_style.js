import { makeStyles }   from "@material-ui/core"
import bgDefault        from '../../img/bg_3.jpg'


const homeStyles =  makeStyles((theme)=>({
    homeRoot:{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgDefault})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        color: 'white',
        transition: 'all 1s ease-in-out',
    },
    homeMain:{
        position : 'relative',
        display : 'flex',
        overflow : 'hidden',
        height : '100vh',
        width : '100%',
        alignItems : 'center',
        transition : 'all 1s ease-in-out',
        '& .blur':{
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
        },
        '& .brightness':{
            backdropFilter: 'brightness(1.5)',
            WebkitBackdropFilter: 'brightness(1.5)',
        },
        '& .contrast':{
            backdropFilter: 'contrast(1.5)',
            WebkitBackdropFilter: 'contrast(1.5)',
        },
        '& .grayscale':{
            backdropFilter: 'grayscale(1)',
            WebkitBackdropFilter: 'grayscale(1)',
        },
        '& .hue-rotate':{
            backdropFilter: 'hue-rotate(240deg)',
            WebkitBackdropFilter: 'hue-rotate(240deg)',
            background:'rgba(53 ,222 ,206 ,.6)'
        },
        '& .invert':{
            backdropFilter: 'invert(0.7)',
            WebkitBackdropFilter: 'invert(0.7)',
        },
        '& .opacity':{
            backdropFilter: 'opacity(0.1)',
            WebkitBackdropFilter: 'opacity(0.1)',
        },
        '& .saturate':{
            backdropFilter: 'saturate(2)',
            WebkitBackdropFilter: 'saturate(2)',
        },
        '& .sepia':{
            background:'rgba:(200,17,14)',
            backdropFilter: 'sepia(90%)',
            WebkitBackdropFilter: 'sepia(90%)',
        },
    },
    homePiece:{
        position: 'relative',
        width: 'calc(100% / 6)',
        height: '100vh',
        transition: 'all 1s ease-in-out',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 10px',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minWidth: '20vw',
        '&:hover': {
            width: '200vw',
            alignItems: 'flex-end',
            
        },
        '&:hover .title':{
            transition: 'all 1s ease-in-out',
        },
        '&:hover .desc': {
            transition: 'all 1s ease-in-out',
            opacity: '1',
            height: '120vh',
            marginBottom:'10px'
        },
        '& .title':{
            width: '100%',
            padding: '20px',
            textAlign: 'center',
            display:'flex',
            flexFlow:'column'
        },
        '& .desc':{
            opacity: '0',
            justifyContent: 'center',
            transition: 'all 1s ease-in-out',
            // borderRadius: '5px',
            // border: '1px solid white',
            // backgroundColor: 'rgba(255,255,255,.7)',
            // color: 'black',
            padding: '10px',
            minWidth: '100px',
            width: '100%',
            display:'flex',
            height: '0px',
            color:'black',
            '& text':{
                height: 'calc(100% - 30px)',
            },
            '& code':{
                width:'100%'
            }
        },

        '& .text':{
            textTransform: 'uppercase',
            // -webkit-text-stroke: '1px black',
            // -webkit-text-fill-color: 'white',
            fontSize: '30px',
            transition: 'all 1s ease-in-out',
            '&:nth-child(2)': {
                paddingTop: '10px',
            }
        },
    },
    homeCore:{
        width: '100%',
        minWidth: '270px',
        height: '100vh',
        position: 'relative',
        padding: '10px',
        cursor:'default',
        '& .profile':{
            minHeight:'250px'
        },
        '& .avatar':{
            transition: 'all 1s ease-in-out',
            maxWidth:'25vw',
            position: 'relative',
            top:'50px',
        },
        
        '&:hover .avatar':{
            top:'0px!important'
        },
    },
    homeAbout:{
    },
    homeProject:{
    },
    homeMember:{
    },
    fixedNav:{
        position: 'fixed',
        zIndex: '1',
        right: '20px',
        top: '20px',
    },
    h0:{
        height:'0px!important'
    },
    scrollUpBtn:{
        position: 'fixed',
        zIndex:1,
        background: 'rgba(255,255,255,.3)',
        border: '1px solid white',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    scrollDownBtn:{
        position: 'fixed',
        bottom: theme.spacing(10),
        background: 'rgba(255,255,255,.3)',
        border: '1px solid white',
        zIndex:1,
        right: theme.spacing(2),
    }
}))

const projectStyles = makeStyles((theme)=>({

}))
export  {homeStyles,projectStyles}