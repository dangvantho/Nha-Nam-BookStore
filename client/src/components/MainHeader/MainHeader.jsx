import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect,useDispatch} from 'react-redux'
import {Grid,Hidden, Box,IconButton, Collapse} from '@material-ui/core'
import useStyles from './StyleMainHeader'
import {Search,Menu } from '@material-ui/icons'
import cartImg from '../../assets/images/cart.png'
import logoImg from '../../assets/images/logo.png'
import {logOut} from '../../store/reducers/user.reducer'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'

import {Link} from 'react-router-dom'
import Store from '../Store/Store';



function MainHeader(props) {
    const classes=useStyles()
    const {user,}=props
    const dispatch=useDispatch()
    const [dropMenu,setDropMenu]= useState(false)
    const [searchMobile, setSearchMobile]=useState(false)
    const [openCart,setOpenCart]=useState(false)
    const [login,setLogin]=useState(false)
    const [register,setRegister]=useState(false)
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
                    <Link to='/' className={classes.logoMobile} />
                    <IconButton onClick={handleToggleSearch} >
                          <Search style={{color:'white',}}/>
                    </IconButton>
                </Grid>
                {/* Drop menu */}
                <Grid item xs={12}>
                    <Collapse in={dropMenu} className={classes.collaps}>
                        <ul className={classes.dropMenu}>
                            <li className={classes.link}>
                                <Link to='/' style={{textDecoration:'none',color:'#0f5731'}} 
                                  >Danh mục sách</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/pages/sach-ban-chay' style={{textDecoration:'none',color:'#0f5731'}} 
                                  >Sách bán chạy</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/pages/chuong-trinh-khuyen-mai' style={{textDecoration:'none',color:'#0f5731'}} 
                                  >Chương trình khuyến mãi</Link>
                            </li>
                            <li className={classes.link}>
                                <Link to='/pages/kiem-tra-don-hang' style={{textDecoration:'none',color:'#0f5731'}} 
                                  >Kiểm tra đơn hàng</Link>
                            </li>
                            <li className={classes.link}>
                                <Link 
                                  to={user.name ? '/profile': '/register'}
                                  style={{textDecoration:'none',color:'#0f5731'}}
                                  onClick={user.name ? null : ()=>setRegister(!register)} 
                                >
                                    {user.name ? user.name: 'Đăng ký'}
                                </Link>
                            </li>
                            <li className={classes.link}>
                                <Link 
                                  to={user.name ? '/': '/login'} 
                                  style={{textDecoration:'none',color:'#0f5731'}}
                                  onClick={user.name? ()=>dispatch(logOut()): ()=>setLogin(!login)}
                                >
                                    {user.name ? 'Thoát': 'Đăng nhập'}
                                </Link>
                            </li>
                        </ul>
                    </Collapse>
                    {/* Store icon */}
                    <Box position='fixed' zIndex={999} bottom={70} style={{cursor:'pointer',}}
                        right={0} onClick={()=>setOpenCart(!openCart)}>
                        <img src={cartImg} alt=""/>
                    </Box>
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
                    {/* Cart */}
                    <Box position='absolute' bottom={70} style={{cursor:'pointer',}}
                        right={0} onClick={()=>setOpenCart(!openCart)}>
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
            <RegisterForm open={register} onClose={()=>setRegister(!register)}/>
            <LoginForm open={login} onClose={()=>setLogin(!login)}/>
            <Store open={openCart} onClose={()=>setOpenCart(!openCart)} />
        </Grid>
        
    );
}
const mapStateToProps=state=>({
    user: state.user
})

export default connect(mapStateToProps,null)(MainHeader)