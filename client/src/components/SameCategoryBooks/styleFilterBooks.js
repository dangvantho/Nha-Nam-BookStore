import { makeStyles } from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    root:{
        fontSize: 16,
        color:'#fff',
        fontWeight:'bold',
        position:'relative',
    },
    title:{
        marginTop:50,
        position:'relative',
        borderBottom:'4px solid #cacbcc',
        '& span':{
            position:'absolute',
            background:'#0f5731',
            padding:'5px 13px',
            top: -28,
        },
    },
    list:{
        listStyle:'none',
        display:'flex',
        flexWrap:'nowrap',
        transition:'transform 1s ease-in-out',
        padding:0,
    },
    item:{
        height:190,
        width:130,
        margin:10,
    },
    imageBook:{
        maxHeight:'100%',
        maxWidth:'100%',
    },
    moveBtn:{
        position:'absolute',
        top:'50%',
        transform:'translateY(-50%)',
        width:20,
        height:20,
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#0f5731',
        cursor:'pointer',
    },
}))
export default useStyles