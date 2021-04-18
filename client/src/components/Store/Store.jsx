import React, { useEffect, useState } from 'react';
import {connect,useDispatch} from 'react-redux'
import {fetchAddress} from '../../store/reducers/address.reducer'

import PropTypes from 'prop-types';
import { Box, Modal } from '@material-ui/core';
import useStyles from './styleStore'
import ItemCart from '../ItemCart/ItemCart';
import {Link} from 'react-router-dom'

Store.propTypes = {
    
};

function Store(props) {
    const classes= useStyles()
    const dispatch= useDispatch()
    const {user,session, open, onClose, openPayment}=props
    let userCart = user.name ? user.cart : session.cart
    const totalPrice= userCart.reduce((sum,book)=>{
        const price= book.price.split(',')[0] - 0
        return sum + price*book.count
    },0)
    
    return (
        <React.Fragment>
            <Modal
              open={open} onClose={onClose}
              className={classes.root}
              disableAutoFocus={true}
              disableEnforceFocus={true}
            >
                <Box className={classes.container}>
                    {/* Title */}
                    <Box className={classes.title}>
                        <Box bgcolor='green' color='white' borderRadius='5px 5px 0 0'
                           padding='12px 16px' fontWeight='bold' fontSize='18px'>
                            Giỏ hàng
                        </Box>
                    </Box>
                    {/* Content */}
                    <Box >
                        {userCart.map((value,index)=>(
                            <ItemCart book={value} key={index} onClose={onClose} />
                        ))}
                    </Box>
                    {/* Bottom */}
                    {userCart.length==0 ? 
                      <Box className={classes.noItem}>Không có sản phẩm nào</Box>: 
                      <div>
                          <Box padding='12px 12px 0 0' display='flex' justifyContent='flex-end' bgcolor='#fff'  >
                              Tổng cộng: <span className={classes.totalPrice}> {totalPrice},000đ</span> 
                          </Box>
                          <Box display='flex' padding='16px' justifyContent='space-between' 
                             borderRadius='0 0 5px 5px' bgcolor='#fff' >
                              <Link to='/' onClick={onClose} className={classes.link}>Tiếp tục mua sắm</Link>
                              <Box className={classes.buyNow} 
                                 onClick={()=>{
                                     dispatch(fetchAddress(user.name))
                                     openPayment()
                                 }} 
                                >Thanh toán</Box>
                          </Box>
                      </div>
                    }
                    
                    
                </Box>
              
            </Modal>
        </React.Fragment>
    );
}

const mapStateToProps= state=>({
    user: state.user,
    session: state.session,

})
export default connect(mapStateToProps,null)(Store)