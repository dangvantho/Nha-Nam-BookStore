import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(theme=>({
    root:{
        height:40,
        color:'white',
        fontWeight:'500',
        fontSize: 14,
        textTransform:'uppercase',
    },
    textLink:{
        color:'white',
        textDecoration:'none',
        width:' 100%',
        textAlign: 'center',
        display:'block',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    subLink:{
        lineHeight:'1',
    },
    list:{
        padding:0,
        '&:hover':{
            backgroundColor: '#033801',
        },
        '&:hover $items':{
            display:'block',
        }
    },
    listItem:{
        justifyContent:'center',
        height: 40,
        padding:0,
    },
    items:{
        display:'none',
        position:'relative',
        zIndex:1,
        backgroundColor: '#033801',
        padding:0
    },
    item:{
        borderTop:'1px solid #026207',
        '&:hover':{
            backgroundColor:'#026207',
            cursor:'pointer',
        },
        padding:0,
    },
}))
export default useStyles