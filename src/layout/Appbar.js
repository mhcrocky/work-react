import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    ThemeProvider
} from '@material-ui/core';
import * as theme from './config/theme'

const useStyles = makeStyles((appbarTheme) => ({
    title: {
        width:'100%',
        color:'red'
    },
    nabButton:{
        padding:'0px 20px',
    }
}));

const Appbar = (props) => {

    const classes = useStyles()
    return (
        <ThemeProvider theme={theme.appbar}>
            <AppBar position="static">
                <Toolbar>
                    <div style={{ display:'contents' }}>    
                        <Button className={classes.nabButton} size={'large'} color={'secondary'} >Dashboard</Button>
                        <Button className={classes.nabButton} size={'large'} color={'secondary'} >Dashboard</Button>
                    </div>
                    <Typography variant="h6" className={classes.title}>{props.title}</Typography>
                    <Button variant={''} color={'danger'}>Logout</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
export default Appbar