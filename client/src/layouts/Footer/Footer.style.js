import {makeStyles} from '@material-ui/core/styles'
import shareIcon from '../../assets/images/shareicons2.png'
import footerBottom from '../../assets/images/slidebottombg.png'
const useStyles=makeStyles(theme=>({
    root:{
        maxWidth:1000,
        margin:'0 auto',
    },
    footerTop:{
        padding:'0 10px',
        [theme.breakpoints.down('md')]:{
            paddingRight: 0,
        },
        [theme.breakpoints.up('md')]:{
            padding: '20px 20px 20px 0',
        },
    },
    listLink:{
        listStyle:'none',
        padding:0,
        margin:0,
    },
    item:{
        padding:'10px 0 10px 0',
        borderBottom:'1px solid #c2c2c2',
    },
    link:{
        color:'#0f5731',
        textDecoration:'none',
        display:'flex',
        alignItems:'center',
        fontSize: 16,
    },
    avatar:{
        width: 16,
        height: 16,
        borderRadius: '50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:8,
        lineHeight:'14px',
        textAlign:'center',
        backgroundColor:'#0f5731',
        color:'white',
        marginRight:18,
    },
    icon:{
        fontSize:8,
        fontWeight:'bold',
    },
    social:{
        width:42,
        background:`url(${shareIcon})  no-repeat`,
        marginLeft:'auto',
        marginTop: 45,
        paddingRight: 8,
        display:'flex',
        alignItems:'center',
    },
    footerBottom:{
        borderTop:'4px solid rgba(216,216,216,.8)',
        background:`url(${footerBottom})`,
        textAlign:'center',
        fontSize:13,
        color:'white',
        paddingBottom: 8,
    },
}))
export default useStyles