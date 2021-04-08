import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import useStyles from './StyleBookCase'
import {Box,Button,Paper} from '@material-ui/core'
import loading from '../../assets/images/loading.gif'
import {fetchBook,fetchImageBook} from '../../store/reducers/book.reducer'


BookCase.propTypes = {
    
};


function BookCase(props) {
    const classes=useStyles()
    const {books,type} = props
    let listBooks=books.type[type.type]
    const images= books.images
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBook({...type}))
    },[])
    useEffect(()=>{
        dispatch(fetchImageBook({list: listBooks, type: type.type}))
    },[listBooks])
    // Tranform data image to string image
    function transformDataToImage(id){
        let image= images.find(value=>value._id===id)
        let str=loading
        if(image) str='data:image/png;base64,'+image.image
        return str
    }
    return (
        <React.Fragment>
            <div className={classes.pageTitle}>
                <Link to='/sach-ban-chay' className={classes.link} >
                    <div className={classes.imageTitle}>{type.title}</div>
                </Link>
            </div>
            <div className={classes.root}>
              <ul className={classes.bookList}>
                  {listBooks.map(book=>(
                      <li className={classes.listItem} key={book._id}>
                            <Link to='/' className={classes.book}>
                                <img src={transformDataToImage(book._id)} className={classes.imgBook} alt=""/>
                                <div className={classes.boxInfor}>
                                   <Box className={classes.headerBoxInfor}>
                                       Tuổi trẻ đáng giá bao nhiêu
                                   </Box>
                                   <ul className={classes.bookInfor}>
                                       <li>Số trang:</li>
                                       <li>Kích thước:</li>
                                       <li>Ngày phát hành:</li>
                                   </ul>
                                   <span className={classes.bookPrice} >27,000đ</span>
                                   <Box textAlign='center' marginBottom={1.5}>
                                      <Button variant='contained' className={classes.btn} >Thêm vào giỏ hàng</Button>
                                      <Button variant='contained' className={classes.btn}>Mua hàng</Button>
                                   </Box>
                                </div>
                            </Link>
                      </li>
                  ))}
                </ul>
            </div>    
        </React.Fragment>
        
    );
}
const mapStateToProps=state=>({
    books: state.books
})
export default connect(mapStateToProps,null)(BookCase)