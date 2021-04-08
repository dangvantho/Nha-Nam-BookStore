import {makeStyles} from '@material-ui/core/styles'
import containerBgImg from '../assets/images/bg-main.jpg'
const useStyles=makeStyles(theme=>({
    root:{
        backgroundImage: `url(${containerBgImg})`,
        paddingTop: 16,
        borderBottom: '8px solid rgba(216,216,216,.6)',
        minHeight: 300,
    },
    container:{
        [theme.breakpoints.up('xs')]:{
            width: '98%',
        },
        [theme.breakpoints.up('md')]:{
            width: '100%',
            maxWidth: 1000,
        },
        margin: '0 auto',
    },
    
}))
export default useStyles