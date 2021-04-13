import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(theme=>({
    root:{
        display: 'flex',
        background:'#fff',
        padding:'12px 0',
        borderBottom:'2px solid #ccc',
    },
    
    imgBook:{
        flexBasis:'90px',
        height: 90,
        paddingRight: 10,
        maxWidth:'100%',
        objectFit:'contain',
        objectPosition:'center',
    },
    bookName:{
        flexGrow:'1',
    },
    btnHiddenSmall:{
        [theme.breakpoints.down('xs')]:{
            display:'none',
        }
    },
    btnHiddenLarge:{
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    },
    btn:{
        background:'#eee',
        outline:'none',
        cursor:'pointer',
        height: '25px',
        padding:'0 16px',
        border:'1px solid #ccc',
        textAlign:'center',
    },
    count:{
        width: 20,
        height: '24px',
        padding:'0 8px',
        display:'inline-block',
        textAlign:'center',
    },
    price:{
        margin: '0 12px 0 16px',
    },
    link:{
        color:'blue',
        paddingRight:6,
        textDecoration:'none',
        '&:hover':{
            textDecoration:'underline',
        }
    },
    deleteCart:{
        color:'blue',
        cursor:'pointer',
        paddingRight:12,
        '&:hover':{
            textDecoration:'underline',
        }
    },
    
}))
export default useStyles