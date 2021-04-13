import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(theme=>({
    root:{},
    boxTop:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        marginBottom:12,
    },
    intro:{
        whiteSpace:'pre-line',
        fontSize:16,
        lineHeight:1.5,
    },
    imgBook:{
        maxWidth:'100%',
        height:300,
        objectFit:'contain',
    },
    inforMain:{
        [theme.breakpoints.up('sm')]:{
            borderBottom:'3px solid #ccc',
        }
    },
    title:{
        marginTop:0,
        paddingBottom: 16,
        borderBottom:'3px solid #ccc',
        fontWeight: 'bold',
        color: 'green',
    },
    infor:{
        padding:0,
        marginTop: 0,
        marginBottom:20,
        listStyle:'none',
        
    },
    peaceOfBook:{
        marginBottom:4,
        padding:'5px 0',
        color:'#333',
        fontSize:12,
        lineHeight:'20px',
        borderBottom:'1px solid #999',
        '&:before':{
            content:"'*'",
            paddingRight: 6,
            lineHeight:'20px',
        },
        '& span':{
            fontWeight:'bold',
        },
    },
    buyBook:{
        paddingLeft:35,
        color:'white',
        [theme.breakpoints.down('xs')]:{
            paddingLeft:0,
        }
    },
    oldPrice:{
        background:'#999',
        fontSize:12,
        padding: 5,
        borderRadius:4,
        '& span':{
            textDecoration:'line-through',
        },
    },
    salePrice:{
        background:'#0f5731',
        fontSize:14,
        padding:'8px 5px',
        marginTop: 20,
        borderRadius:4,
        '& span':{
            fontSize:20,
            fontWeight: 'bold',
        }
    },
    countInput:{
        border:'none',
        lineHeight: '30px',
        width: 40,
        textAlign:'center',
        fontSize: 14,
        color:'red',
        outline:'none',
    },
    imageButton:{
        marginBottom:2,
        maxWidth: '100%',
        cursor:'pointer',
        paddingRight:8,
        objectFit:'cover',
        objectPosition:'center',
        display:'block',
    },
    sameKindOfBook:{
        marginTop:20,
    },
}))
export default useStyles