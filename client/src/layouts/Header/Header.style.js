import {makeStyles} from '@material-ui/core/styles'
const headerStyle=makeStyles((theme)=>({
    root: {
      flexGrow:1,
    },
    container:{
        [theme.breakpoints.up('xs')]: {
            width:'98%',
        },
        [theme.breakpoints.up('md')]: {
            width:'1000px',
        },
        margin: theme.spacing(0,'auto'),
    },
    topHeader:{
        backgroundColor:'rgba(216,216,216,.6)',
    },
    modal:{
        display:'flex',
        justifyContent:'center',
        marginTop: 32,
    },
}))
export default headerStyle