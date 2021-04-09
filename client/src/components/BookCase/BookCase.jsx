import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import useStyles from './StyleBookCase'
import {Box,Button,Paper} from '@material-ui/core'
import loading from '../../assets/images/loading.gif'
import {fetchBook} from '../../store/reducers/book.reducer'


BookCase.propTypes = {
    
};


function BookCase(props) {
    const classes=useStyles()
    const {books,type} = props
    let listBooks=books.type[type.type]
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBook({...type}))
        // dispatch(fetchImageBook({list: listBooks, type: type.type}))
    },[])
    // Tranform data image to string image
    function transformDataToImage(book){
        let image= book.image
        let str=loading
        if(image) str='data:image/png;base64,'+image
        return str
    }
    return (
        <React.Fragment>
            <div className={classes.pageTitle}>
                <Link to={`/${type.title}`} className={classes.link} >
                    <div className={classes.imageTitle}>{type.title}</div>
                </Link>
            </div>
            <div className={classes.root}>
              <ul className={classes.bookList}>
                  {listBooks? listBooks.map(book=>(
                      <li className={classes.listItem} key={book._id}>
                            <Link to={`/book/${book._id}`} className={classes.book}>
                                <img src={transformDataToImage(book)} className={classes.imgBook} alt=""/>
                                <div className={classes.boxInfor}>
                                   <Box className={classes.headerBoxInfor}>
                                       {book.title}
                                   </Box>
                                   <ul className={classes.bookInfor}>
                                       <li>Số trang: {book.pages}</li>
                                       <li>Kích thước: {book.size} cm</li>
                                       <li>Năm phát hành: {book.time}</li>
                                   </ul>
                                   <span className={classes.bookPrice} >{book.money}đ</span>
                                   <Box textAlign='center' marginBottom={1.5}>
                                      <Button variant='contained' className={classes.btn} >Thêm vào giỏ hàng</Button>
                                      <Button variant='contained' className={classes.btn}>Mua hàng</Button>
                                   </Box>
                                </div>
                            </Link>
                      </li>
                  )) 
                  : <img src={loading} className={classes.imgBook} />
                }
                </ul>
            </div>    
        </React.Fragment>
        
    );
}
const mapStateToProps=state=>({
    books: state.books
})
export default connect(mapStateToProps,null)(BookCase)