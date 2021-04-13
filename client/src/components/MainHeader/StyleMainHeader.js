import {makeStyles} from '@material-ui/core/styles'
import logoMobile from '../../assets/images/logo-mobile.png'

const useStyles=makeStyles(theme=>({
    root:{
        position:'relative',
    },
    logo:{
        width: '100%',
        maxWidth: 500,
        position: 'absolute',
        bottom: theme.spacing(2),
        left: 0,
    },
    formInput:{
        width: 322,
        height: 30,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: 0,
    },
    input: {
        width: '298px',
        lineHeight: '30px',
        fontSize: 12,
        fontStyle:'italic',
        border: 0,
        outline:'none',
        padding: theme.spacing(0, 1.5),
    },
    searchIcon: {
        position:'absolute',
        right: 0,
        top: -7,
    },
    mobile:{
        display:'flex',
        alignItems:'center',
    },
    menuIcon:{
        color:'white',
    },
    logoMobile:{
        margin:'0 auto',
        height:50,
        width: 155,
        background:`url(${logoMobile}) no-repeat`,
    },
    collaps:{
        position:'absolute',
        top: '100%',
        right:'-1%',
        left:'-2%',
        zIndex:9,
    },
    dropMenu:{
        listStyle:'none',
        backgroundColor:'white',
        padding:'0 2%',
        margin: 0,
        
    },
    link:{
        color:'#0f5731',
        borderBottom:'1px dotted #ccc',
        padding:'5px 10px',
    },
    formInputMobile:{
        width: '100%',
        padding:'6px 2% 6px 0',
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
    },
    
}))


export default useStyles