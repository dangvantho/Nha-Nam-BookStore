import { Box, IconButton, makeStyles, Modal, Step, StepLabel, Stepper, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useState } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchHistoryById} from '../../store/reducers/history.reducer'
import commonStyles from '../styleComon'
import bg from '../../assets/images/headerbg.png'
import DetailsHistory from '../../components/DetailsHistory/DetailsHistory';

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        minHeight: 300,
        padding:'20px',
        [theme.breakpoints.down('sm')]:{
            padding:'24px 10px',
        },
    },
    title:{
        fontSize: 18 ,
        fontWeight: 'bold' ,
        marginTop: 30,
        textTransform:'uppercase',
        color:'#524643',
    },
    form:{
        display:'flex',
        alignItems:'center',
        marginTop: 25,
        
    },
    findInput:{
       [theme.breakpoints.up('sm')]:{
           width: 400,
           marginRight: 32,
       },
       width: '80%',
       background:'#fff',
       marginRight: 10,
    },
    inputSubmit:{
        border:'none',
        outline:'none',
        padding:'8px 12px',
        background:'green',
        borderRadius: 4,
        color:'#fff',
        cursor:'pointer',
    },
    stepper:{
        [theme.breakpoints.down('sm')]:{
            padding:'24px 0',
        },
    },
    infor:{
        color:'blue',
        marginTop: 20,
        '&:hover':{
            cursor:'pointer',
            textDecoration:'underline',
        },
    },
    modal:{
        display:'flex',
        justifyContent:'center',
        marginTop:35,
        overflowX:'hidden',
        overflowY:'auto',
    },
    detailsOrder:{
        position:'absolute',
        left: '50%',
        transform:'translateX(-50%)',
        border:'5px solid rgba(255,255,255,.24) ',
        borderRadius:5,
        [theme.breakpoints.up('sm')]:{
            width: '900px'
        },
        [theme.breakpoints.down('sm')]:{
            width:'90%',
        }
    },
    iconClose:{
        color:'red'
    }
}))

const status=[
    {name: 'Check thông tin người dùng', index: 0},
    {name: 'Đã đưa đến đơn vị vận chuyển', index: 1},
    {name: 'Đang giao hàng', index: 2},
    {name: 'Giao hàng thành công', index: 3},
]

function CheckOrder(props) {
    const classesCommon= commonStyles()
    const classes= useStyles()
    const dispatch= useDispatch()
    let {history}=props
    const [activeStep,setActiveStep]=useState(0)
    const [open,setOpen]=useState(false)
    function handleSumit(e){
        e.preventDefault()
        let id= e.target.id.value
        dispatch(fetchHistoryById(id))
        e.target.reset()
    }
    function transformDate(time){
        let stringTime= new Date(time)
        let year= stringTime.getFullYear()
        let month= stringTime.getMonth()+1
        let day= stringTime.getDate()
        let hours= stringTime.getHours()
        return `${day}/${month}/${year}`
    }
    function futureTime(time,index){
        let stringTime= new Date(time)
        let result = stringTime.getTime()
        switch(index){
            case 1:
                result+=1000*3600*24*2
                break;
            case 2:
                result+=1000*3600*24*3    
                break;
            case 3:
                result+=1000*3600*24*5
                break;
            default:
                break;            
        }
        return transformDate(result)
    }
    let statusStep=0
    useEffect(()=>{
        if(history.id){
            statusStep= status.find(value=>value.name==history.id.status)
            setActiveStep(statusStep.index)
        }
    },[])
    function getPrice(book){
        let price=book.price.split(',')[0]-0
        price= price*(book.count-0)
        return price
    }
    function getTotalPrice(cart){
        let price=cart.reduce((sum,book)=>{
            return sum+getPrice(book)
        },0)
        return price+',000'
    }
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Box className={classes.root}>
                    <Box className={classes.title} >
                        Kiểm tra đơn hàng
                    </Box>
                    <form onSubmit={handleSumit} className={classes.form}>
                        <TextField 
                          variant='outlined' color='primary' name='id'
                          size='small' className={classes.findInput}
                          label='Nhập mã đơn hàng' />
                        <input type='submit' value='Tìm kiếm' className={classes.inputSubmit} />
                    </form>
                    {history.id && (
                        <Box marginTop='25px'>
                            <Box marginBottom='20px' fontSize='14px'>{`Mã đơn hàng: ${history.id._id}`}</Box>
                            <Box marginBottom='20px' fontSize='14px'>Trạng thái đơn hàng:</Box>
                            <Stepper
                              activeStep={activeStep} className={classes.stepper}
                              alternativeLabel nonLinear >
                                {status.map((value)=>{
                                    return (
                                        <Step key={value.name} completed={value.index==activeStep}>
                                            <StepLabel >
                                                <p>
                                                  {value.name}
                                                </p>
                                                <p> 
                                                    {value.index<=activeStep ?
                                                        `Hoàn thành: ${futureTime(history.id.createAt,value.index)}` :
                                                        `Dự kiến: ${futureTime(history.id.createAt,value.index)}`}
                                                </p>
                                            </StepLabel>
                                        </Step>
                                    )
                                })}
                            </Stepper>
                            {/* Show information of order */}
                            <Box className={classes.infor} onClick={()=>setOpen(!open)}>
                                Xem thông tin chi tiết
                            </Box>
                            <Modal
                              open={open}
                              onClose={()=>setOpen(!open)}
                              className={classes.modal} 
                              disableAutoFocus={true} disableEnforceFocus={true}
                            >
                              <Box className={classes.detailsOrder}>
                                   <Box 
                                    bgcolor='green' color='#fff' 
                                    padding='0 24px' 
                                    display='flex' justifyContent='space-between' 
                                    alignItems='center'>
                                      <Box>
                                        {`Chi tiết đơn hàng: ${history.id._id}`}
                                      </Box> 
                                      <IconButton onClick={()=>setOpen(!open)}>
                                          <CloseIcon className={classes.iconClose}/>
                                      </IconButton>
                                   </Box>
                                   <Box>
                                       {history.id.cart.map(book=>(
                                           <DetailsHistory book={book} key={book.idBook}/> 
                                        ))}
                                        <Box 
                                          color='red' padding='20px' bgcolor='#fff'
                                          display='flex' justifyContent='flex-end'>
                                            {`Tổng cộng: ${getTotalPrice(history.id.cart)}đ`}
                                        </Box>
                                    </Box> 
                              </Box>
                            </Modal>
                        </Box>
                    )}
                </Box>
                
            </div>
        </div>
    );
}

const mapStateToProps= state=>({
    history: state.history
})

export default connect(mapStateToProps,null)(CheckOrder)