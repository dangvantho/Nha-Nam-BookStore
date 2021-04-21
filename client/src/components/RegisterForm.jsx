import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {TextField,Box,Modal} from '@material-ui/core'
import LoginForm from './LoginForm'
import {makeStyles} from '@material-ui/core/styles'
import {DOMAIN} from '../constanes.js'
import axios from 'axios'
import Loading from './Loading/Loading';

const useStyles=makeStyles(theme=>({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'column',
    position: 'absolute',
    left:'50%',
    transform:'translate(-50%)',
    padding:'24px 16px',
    borderRadius: 4,
    backgroundColor:'white',
    
  },
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
    padding: '30px 0',
    overflowY:'auto',
  },
  isPending:{
    backgroundColor:'rgba(0,0,0,0.5)',
    position:'absolute',
    left:'50%',
    transform:'translate(-50%)',
    zIndex: 999,
    color:'white',
  },
}))
function RegisterForm(props) {
    const {open,onClose}=props
    const [login,setLogin]=useState(false)
    const [pending,setPendening]=useState(false)
    const [fullfied,setFullfied]=useState(false)
    const [formErr,setFormErr]=useState([])
    const classes=useStyles()
    async function handleSubmit(e){
        e.preventDefault()
        const {name,email,password,verifyPassword}=e.target
        const form={
          name: name.value,
          email: email.value,
          password: password.value,
          verifyPassword: verifyPassword.value,
        }
        if(form.password!=form.verifyPassword){
          setFormErr(['Password không khớp'])
          return
        }
        setPendening(true)
        const res=await axios.post(`${DOMAIN}/post/user`,{data: form}).catch(err=>console.log(err))
        const data=res.data
        console.log(form,res.data)
        setPendening(false)
        if(data.errs){
          setFormErr([data.errs])
        } else {
          setFullfied(true)
          setTimeout(() => {
            handleClose()
            setLogin(!login)
          }, 1500);
        }
    }
    function  handleClose() {
      setPendening(false)
      setFullfied(false)
      setFormErr(false)
      onClose()
    }
    return (
      <React.Fragment>
        <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        disableAutoFocus={true}
        disableEnforceFocus={true}
        >
          
          <Box className={classes.root} > 
            <Loading loading={pending}/>
            
            <form onSubmit={handleSubmit} className={classes.form} >
              <Box textAlign='center' color='#757575' fontSize={18}> Đăng ký</Box>
                {formErr && (
                  <Box  >{formErr.map((value,index)=>(
                    <Box color='red' marginTop='10px' key={index}>{value}</Box>
                  ))}</Box>
                )}
                {fullfied && (
                  <Box bgColor='green' color='white'>Tạo tài khoản thành công</Box>
                )}
                <Box 
                  position='absolute' top='10px' right='10px' color='red'
                  onClick={handleClose} style={{cursor:'pointer'}}
                 >x</Box>
                <Box display='flex' justifyContent='center' mt={3}>
                  <TextField 
                    className={classes.inputField} 
                    name='name' 
                    variant='outlined' 
                    label={`Tên`}
                    required
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={3}>
                  <TextField 
                    className={classes.inputField} 
                    name='email' 
                    variant='outlined' 
                    label={`Email`}
                    required
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={3}>
                  <TextField 
                    className={classes.inputField} 
                    name='password' 
                    type='password' 
                    variant='outlined' 
                    label={`Mật khẩu`}
                    required
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={3}>
                  <TextField 
                    className={classes.inputField} 
                    name='verifyPassword' 
                    type='password' 
                    variant='outlined' 
                    label={`Xác nhận mật khẩu`}
                    required
                  />
                </Box>
                <Box display='flex' justifyContent='center' mt={3}>
                  <input type='submit' className={classes.input} value='Đăng ký' />
                </Box>
            </form>
          </Box>
        </Modal>
        <LoginForm open={login} onClose={()=>setLogin(!login)} />
      </React.Fragment>
        
    );
}

export default connect(null,null)(RegisterForm)