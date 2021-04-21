import React from 'react';
import { makeStyles } from '@material-ui/core'
import load from '../../assets/images/spiner.gif'

const useStyles= makeStyles(theme=>({
    root:{
        position:'fixed',
        top:0,
        right:0,
        left:0,
        bottom:0,
        background:'rgba(0,0,0,0.3)',
        zIndex: 9999,
    },
    img:{
        position:'fixed',
        top: 30,
        left: '50%',
        transform:'translateX(-50%)',
    },
}))

function Loading(props) {
    const classes=useStyles()
    const {loading}=props
    return (
        <React.Fragment>
            {loading && (
                <div className={classes.root}>
                    <img src={load} className={classes.img}/>
                </div>
            )}
        </React.Fragment>
    );
}

export default Loading;