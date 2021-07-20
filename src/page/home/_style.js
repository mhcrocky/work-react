import { makeStyles }   from "@material-ui/core"
import bgDefault        from '../../img/about.jpg'
import bgHomeAbout      from '../../img/bg_1.jpg'
import bgHomeProject    from '../../img/project.jpg'
import bgHomeMember     from '../../img/bg_3.jpg'

const useStyles =  makeStyles((theme)=>({
    homeRoot:{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgDefault})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        transition: 'all 1s ease-in-out',
        'div':{
            display:'none'
        }
    },
    homeMain:{
        position : 'relative',
        display : 'flex',
        overflow : 'auto',
        height : '100vh',
        width : '100%',
        alignItems : 'center',
        transition : 'all 1s ease-in-out',
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
        padding: '0 20px',
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
            height: 'calc(100% - 110px)',
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
            borderRadius: '5px',
            border: '1px solid white',
            backgroundColor: 'rgba(255,255,255,.7)',
            color: 'black',
            padding: '10px',
            minWidth: '100px',
            width: '100%',
            display:'flex',
            height: '0px',
            '& text':{
                height: 'calc(100% - 30px)',
            },
            '& pre':{
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
        '& .avartar':{
            transition: 'all 1s ease-in-out',
            height: '230px',
            width: '230px',
            margin: '5px 10px',
            position: 'relative',
            top:'100px',
        },
        '&:hover .avartar':{
            height: '100px',
            width: '100px',
            top:'0px'
        },
        '&:hover .desc':{
            height:'calc(100% - 175px)'
        },
    },
    homeAbout:{
        backgroundImage: `url(${bgHomeAbout})`
    },
    homeProject:{
        backgroundImage: `url(${bgHomeProject})`
    },
    homeMember:{
        backgroundImage: `url(${bgHomeMember})`
    },
    fixedNav:{
        position: 'fixed',
        zIndex: '1',
        right: '20px',
        top: '20px',
    }
}))
export default useStyles