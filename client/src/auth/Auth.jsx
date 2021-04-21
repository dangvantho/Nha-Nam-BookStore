import React from 'react';
import {Redirect} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'

function Auth(props) {
    const {accesstoken,isAdmin}=props
    return (
        <div>
            { !accesstoken || !isAdmin? <Redirect to='/'/> : props.children }
        </div>
    );
}
const mapStateToProps=state=>({
    accesstoken:state.user.accesstoken,
    isAdmin: state.user.isAdmin,
})

export default connect(mapStateToProps,null)(Auth)