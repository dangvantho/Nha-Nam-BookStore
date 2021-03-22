import {makeStyles} from '@material-ui/core/styles'
import headerBg from '../../assets/images/headerbg.png'
const headerStyle=makeStyles((theme)=>({
    root: {
      flexGrow:1,
      backgroundImage:`url(${headerBg})`
    },
    container:{
        [theme.breakpoints.up('xs')]: {
            width:'98%',
        },
        [theme.breakpoints.up('1000px')]: {
            width:'1000px',
        },
        margin: theme.spacing(0,'auto'),
    },
    topHeader:{
        backgroundColor:'rgba(216,216,216,.6)',
    },
    mainHeader:{
        display:'flex',
        alignItems:'flex-end',
        height: 150,
    },
    modal:{
        display:'flex',
        justifyContent:'center',
        marginTop: 32,
    },
}))
export default headerStyle