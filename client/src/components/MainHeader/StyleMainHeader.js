import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(theme=>({
    root:{
        position:'relative',
    },
    logo:{
        width: '100%',
        maxWidth: 500,
        position: 'absolute',
        bottom: theme.spacing(2),
        left: 4,
    },
    formInput:{
        width: 322,
        height: 30,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: theme.spacing(2),
        right: 8,
    },
    input: {
        maxWidth: '298px',
        lineHeight: '30px',
        fontSize: 12,
        fontStyle:'italic',
        border: 0,
        outline:'none',
        padding: theme.spacing(0, 1.5),
    },
    searchIcon: {
        position:'absolute',
        right: -8,
        top: -7,
    }
}))


export default useStyles