import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {Box, TextField, TextareaAutosize} from '@material-ui/core'
import commonStyle from '../styleComon'
import bg from '../../assets/images/headerbg.png'
import {fetchAddBook} from '../../store/reducers/book.reducer'
import {typesBook} from '../../constanes'


const useStyles=makeStyles(theme=>({
    root:{
        margin:'10px 0',
        background:`url(${bg}) `,
    },
    link:{
        background:'#033801',
        color:'#fff',
        fontSize: 24,
        opacity:0.6,
        padding: '6px 16px',
        borderRadius: 6,
        '&:hover':{
            opacity:0.8,
            cursor:'pointer',
        }

    },
    form:{
        height:'auto',
    },
    inputLarge:{
        display:'block',
        flexBasis:'60%',
        marginBottom: 20,
    },
    inputMedium:{
        display:'block',
        marginBottom: 20,
        flexBasis:'40%',
    },
    inputSmall:{
        display:'block',
        marginBottom: 20,
        flexBasis:'25%',
    },
    textarea:{
        flexBasis:'86.66667%',
        marginBottom: 20,
    },
    buttonSubmit:{
        display:'block',
        flexBasis:'70%',
        margin: '0 40% 20px' ,
        padding: '12px 20px',
        background:'#015500',
        color:'#fff',
        fontSize:20,
        border:'0 ',
        borderRadius: 6,
        cursor:'pointer',
        outline:'none',
    }
}))
function ManageBook(props) {
    const classesCommon=commonStyle()
    const classes=useStyles()
    const dispatch=useDispatch()
    const [currentForm, setCurrentForm]=useState(1)
    const [typeBook,setTypeBook]=useState(typesBook[0].type)
    function handleChangeTypeBook(e){
        setTypeBook(e.target.value)
    }

    // Submit
    const handleSubmit=(e)=>{
        e.preventDefault()
        let form= document.forms[0]
        let formFile= new FormData(form)
        form.reset()
        dispatch(fetchAddBook(formFile))
        
    }
    // Chage form
    const handleChangeForm=(value)=>setCurrentForm(value)
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Box className={classes.root} >
                    <Box display='flex' justifyContent='space-evenly' paddingTop={4} paddingBottom={4} >
                        <span style={currentForm==1 ? {opacity:  0.8}: {}}  
                          className={classes.link} onClick={()=>handleChangeForm(1)}>
                            Thêm sách
                        </span>
                        <span style={currentForm==2 ? {opacity:  0.8}: {}} 
                          className={classes.link} onClick={()=>handleChangeForm(2)}>
                            Thêm sách
                        </span>
                        <span style={currentForm==3 ? {opacity:  0.8}: {}} 
                          className={classes.link} onClick={()=>handleChangeForm(3)}>
                            Thêm sách
                        </span>
                    </Box>
                    <Box>
                        <form onSubmit={handleSubmit} method="post" className={classes.form}>
                            <Box display='flex' justifyContent='space-evenly' flexWrap='wrap'>
                               <TextField 
                                 variant='outlined' name='title' label='Tên sách' fullWidth
                                 type='text' className={classes.inputMedium} />
                               <TextField 
                                  variant='outlined' name='size' label='Kích thước' fullWidth
                                  type='text' className={classes.inputMedium} />
                               <TextField 
                                  variant='outlined' name='money' label='Giá tiền' fullWidth
                                  type='text' className={classes.inputMedium} />
                                <TextField 
                                  variant='outlined' name='author' label='Tác giả' fullWidth
                                  type='text' className={classes.inputMedium} />
                                <TextField 
                                  variant='outlined' name='time' label='Năm xuất bản' fullWidth
                                  type='text' className={classes.inputMedium} />
                                <TextField 
                                  variant='outlined' name='publishCompany' label='Nhà xuất bản' fullWidth
                                  type='text' className={classes.inputMedium} />
                                
                                <TextField 
                                  variant='outlined' select fullWidth
                                  name='type' label='Thể loại' 
                                  type='text' value={typeBook} 
                                  onChange={handleChangeTypeBook} className={classes.inputMedium}
                                  SelectProps={{ native:true,}} >
                                    {typesBook.map((option) => (
                                        <option key={option.title} value={option.type}>
                                           {option.title}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField 
                                  variant='outlined' name='pages' label='Số trang' fullWidth
                                  type='text' className={classes.inputMedium} /> 
                                <TextareaAutosize
                                   name='intro' placeholder='Giới thiệu sách' rowsMin={5}
                                   className={classes.textarea} />  
                                <TextField 
                                  variant='outlined' name='file'  type='file' 
                                  className={classes.inputMedium} fullWidth />
                                <button className={classes.buttonSubmit} >Thêm sách</button>  
                            </Box>
                            
                            
                            
                        </form>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default connect(null,null)(ManageBook)