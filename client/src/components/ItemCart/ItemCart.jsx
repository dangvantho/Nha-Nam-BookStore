import React, { useEffect, useState } from 'react';
import {connect,useDispatch} from 'react-redux'
import {updateCart} from '../../store/reducers/user.reducer'
import {updateCartSession} from '../../store/reducers/sessionUser.reducer'
import axios from 'axios'
import {DOMAIN} from '../../constanes'
import { Box } from '@material-ui/core';
import useStyles from './styleItemCart'



function ItemCart(props) {
    const classes=useStyles()
    const dispatch=useDispatch()
    let {book,user,session}=props
    let [image,setImage]=useState('')
    useEffect(()=>{
        
               axios.get(`${DOMAIN}/book/${book.idBook}`)
               .then(res=>{
                   console.log(res.data)
                   setImage(res.data.image)
               })
    },[])
    
    const [count,setCount]=useState(book.count)
    const handleSubstractCount=()=>{
        if(count<1) {
            console.log(count)
            handleAddToCart(1)
            setCount(1)
        }
        else {
            setCount(count-1) 
            handleAddToCart(count-1)
        }
    }
    const handleAddCount=()=>{
        setCount(count+1)
        handleAddToCart(count+1)
    }
    function handleAddToCart(count){
        let data
        let cart
        if(user.name){
            cart= user.cart.filter(value=>value.idBook!==book.idBook)
            data={
                user: user.name,
                cart: [...cart, 
                    {
                        idBook: book.idBook, 
                        count: count,
                        updateAt: new Date(),
                        bookName: book.name,
                        price: book.price,
                        bookName: book.bookName,
                        createAt: book.createAt,
                    }]
            }
            dispatch(updateCart(data))
        } else {
            cart= session.cart.filter(value=>value.idBook!==book.idBook)
            data={
                sessionId: session.sessionId,
                cart: [...cart, 
                    {
                        idBook: book.idBook, 
                        count: count,
                        updateAt: new Date(),
                        bookName: book.name,
                        price: book.price,
                        createAt: book.createAt,
                        bookName: book.bookName,
                    }]
            }
            dispatch(updateCartSession(data))
        }
    }
    function handleDeleteBookFromCart(){
        let cart= user.name? user.cart : session.cart
        cart= cart.filter(value=>value.idBook!==book.idBook)
        if(user.name) dispatch(updateCart({ user: user.name, cart}))
        else dispatch(updateCartSession({sessionId: session.sessionId, cart}))
    }
    function changePrice(book){
        let price= book.price.split(',')[0]-0
        return price*(book.count-0)+',000'
    }
    return (
        <div className={classes.root}>
            {/* Image book */}
            <img src={`data:image/png;base64,`+image} className={classes.imgBook}/>
            {/* Content item */}
            <Box flexGrow={1} >
                <Box display='flex' flexGrow={1} paddingBottom={1}>
                    <div className={classes.bookName}>{book.bookName}</div>
                    <Box className={classes.btnHiddenSmall}>
                      <button className={classes.btn} disabled={count==1}
                        onClick={handleSubstractCount}>-</button>
                      <span className={classes.count}>{count}</span>
                      <button className={classes.btn} 
                        onClick={handleAddCount}>+</button>
                    </Box>
                    <div className={classes.price}>{changePrice(book)}đ</div>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Box className={classes.btnHiddenLarge}>
                      <button className={classes.btn} disabled={count==1}
                        onClick={handleSubstractCount}>-</button>
                      <span className={classes.count}>{count}</span>
                      <button className={classes.btn} 
                        onClick={handleAddCount}>+</button>
                    </Box>
                    <div className={classes.deleteCart} onClick={handleDeleteBookFromCart}>Xóa</div>
                    
                </Box>
            </Box>
        </div>
    );
}
const mapStateToProps= state=>({
    user: state.user,
    session: state.session,
    books: state.books

})
export default connect(mapStateToProps,null)(ItemCart)