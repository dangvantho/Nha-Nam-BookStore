import { Box, Grid, makeStyles,TextField } from '@material-ui/core';
import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux'
import SameCategoryBooks from '../SameCategoryBooks/SameCategoryBooks'
import buyButton from '../../assets/images/buynow.png'
import addToCart from '../../assets/images/addtocart.png'

const useStyles=makeStyles(theme=>({
    root:{},
    boxTop:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        marginBottom:12,
    },
    intro:{
        whiteSpace:'pre-line',
        fontSize:16,
        lineHeight:1.5,
    },
    imgBook:{
        maxWidth:'100%',
        objectFit:'cover',
        objectPosition:'center',
        maxHeight:'300px',
    },
    inforMain:{
        [theme.breakpoints.up('sm')]:{
            borderBottom:'3px solid #ccc',
        }
    },
    title:{
        marginTop:0,
        paddingBottom: 16,
        borderBottom:'3px solid #ccc',
    },
    infor:{
        padding:0,
        marginTop: 0,
        marginBottom:20,
        listStyle:'none',
        
    },
    peaceOfBook:{
        marginBottom:4,
        padding:'5px 0',
        color:'#333',
        fontSize:12,
        lineHeight:'20px',
        borderBottom:'1px solid #999',
        '&:before':{
            content:"'*'",
            paddingRight: 6,
            lineHeight:'20px',
        },
        '& span':{
            fontWeight:'bold',
        },
    },
    buyBook:{
        paddingLeft:35,
        color:'white',
        [theme.breakpoints.down('xs')]:{
            paddingLeft:0,
        }
    },
    oldPrice:{
        background:'#999',
        fontSize:12,
        padding: 5,
        borderRadius:4,
        '& span':{
            textDecoration:'line-through',
        },
    },
    salePrice:{
        background:'#0f5731',
        fontSize:14,
        padding:'8px 5px',
        marginTop: 20,
        borderRadius:4,
        '& span':{
            fontSize:20,
            fontWeight: 'bold',
        }
    },
    countInput:{
        border:'none',
        lineHeight: '30px',
        width: 40,
        textAlign:'center',
        fontSize: 14,
        color:'red',
        outline:'none',
    },
    imageButton:{
        marginBottom:2,
        maxWidth: '100%',
        cursor:'pointer',
        paddingRight:8,
        objectFit:'cover',
        objectPosition:'center',
        display:'block',
    },
    sameKindOfBook:{
        marginTop:20,
    },
}))
function ContentBook(props) {
    const {book}=props
    const [count,setCount]=useState(1)
    let price=book.money
    price=Math.ceil((price.split(',')[0]-0)*0.8)+',000'
    function handleChageCount(e){
        let value=e.target.value-0
        setCount(value)
    }
    function handleAddToCart(){
        console.log(count)
    }
    function handleBuy(){
        console.log(count)
    }
    const classes=useStyles()
    return (
        <Grid container spacing={0} justify='center'>
            <Grid item xs={9} sm={4} className={classes.boxTop}>
                <img className={classes.imgBook} src={'data:image/png;base64,'+book.image}/>
            </Grid>
            <Grid item xs={12} sm={8} className={classes.inforMain} >
                {/* Information about book */}
                <p className={classes.title}>{book.title}</p>
                <Grid container spacing={0}  >
                    <Grid item xs={12} sm={6}  >
                        <ul className={classes.infor}>
                            <li className={classes.peaceOfBook}>Mã sản phẩm: <span>{book._id}</span></li>
                            <li className={classes.peaceOfBook}>Tác giả: <span>{book.author}</span></li>
                            <li className={classes.peaceOfBook}>Nhà xuất bản: <span>{book.publishCompany}</span></li>
                            <li className={classes.peaceOfBook}>Số trang: <span>{book.pages}</span></li>
                            <li className={classes.peaceOfBook}>Kích thước: <span>{book.size}</span></li>
                            <li className={classes.peaceOfBook}>Năm phát hành: <span>{book.time}</span></li>
                        </ul>
                    </Grid>
                    {/* Buy book ỏ add to cart */}
                    <Grid item xs={12} sm={6} className={classes.buyBook}>
                        {/* Price */}
                        <div className={classes.oldPrice}> 
                           Giá bìa: <span>{book.money}đ</span> 
                        </div>
                        {/* Sale of price */}
                        <div className={classes.salePrice}>Giá Nhã Nam: <span>{price}đ</span> (Đã tính VAT)</div>
                        {/* count */}
                        <Box fontSize='14px' color='#444' paddingTop='27px' >
                            <Box display='inline-block' paddingRight='13px'>SỐ LƯỢNG: </Box>
                            <input  
                                type='number' onChange={handleChageCount} 
                                value={count} min={1} step={1}
                                className={classes.countInput}
                            />
                        </Box>
                        {/* Buy */}
                        <Box padding='20px 0'  >
                            <img className={classes.imageButton} onClick={handleAddToCart} src={addToCart} alt="Buy now"/>
                            <img className={classes.imageButton} onClick={handleBuy} src={buyButton} alt="Buy now"/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Box paddingTop='18px' fontSize='24px' fontStyle='italic' color='#0f5731' >
                Giới thiệu sách
            </Box>
            <pre className={classes.intro}>{book.intro}</pre>
            {/* Thêm lựa chọn sách */}
            <Grid item xs={12}>
                {/* Find book by category */}
               <SameCategoryBooks 
                  filter={{type: book.type}} title='Sách cùng thể loại' type='type'
                  className={classes.sameKindOfBook} hiddenBook={book._id} />

               <SameCategoryBooks 
                  filter={{author: book.author}} title='Sách cùng tác giả' type='author'
                  className={classes.sameKindOfBook}  />

            </Grid>
        </Grid>
    );
}


export default ContentBook