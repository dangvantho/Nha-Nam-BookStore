import React, {useState,useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {connect,useDispatch} from 'react-redux'
import {fetchCommentOfBook,postComment,sortComment} from '../../store/reducers/comment.reducer'
import { Avatar, Box, makeStyles } from '@material-ui/core';
import {Pagination} from '@material-ui/lab'
import LoginForm from '../LoginForm';

Comment.propTypes = {
    
};
const useStyles=makeStyles(theme=>({
    root:{
        fontSize: 16,
        color:'#fff',
        position:'relative',
    },
    title:{
        fontWeight:'bold',
        marginTop:50,
        position:'relative',
        borderBottom:'4px solid #cacbcc',
        '& span':{
            position:'absolute',
            background:'#0f5731',
            padding:'5px 13px',
            top: -28,
        },
    },
    postComment:{
        marginTop: 20,
    },
    form:{
        flexBasis:'100%',
    },
    input:{
        display:'block',
        width:'100%',
        border:'1px solid green',
        padding:' 8px 0 8px 4px',
        outline:'none',
    },
    inputSubmit:{
        border:'1px solid green',
        background:'transparent',
        padding:'8px 25px',
        borderRadius:4,
        marginTop: 12,
        outline:'none',
        cursor:'pointer',
    },
    sortBy:{
        padding: '6px 12px',
        border:'1px solid green',
        outline:'none',
        borderRadius:3,
    },
    comments:{
        marginTop:20,
        listStyle:'none',
        paddingLeft:0,
        color:'black'
    },
    comment:{
        marginTop: 12,
    },
    avatar:{
        color: '#fff',
        backgroundColor:'green',
        marginRight: 16,
    },
    pagination:{
        marginTop:20,
    },
    login:{
        cursor:'pointer',
        color: 'green',
        paddingLeft:12,
    }
}))

function Comment(props) {
    const classes=useStyles()
    const {idBook,comments,user,book}=props
    const ref= useRef()
    const dataComments= comments.data
    const maxPage=Math.ceil(dataComments.length/5)
    const [pageComment,setPageComment]=useState(1)
    function handleChagePageComment(e){
        setPageComment(e.target.value-0)
    }
    const [login,setLogin]=useState(false)
    const dispatch=useDispatch()
    async function handleSubmit(e){
        e.preventDefault()
        const {content}=e.target
        const data={
            content: content.value,
            user: user.name,
            idBook,
        }
        await dispatch(postComment(data))
        await dispatch(fetchCommentOfBook(idBook))
        await dispatch(sortComment(ref.current.value))
        e.target.reset()
    }
    function handleSortBy(e){
        dispatch(sortComment(e.target.value))
    }
    function handleToggleLogin(){
        setLogin(!login)
    }
    useEffect(()=>{
        (async ()=>{
           await dispatch(fetchCommentOfBook(idBook))
           await dispatch(sortComment(ref.current.value))
        })()
    },[book])
    useEffect(()=>{
        setLogin(false)
    },[user.name])
    const commentsLength=comments.data.length
    return (
        <div className={classes.root}>
            <div className={classes.title} ><span>Bình luận</span></div>
            {/* Thêm bình luận */}
            <div className={classes.postComment}>
                {/* Kiểm tra đăng nhập */}
                {user.name ? 
                   (<Box display='flex'  >
                        <Avatar className={classes.avatar} >{user.name[0]}</Avatar>
                       <form onSubmit={handleSubmit} className={classes.form} >
                            <textarea type="text" name='content' className={classes.input}/>
                            <input type="submit" className={classes.inputSubmit} />
                        </form>
                   </Box>) : 
                   (<Box display='flex'>
                       <Box color='green'>Bạn phải đăng nhập để viết bình luận</Box>
                       <Box className={classes.login} onClick={handleToggleLogin}>
                           Đăng nhập
                       </Box>
                   </Box>)}
            </div>
            {/* Sort comment */}
            <Box display='flex' justifyContent='space-between' alignItems='center'
                marginTop='25px' color='green' >
                <span>{commentsLength>1 ? `${commentsLength} Comments`: `${commentsLength} Comment`} </span>
                <Box display='flex' alignItems='center'>
                    <Box marginRight='10px'>Sắp xếp theo</Box>
                    <select name="sortComment" ref={ref} className={classes.sortBy} onChange={handleSortBy}>
                        <option value="-1">Mới nhất</option>
                        <option value="1">Cũ nhất</option>
                    </select>
                </Box>
            </Box>
            {/* Render comments */}
            <ul className={classes.comments}>
                {dataComments.map(comment=>(
                    <li className={classes.comment} key={comment._id}>
                        {/* Content */}
                        <Box border='1px dashed green' padding='12px'>
                            <Box display='flex'>
                                <Avatar className={classes.avatar} >{comment.user.name}</Avatar>
                                <Box>{comment.user}</Box>
                            </Box>
                            <Box fontSize='14px' padding='12px 0'  >{comment.content}</Box>
                        </Box>
                        {/* reply comment */}
                        {/* relative commnet */}
                    </li>
                ))}
            </ul>
            {/* Pagination comments */}
            <Pagination 
              count={maxPage} className={classes.pagination} 
              hidePrevButton={pageComment===1}
              hideNextButton={pageComment==maxPage}
              variant="outlined" />
            <LoginForm open={login} onClose={handleToggleLogin}/>
        </div>
    );
}
const mapStateToProps=state=>({
    comments: state.comments,
    user: state.user,
    book: state.books.book,
    
})
export default connect(mapStateToProps,null)(Comment)