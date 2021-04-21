import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch,connect } from 'react-redux'
import {TextField,Input,Box,Modal} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {fetchLogin} from '../store/reducers/user.reducer'
import Loading from './Loading/Loading';

const useStyles=makeStyles(theme=>({
    form:{
        width:300,
        backgroundColor:theme.palette.common.white,
        position:'relative',
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
      overflowY:'auto',
  },
}))
function LoginForm(props) {
    const {formErr,loading,open,onClose}= props
    const [errs,setErrs]=useState([])
    const dispatch= useDispatch()
    const classes=useStyles()
    // Check validate
    function validation(form){
        
    }
    async function handleSubmit(e){
        e.preventDefault()
        const {name,password}=e.target
        const form={
          name: name.value,
          password: password.value,
        }
        const res= await dispatch(fetchLogin(form))
        const data=res.payload
        if(!data.errs){
          onClose()
        } else {
          setErrs([data.errs])
        }
    }
    function handleClose(){
      setErrs([])
      onClose()
    }
    return (
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
          <Box 
            display='flex' justifyContent='center'
            alignItems='center' bgcolor='white' mt={6}
            height={300} pl={4} pr={4} 
            borderRadius={4}
          >
            
            <Loading loading={loading} />
            <form onSubmit={handleSubmit} className={classes.form} >
              <Box 
                color='red' position='absolute' style={{cursor:'pointer'}}
                top='-27px' right='-18px' onClick={handleClose}
              >x</Box>
              <Box textAlign='center' color='#757575' fontSize={18}> Đăng nhập</Box>
              {errs && errs.map(err=>(
                <Box color='red' m='10px 0'>{err}</Box>
              ))}
              <Box display='flex' justifyContent='center' mt={3}>
                <TextField 
                  className={classes.inputField} 
                  name='name' 
                  variant='outlined' 
                  label={`Tên`}
                />
              </Box>
              <Box display='flex' justifyContent='center' mt={3}>
                <TextField 
                  className={classes.inputField} 
                  name='password' 
                  type='password' 
                  variant='outlined' 
                  label={`Mật khẩu`}
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
    formErr: state.user.formErr,
    loading: state.user.isLoading
})

export default connect(mapStateToProps,null)(LoginForm)