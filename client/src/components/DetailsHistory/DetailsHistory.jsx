import React, { useEffect,useState } from 'react';
import axios from 'axios'
import {DOMAIN} from '../../constanes'
import { makeStyles,Box } from '@material-ui/core';

const useStyles= makeStyles(theme=>({
    root:{
        display:'flex',
        padding:'14px',
        borderBottom:'1px solid #ccc',
        background:'#fff',
    },
    image:{
        objectFit:'contain',
        width:90,
        marginRight:30,
    },
}))
function DetailsHistory(props) {
    const classes= useStyles()
    const {book}=props
    let [image,setImage]=useState('')
    useEffect(()=>{
        axios.get(`${DOMAIN}/book/${book.idBook}`)
            .then(res=>{
                setImage(res.data.image)
            })
    },[])
    function getPrice(book){
        let price=book.price.split(',')[0]-0
        price= price*(book.count-0)
        return price+',000'
    }
    return (
        <div className={classes.root}>
            {/* Image book */}
            <img src={`data:image/png;base64,${image}`} className={classes.image}/>
            {/* Information of book */}
            <Box>
                <Box>{book.bookName}</Box>
                <Box>{`Số lượng: ${book.count}`}</Box>
                <Box>{`Giá tổng cộng: ${getPrice(book)}đ`}</Box>
            </Box>
        </div>
    );
}

export default DetailsHistory;