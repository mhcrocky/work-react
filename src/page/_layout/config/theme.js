import { createTheme } from "@material-ui/core"

const appbar = createTheme({
    palette: {
        secondary: {
            main: '#fff',
        },
    },
    props:{
        margin: 'dense',
    }
})

const main = createTheme({
    palette:{
        secondary: {
            main:'#fff'
        }
    },
    props:{
        MuiButton:{
            label:{
                color:'#000'
            },
            style:{
                borderRadius:'99px'
            }
        },
        MuiOutlinedInput:{
            style:{
                borderRadius:'99px'
            }
        },
        MuiInputLabel:{
            style:{
                paddingLeft:'10px'
            }
        }
    }
})

export {
    main,
    appbar
}