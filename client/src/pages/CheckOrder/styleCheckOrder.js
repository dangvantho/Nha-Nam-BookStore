import {makeStyles} from '@material-ui/core/styles'
import bg from '../../assets/images/headerbg.png'

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        minHeight: 300,
        padding:'20px',
        [theme.breakpoints.down('sm')]:{
            padding:'24px 10px',
        },
    },
    title:{
        fontSize: 18 ,
        fontWeight: 'bold' ,
        marginTop: 30,
        textTransform:'uppercase',
        color:'#524643',
    },
    form:{
        display:'flex',
        alignItems:'center',
        marginTop: 25,
        
    },
    findInput:{
       [theme.breakpoints.up('sm')]:{
           width: 400,
           marginRight: 32,
       },
       width: '80%',
       background:'#fff',
       marginRight: 10,
    },
    inputSubmit:{
        border:'none',
        outline:'none',
        padding:'8px 12px',
        background:'green',
        borderRadius: 4,
        color:'#fff',
        cursor:'pointer',
    },
    stepper:{
        [theme.breakpoints.down('sm')]:{
            padding:'24px 0',
        },
    },
    infor:{
        color:'blue',
        marginTop: 20,
        '&:hover':{
            cursor:'pointer',
            textDecoration:'underline',
        },
    },
    modal:{
        display:'flex',
        justifyContent:'center',
        marginTop:35,
        overflowX:'hidden',
        overflowY:'auto',
    },
    detailsOrder:{
        position:'absolute',
        left: '50%',
        transform:'translateX(-50%)',
        border:'5px solid rgba(255,255,255,.24) ',
        borderRadius:5,
        [theme.breakpoints.up('sm')]:{
            width: '900px'
        },
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        }
    },
    iconClose:{
        color:'red'
    }
}))
export default useStyles