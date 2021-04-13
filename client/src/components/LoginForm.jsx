import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch,connect } from 'react-redux'
import {TextField,Input,Box,Modal} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {fetchLogin} from '../store/reducers/user.reducer'

const useStyles=makeStyles(theme=>({
    form:{
        width:300,
        backgroundColor:theme.palette.common.white,
    },
    input:{
        color: theme.palette.common.white,
        backgroundColor: 'green',
        padding:theme.spacing(1,5),
        outline: 'none' ,
        fontSize: theme.spacing(2),
        cursor: 'pointer',
        border:'0',
        borderRadius: 5,
    },
    inputField:{
        width:'100%'
    },
    inputFailure: {
        color: theme.palette.error.main,
    },
    modal:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      overflowY:'auto',
  },
}))
function LoginForm(props) {
    const {formErr,open,onClose}= props
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
      <Modal
        open={open}
        onClose={onClose}
        className={classes.modal}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
          <Box 
            display='flex' justifyContent='center'
            alignItems='center' bgcolor='white' 
            height={300} pl={4} pr={4}
            borderRadius={4}
          >
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
                    <input type='submit' className={classes.input} value="Đăng nhập" />
                  </Box>
              </form>
          </Box>
      </Modal>
        
    );
}
const mapStateToProps=state=>({
    formErr: state.user.formErr
})

export default connect(mapStateToProps,null)(LoginForm)