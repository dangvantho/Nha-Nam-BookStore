import React from 'react';
import {connect,useDispatch} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import loadingImg from '../../assets/images/spiner.gif'

const useStyles= makeStyles(theme=>({
    root:{
        position: 'fixed',
        top:0,
        bottom: 0,
        left: 0,
        right: 0,
        background:'rgba(0,0,0,0.3)',
        zIndex: 9999,
    },
    loding:{
        position: 'fixed',
        top: 50,
        left: '50%',
        transform:'translateX(-50%)',
    },
}))

function Loading(props) {
    const classes= useStyles()
    const {user, address, books, comments, history, notifyPages}=props
    let pending= user.isPending || address.isPending 
                  || books.isPending || comments.isPending
                  || history.isPending || notifyPages.isPending
    return (
        <React.Fragment>
            {pending && (
                <div className={classes.root}>
                    <img src={loadingImg} className={classes.loding}/>
                </div>
            )}
        </React.Fragment>
    );
}

const mapStateToProps=state=>({
    user: state.user,
    address: state.address,
    books: state.books,
    comments: state.comments,
    history: state.history,
    notifyPages: state.notifyPages,
})

export default connect(mapStateToProps,null)(Loading)