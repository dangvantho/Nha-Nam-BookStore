import {makeStyles} from '@material-ui/core/styles'
import headerBg from '../../assets/images/headerbg.png'
import mobileHeader from '../../assets/images/slidebottombg.png'
const headerStyle=makeStyles((theme)=>({
    root: {
      flexGrow:1,
      backgroundImage:`url(${headerBg})`,
      [theme.breakpoints.down('xs')]:{
          backgroundImage:`url(${mobileHeader})`
      },
    },
    container:{
        [theme.breakpoints.up('xs')]: {
            width:'98%',
        },
        [theme.breakpoints.up('md')]: {
            width:'100%',
            maxWidth: '1000px',
        },
        margin: theme.spacing(0,'auto'),
    },
    topHeader:{
        backgroundColor:'rgba(216,216,216,.6)',
    },
    mainHeader:{
        display:'flex',
        alignItems:'flex-end',
        [theme.breakpoints.up('sm')]:{
            height: 150,
        },
    },
    navbar:{
        backgroundColor:'#046306',
    }
}))
export default headerStyle