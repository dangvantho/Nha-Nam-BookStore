import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchNotifyPages} from '../../store/reducers/notifyPages.reducer'
import {pages} from '../../constanes'
import commonStyles from '../styleComon'
import bg from '../../assets/images/headerbg.png'
import {useParams} from 'react-router-dom'

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        minHeight: 300,
        padding:'20px',
    },
    content:{
        lineHeight:1.5,
        fontSize: 14,
        whiteSpace:'pre-line',

    },
}))
function NotificationPage(props) {
    const classesCommon= commonStyles()
    const classes= useStyles()
    const {notifyPages}=props
    const dispatch=useDispatch()
    // get pathname
    let title= useParams()
    title= pages.find(value=>value.title===title.title)
    useEffect(()=>{
        dispatch(fetchNotifyPages(title.title))
    },[title.title])
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Box className={classes.root}>
                    <Box fontSize='20px' fontWeight='600' marginBottom={2} >
                        {title.name}
                    </Box>
                    <pre className={classes.content}>{notifyPages.content}</pre>
                </Box>
            </div>
            
        </div>
    );
}
const mapStateToProps= state=>({
    notifyPages: state.notifyPages
})
export default connect(mapStateToProps,null)(NotificationPage)