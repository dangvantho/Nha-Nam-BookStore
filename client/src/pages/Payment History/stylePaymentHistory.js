import {makeStyles} from '@material-ui/core/styles'
import bg from '../../assets/images/headerbg.png'

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        minHeight: 300,
        padding:'20px',
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
       background:'#fff'
    },
    inputSubmit:{
        border:'none',
        outline:'none',
        padding:'8px 12px',
        background:'green',
        borderRadius: 4,
        color:'#fff',
        cursor:'pointer',
        fontSize:16,
    },
    table:{
        '& table, tr, td, th':{
            border:'1px solid #ccc',
            fontWeight:'600',
            fontSize:16,
            textAlign:'center',
        },
        '& table':{
            width:'100%',
            borderCollapse:'collapse',
        },
        marginTop: 30,
    }
}))
export default useStyles