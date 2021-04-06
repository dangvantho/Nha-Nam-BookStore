import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch,connect } from 'react-redux'
import {TextField,Input,Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {fetchLogin} from '../store/reducers/user.reducer'

const useStyles=makeStyles(theme=>({
    form:{
        width:300,
        backgroundColor:theme.palette.common.white,
    },
    input:{
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        padding:theme.spacing(2,6),
        outline: 'none' ,
        fontSize: theme.spacing(2),
        cursor: 'pointer',
        border:'0',
    },
    inputField:{
        width:'100%'
    },
    inputFailure: {
        color: theme.palette.error.main,
    }
}))
function LoginForm(props) {
    const {formErr}= props
    console.log(formErr)
    const dispatch= useDispatch()
    const [validate,setValidate]=useState({
        name: true,
        email: true,
        password: true,
        verifyPassword: true,
    })
    const classes=useStyles()
    // Check validate
    function validation(form){
        
    }
    function handleSubmit(e){
        e.preventDefault()
        const {name,password}=e.target
        const form={
          name: name.value,
          password: password.value,
        }
        dispatch(fetchLogin(form))
    }
    return (
      
        <form onSubmit={handleSubmit} className={classes.form} >
            <Box textAlign='center' color='#757575' fontSize={18}> Đăng nhập</Box>
            <Box display='flex' justifyContent='center' mt={3}>
              <TextField 
                className={classes.inputField} 
                name='name' 
                variant='outlined' 
                label={`Tên`}
                error={!validate.name}
              />
            </Box>
            <Box display='flex' justifyContent='center' mt={3}>
              <TextField 
                className={classes.inputField} 
                name='password' 
                type='password' 
                variant='outlined' 
                label={`Mật khẩu`}
                error={!validate.password}
              />
            </Box>
            <Box display='flex' justifyContent='center' mt={3}>
              <input type='submit' className={classes.input} />
            </Box>
        </form>
    );
}
const mapStateToProps=state=>({
    formErr: state.user.formErr
})

export default connect(mapStateToProps,null)(LoginForm)