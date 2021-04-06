import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Grid,Hidden, Box,IconButton, Collapse} from '@material-ui/core'
import useStyles from './StyleMainHeader'
import {Search,Menu } from '@material-ui/icons'
import cartImg from '../../assets/images/cart.png'
import logoImg from '../../assets/images/logo.png'

import {Link} from 'react-router-dom'



function MainHeader(props) {
    const classes=useStyles()
    const [dropMenu,setDropMenu]= useState(false)
    const [searchMobile, setSearchMobile]=useState(false)
    function handleToggleMenu(){
        if(searchMobile) {
            setSearchMobile(false)
            setDropMenu(true)
        } else {
            setDropMenu(!dropMenu)
        }
    }
    function handleToggleSearch(){
        if(dropMenu){
            setDropMenu(false)
            setSearchMobile(true)
        } else{
            setSearchMobile(!searchMobile)
        }
    }
    return (
        <Grid container spacing={0} style={{position:'relative',}}>
            <Hidden smUp>
                <Grid item xs={12} className={classes.mobile}>
                    <Menu className={classes.menuIcon} fontSize='small' onClick={handleToggleMenu} />
                    <div className={classes.logoMobile} />
                    <IconButton onClick={handleToggleSearch} >
                          <Search style={{color:'white',}}/>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={dropMenu} className={classes.collaps}>
                        <ul className={classes.dropMenu}>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Danh mục sách</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Sách bán chạy</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Chương trình khuyến mãi</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Kiểm tra đơn hàng</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Đăng ký</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} >Đăng nhập</Link>
                            </li>
                        </ul>
                    </Collapse>
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={searchMobile} className={classes.collaps}>
                        <Box className={classes.formInputMobile}>
                          <input 
                            className={classes.input} style={{width:'100%',}} 
                            type="text" placeholder='Tìm kiếm sách ...'
                          />
                          <IconButton style={{padding:0,}} >
                              <Search style={{fontSize:'18px', fontWeight:'bold',}} />
                          </IconButton>
                        </Box>
                    </Collapse>
                </Grid>
            </Hidden>
            <Hidden xsDown>
                <Grid className={classes.root} item xs={6}>
                   <Link to='/'>
                      <img className={classes.logo} src={logoImg} alt=""/>
                   </Link>
                </Grid>
                <Grid className={classes.root} item xs={6}>
                    
                    <Box position='absolute' bottom={70} right={0} >
                        <img src={cartImg} alt=""/>
                    </Box>
                    <Box className={classes.formInput}>
                      <input className={classes.input} type="text" placeholder='Tìm kiếm sách'/>
                      <IconButton className={classes.searchIcon}>
                          <Search/>
                      </IconButton>
                    </Box>
                </Grid>
            </Hidden>
        </Grid>
        
    );
}

export default connect(null,null)(MainHeader)