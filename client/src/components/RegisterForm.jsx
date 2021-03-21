import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import {TextField,Input,Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {fetchUser} from '../store/reducers/user.reducer'

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
function RegisterForm(props) {
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
        let newState={}
        for(let key in form){
          if(!form[key]) newState[key]=false
          else newState[key]=true
        }
        setValidate(newState)
    }
    function handleSubmit(e){
        e.preventDefault()
        const {name,email,password,verifyPassword}=e.target
        const form={
          name: name.value,
          email: email.value,
          password: password.value,
          verifyPassword: verifyPassword.value,
        }
        dispatch(fetchUser(form))
    }
    return (
        <form onSubmit={handleSubmit} className={classes.form} >
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
                name='email' 
                variant='outlined' 
                label={`Email`}
                error={!validate.email}
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
              <TextField 
                className={classes.inputField} 
                name='verifyPassword' 
                type='password' 
                variant='outlined' 
                label={`Xác nhận mật khẩu`}
                error={!validate.verifyPassword}
              />
            </Box>
            <Box display='flex' justifyContent='center' mt={3}>
              <input type='submit' className={classes.input} />
            </Box>
        </form>
    );
}

export default RegisterForm;