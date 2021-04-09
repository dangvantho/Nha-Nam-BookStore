import {makeStyles} from '@material-ui/core/styles'
import lbcenter from '../../assets/images/lbcenter.png'
import lbleft from '../../assets/images/lbleft.png'
import lbright from '../../assets/images/lbright.png'
import bgBox from '../../assets/images/headerbg.png'
import bookCase from '../../assets/images/book_bg.png'

const useStyles=makeStyles(theme=>({
    root:{
        padding: '0 10px',
        [theme.breakpoints.up('sm')]:{
            padding: '45px 15px 0 15px',
            backgroundImage:`url(${bookCase})`,
            backgroundRepeat:'repeat-y',
        },
        

    },
    pageTitle:{
        padding: '25px 0 30px 0',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    link:{
        width:285,
        height:83,
        backgroundImage:`url(${lbcenter})`,
        backgroundimgBook:'cover',
        backgroundPosition:'center top',
        position : 'relative',
        '&::before':{
            content:'""',
            display:'block',
            height:83,
            width:32,
            backgroundImage:`url(${lbleft})`,
            backgroundimgBook:'contain',
            backgroundRepeat:'no-repeat',
            position:'absolute',
            top:0,
            left:-31,
        },
        '&::after':{
            content:'""',
            display:'block',
            height:83,
            width:32,
            backgroundImage:`url(${lbright})`,
            backgroundimgBook:'contain',
            backgroundColor:'rgba(0,0,0,0)',
            backgroundRepeat:'no-repeat',
            position:'absolute',
            top:0,
            right:-32,
        },
    },
    imageTitle:{
        position:'absolute',
        bottom:32,
        left: '50%',
        transform:'translate(-50%)',
        color: 'white',
        textTransform:'uppercase',
        fontimgBook:20,
        width: 242,
        fontFamily: 'Times New Roman',
    },
    bookList:{
        display:'flex',
        flexWrap:'wrap',
        listStyleType:'none',
        margin:0,
        [theme.breakpoints.down('xs')]:{
            padding: '0 12px',
        },
    },
    listItem:{
        position:'relative',
        paddingBottom:83,
        top: -47,
        paddingRight: 24,
        [theme.breakpoints.down('xs')]:{
            width: '46%',
            textAlign:'center',
            top:0,
            margin:0,
            padding:'5px 2%',
            height:'auto',
        },
    },
    book:{
        display:'block',
        height:226,
        position:'relative',
        [theme.breakpoints.down('xs')]:{
            height: 'auto',
        },
        '&:hover $boxInfor': {
            display: 'block',
        },
    },
    imgBook:{
        height:'100%',
        maxHeight:'100%',
        maxWidth:'100%',
        [theme.breakpoints.down('xs')]:{
            height: 'auto',
            maxHeight:'100%',
        },
    },
    boxInfor:{
        display:'none',
        position:'absolute',
        top: 'calc(50%)',
        right: 'calc(-20%)',
        width: 240,
        zIndex: 2,
        backgroundImage: `url(${bgBox})`,
        backgroundPosition:'center',
        border:'5px solid white',
        borderRight:'0 solid transparent',
        borderRadius: 4,
        boxShadow:'0 4px 5px rgb(51 51 51 / 57%)',
        '&:before':{
            content:'""',
            position:'absolute',
            top:-13,
            left: 'calc(24%)',
            width:0,
            height:0,
            borderRight:'6px solid transparent',
            borderLeft:'6px solid white',
            borderBottom:'6px solid white',
            borderTop:'6px solid transparent',
        },
    },
    headerBoxInfor:{
        position:'relative',
        backgroundColor:'#0f5731',
        color:'white',
        fontSize:13,
        lineHeight:'25px',
        padding:'0 6px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
    },
    bookInfor:{
        fontSize:13,
        color: 'black',
        padding:0,
        margin:'5px 0 0 28px',
    },
    bookPrice:{
        margin: '12px 11px',
        color:'#0f5731',
        fontSize: 24,

    },
    btn:{
        backgroundColor:'#0f5731',
        border:'1px solid black',
        color:'white',
        padding:'4px 9px',
        marginTop:12,
        '&:hover':{
            color:'black',
            backgroundColor:'#0f5731',
        }
    }
}))
export default useStyles