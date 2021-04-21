import { Box, TextField } from '@material-ui/core';
import React, { } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchHistoryById} from '../../store/reducers/history.reducer'
import commonStyles from '../styleComon'
import useStyles from './stylePaymentHistory'



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