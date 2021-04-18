import { Box, makeStyles, TextField } from '@material-ui/core';
import React, { } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchHistoryById} from '../../store/reducers/history.reducer'
import commonStyles from '../styleComon'
import bg from '../../assets/images/headerbg.png'

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        minHeight: 300,
        padding:'20px',
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
       background:'#fff'
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
    table:{
        '& table, tr, td, th':{
            border:'1px solid #ccc',
            fontWeight:'600',
            fontSize:16,
            textAlign:'center',
        },
        '& table':{
            width:'100%',
            borderCollapse:'collapse',
        },
        marginTop: 30,
    }
}))

function PaymentHistory(props) {
    const classesCommon= commonStyles()
    const classes= useStyles()
    const dispatch= useDispatch()
    let {history}=props
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
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Box className={classes.root}>
                    <Box className={classes.title} >
                        Lịch sử giao hàng
                    </Box>
                    <form onSubmit={handleSumit} className={classes.form}>
                        <TextField 
                          variant='outlined' color='primary' name='id'
                          size='small' className={classes.findInput}
                          label='Nhập mã đơn hàng' />
                        <input type='submit' value='Tìm kiếm' className={classes.inputSubmit} />
                    </form>
                    <Box className={classes.table}>
                        <table>
                            <thead>
                                <tr>
                                  <th>Mã đơn hàng</th>
                                  <th>Người mua</th>
                                  <th>Ngày mua</th>
                                  <th>Trạng thái</th>
                                </tr>
                            </thead>
                            {history.id && (
                                <tbody>
                                    <tr>
                                        <td>{history.id._id}</td>
                                        <td>{history.id.name}</td>
                                        <td>{transformDate(history.id.createAt)}</td>
                                        <td>{history.id.status}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </Box>
                </Box>
            </div>
            
        </div>
    );
}

const mapStateToProps= state=>({
    history: state.history
})

export default connect(mapStateToProps,null)(PaymentHistory)