import React, { useEffect } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchCart,fetchSessionId,deleteSession} from '../store/reducers/sessionUser.reducer'
import {fetchAccessToken} from '../store/reducers/user.reducer'

function Session(props) {
    const {session,accesstoken}=props
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(accesstoken)
        if(accesstoken){
            dispatch(fetchAccessToken(accesstoken))
            dispatch(deleteSession(session.sessionId))
        }
        else if(!session.sessionId) {
            dispatch(fetchSessionId())
        } else if(session.sessionId){
            dispatch(fetchCart(session.sessionId))
        }
    },[accesstoken])
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}
const mapStateToProps=state=>({
    session: state.session,
    accesstoken: state.user.accesstoken,
})

export default connect(mapStateToProps,null)(Session)