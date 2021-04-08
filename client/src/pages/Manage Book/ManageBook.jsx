import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Box, TextField} from '@material-ui/core'
import commonStyle from '../styleComon'
import bg from '../../assets/images/headerbg.png'
import {fetchAddBook} from '../../store/reducers/book.reducer'


const useStyles=makeStyles(theme=>({
    root:{
        margin:'10px 0',
        background:`url(${bg}) no-repeat`,
    },
    link:{
        textDecoration:'none',
        background:'#033801',
        color:'#fff',
        fontSize: 24,

    },
}))
function ManageBook(props) {
    const classesCommon=commonStyle()
    const classes=useStyles()
    const [file,setFile]=useState(null)
    const dispatch=useDispatch()
    // File image
    const handleChangeImage=(e)=>{
        const file=e.target.files[0]
        setFile(file)
    }
    // Submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        let form= document.forms[0]
        form= new FormData(form)
        
        dispatch(fetchAddBook(form))
    }
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Box className={classes.root} >
                    <Box display='flex' justifyContent='space-evenly' paddingTop={4} paddingBottom={4} >
                        <Link to='/' className={classes.link}>Thêm sách</Link>
                        <Link to='/' className={classes.link}>Thêm sách</Link>
                        <Link to='/' className={classes.link}>Thêm sách</Link>
                    </Box>
                    <Box>
                        <form onSubmit={handleSubmit} method="post">
                            <TextField variant='outlined' name='title' label='Tên sách' type='text'  />
                            <TextField variant='outlined' name='size' label='Kích thước' type='text'  />
                            <TextField variant='outlined' name='money' label='Giá tiền' type='text'  />
                            <TextField variant='outlined' name='type' label='Thể loại' type='text'  />
                            <TextField variant='outlined' name='file'  type='file' onChange={handleChangeImage}  />
                            <button  >Thêm sách</button>
                        </form>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default connect(null,null)(ManageBook)