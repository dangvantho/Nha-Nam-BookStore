import {makeStyles} from '@material-ui/core/styles'
const useStyles= makeStyles(theme=>({
    root:{
        
        border:'5px ',
        borderRadius:5,
        padding: '30px 0',
        overflowY:'auto',
    },
    container:{
        border:'5px solid rgba(255,255,255,.24) ',
        borderRadius:5,
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.up('sm')]:{
            width: '900px'
        },
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        }
    },
    title:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        background:'#fff',
    },
    totalPrice:{
        color: 'red',
        fontWeight:'bold',
    },
    link:{
        color:'#666',
        background:'#eee',
        padding: '5px 12px',
        borderRadius: 6,
        textDecoration:'none',
        fontWeight:'600',
        fontSize:'16px',
        '&:hover':{
            background:'#ccc'
        },
    },
    buyNow:{
        background:'green',
        lineHeight:'31px',
        padding:'0 16px',
        borderRadius: 6,
        color:'#fff',
        cursor:'pointer',
    },
    noItem:{
        background:'#fff',
        padding: '12px',
    },
}))
export default useStyles