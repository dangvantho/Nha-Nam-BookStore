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
                        <Link className={classes.textLink} to='/' >Danh mục sách</Link>
                    </ListItem>
                    <List className={classes.items}>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} to='/' >Văn học Việt Nam</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} to='/' >Văn học Việt Nam</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} to='/' >Văn học Việt Nam</Link>
                        </ListItem>
                        <ListItem className={classes.item}>
                          <Link className={classes.textLink} to='/' >Văn học Việt Nam</Link>
                        </ListItem>
                    </List>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        <Link className={classes.textLink} to='/' >Sách bán chạy</Link>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        { isAdmin? 
                           <Link className={classes.textLink} to='/' >Thêm/Chỉnh sửa sách</Link> :
                           <Link className={classes.textLink} to='/' >Chương trình khuyến mại</Link>
                        }
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={3}>
                <List className={classes.list}>
                    <ListItem  button className={classes.listItem}>
                        { isAdmin? 
                           <Link className={classes.textLink} to='/' >Thêm tác giả</Link> :
                           <Link className={classes.textLink} to='/' >Giảm giá đặc biệt</Link>
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