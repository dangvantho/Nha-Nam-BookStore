import {makeStyles} from '@material-ui/core/styles'
import slideBottomBg from '../../assets/images/slidebottombg.png'


const useStyles=makeStyles(theme=>({
    root:{
        display: 'none',
        paddingTop: '20%',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        flexBasis:'100%',
        // overflow:'hidden',
        position:'relative',
    },
    show:{
        display:'block'
    },
    bottom:{
        position: 'relative',
    },
    step:{
        height: 13,
        backgroundImage:`url(${slideBottomBg})`,
        position: 'absolute',
        bottom:0,
        left:0,
        right:0,
        margin:0,
        padding:0,
        listStyle:'none',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    dot:{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: '#99be99',
        display:'inline-block',
        marginLeft: 3,
        cursor:'pointer',
    },
    dotActive:{
        backgroundColor: 'white',
    },
}))
export default useStyles