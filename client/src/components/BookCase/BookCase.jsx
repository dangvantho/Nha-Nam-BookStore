import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import useStyles from './StyleBookCase'
import {Box,Button,Paper} from '@material-ui/core'
import book from '../../assets/images/book.jpg'
import book2 from '../../assets/images/b_2.jpg'


BookCase.propTypes = {
    
};


function BookCase(props) {
    const classes=useStyles()
    return (
        <React.Fragment>
            <div className={classes.pageTitle}>
                <Link to='/sach-ban-chay' className={classes.link} >
                    <div className={classes.imageTitle}>Sách mới xuất bản</div>
                </Link>
            </div>
            <div className={classes.root}>
              <ul className={classes.bookList}>
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book} className={classes.imgBook} alt=""/>
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
                    <li className={classes.listItem}>
                        <Link to='/' className={classes.book}>
                            <img src={book2} className={classes.imgBook} alt=""/>
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
                </ul>
            </div>    
        </React.Fragment>
        
    );
}

export default BookCase;