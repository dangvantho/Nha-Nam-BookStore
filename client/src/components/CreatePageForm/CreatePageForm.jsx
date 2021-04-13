import React from 'react';
import {connect, useDispatch} from 'react-redux'
import {createNotifyPage} from '../../store/reducers/notifyPages.reducer'
import {Box, makeStyles, TextField} from '@material-ui/core'

const useStyles=makeStyles(theme=>({
    root:{
        padding: '16px',
    },
    titleInput:{
        marginBottom: 16,
    },
    contentInput:{
        width: '100%',
    },
    submit:{
        border:'none',
        outline:'none',
        background:'green',
        padding: '8px 16px',
        marginTop: 12,
        color: '#fff',
        cursor:'pointer',
        borderRadius:6,
    },
}))
function CreatePageForm(props) {
    const classes= useStyles()
    const {user}=props
    const dispatch=useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        const {title,content}=e.target
        let data={
            title: title.value,
            content: content.value,
            accesstoken: user.accesstoken
        }
        dispatch(createNotifyPage(data))
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit} className={classes.root}>
            <TextField 
               label='Tên đường dẫn cho trang( ví dụ: domain/gioi-thieu => gioi-thieu)' 
               type="text" name='title' fullWidth={true} variant='outlined'
               className={classes.titleInput}
            />
            <textarea name='content' rows={6} className={classes.contentInput} />
            <input type="submit" className={classes.submit}/>
        </form>
    );
}
const mapStateToProps=state=>({
    user: state.user
})
export default connect(mapStateToProps,null)(CreatePageForm)