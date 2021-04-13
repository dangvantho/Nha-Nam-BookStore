import React from 'react';
import {Grid,Hidden,List,ListItem,} from '@material-ui/core'
import useStyles from './StyleNavbar'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

Navbar.propTypes = {
    
};


function Navbar(props) {
    const {user}=props
    const {isAdmin}=user
    const classes=useStyles()
    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        <div className={classes.textLink}  >Danh mục sách</div>
                    </ListItem>
                    <List className={classes.items}>
                        <ListItem className={classes.item} >
                          <Link className={classes.textLink} style={{lineHeight:'30px',}} to='/van-hoc-viet-nam' >
                              Văn học Việt Nam</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} style={{lineHeight:'30px',}} to='/van-hoc-nuoc-ngoai' >
                              Văn học nước ngoài</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} style={{lineHeight:'30px',}} to='/sach-thieu-nhi' >
                              Sách thiếu nhi</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} style={{lineHeight:'30px',}} to='/sach-khoa-hoc' >
                              Khoa học</Link>
                        </ListItem>
                    </List>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        { isAdmin? 
                           <Link className={classes.textLink} to='/them-trang-thong-bao' >Thêm trang thông báo</Link> :
                           <Link className={classes.textLink} to='/sach-ban-chay' >Sách bán chạy</Link>
                        }
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        { isAdmin? 
                           <Link className={classes.textLink} to='/book' >Thêm/Chỉnh sửa sách</Link> :
                           <Link className={classes.textLink} to='/chuong-trinh-khuyen-mai' >Chương trình khuyến mại</Link>
                        }
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        { isAdmin? 
                           <Link className={classes.textLink} to='/add-author' >Thêm tác giả</Link> :
                           <Link className={classes.textLink} to='/giam-gia-dac-biet' >Giảm giá đặc biệt</Link>
                        }
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}
const mapStateToProps=state=>({
    user: state.user,
})
export default connect(mapStateToProps,null)(Navbar)