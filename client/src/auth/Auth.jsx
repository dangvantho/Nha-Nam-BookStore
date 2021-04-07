import React from 'react';
import {Redirect} from 'react-router-dom'
import {useDispatch,connect} from 'react-redux'
import PropTypes from 'prop-types';

Auth.propTypes = {
    
};

function Auth(props) {
    const {accesstoken}=props
    return (
        <div>
            { !accesstoken ? <Redirect to='/'/> : props.children }
        </div>
    );
}
const mapStateToProps=state=>({
    accesstoken:state.user.accesstoken
})

export default connect(mapStateToProps,null)(Auth)