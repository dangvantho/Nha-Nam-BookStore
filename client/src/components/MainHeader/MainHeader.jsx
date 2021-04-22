import React, { useRef, useState } from 'react';
import {connect,useDispatch} from 'react-redux'
import {Grid,Hidden, Box,IconButton, Collapse} from '@material-ui/core'
import useStyles from './StyleMainHeader'
import {Search,Menu, ExpandMore } from '@material-ui/icons'
import cartImg from '../../assets/images/cart.png'
import logoImg from '../../assets/images/logo.png'
import {logOut} from '../../store/reducers/user.reducer'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import Payment from '../Payment/Payment'
import {Link} from 'react-router-dom'
import Store from '../Store/Store';



function MainHeader(props) {
    const classes=useStyles()
    const {user,}=props
    const dispatch=useDispatch()
    const [dropMenu,setDropMenu]= useState(false)
    const [subMenu,setSubMenu]=useState(false)
    const ref=useRef()
    const [searchMobile, setSearchMobile]=useState(false)
    const [openCart,setOpenCart]=useState(false)
    const [login,setLogin]=useState(false)
    const [register,setRegister]=useState(false)
    const [openPayment,setOpenPayment]=useState(false)
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
    function handleToggleSubMenu(){
        let list= ref.current
        !subMenu ? list.style.maxHeight= null : list.style.maxHeight= list.scrollHeight + 'px'
        setSubMenu(!subMenu)
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
                                <Box display='flex' justifyContent='space-between' onClick={handleToggleSubMenu}>
                                    <Box>Danh mục sản phẩm</Box>
                                    <IconButton className={classes.expandIcon} >
                                        <ExpandMore />
                                    </IconButton>
                                </Box>
                                
                                <Box className={classes.subMenu}  >
                                    <ul 
                                      className={classes.category} 
                                      ref={ref} onClick={()=>setDropMenu(!dropMenu)}>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/van-hoc-viet-nam' className={classes.linkHref} 
                                            >Văn học Việt Nam</Link>
                                        </li>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/sach-thieu-nhi' className={classes.linkHref} 
                                            >Sách thiếu nhi</Link>
                                        </li>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/van-hoc-nuoc-ngoai' className={classes.linkHref} 
                                            >Sách ngoại văn</Link>
                                        </li>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/tieu-thuyet' className={classes.linkHref} 
                                            >Tiểu thuyết</Link>
                                        </li>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/sach-khoa-hoc' className={classes.linkHref} 
                                            >Sách khoa học</Link>
                                        </li>
                                        <li className={classes.categoryItem}>
                                          <Link to='/the-loai/sach-ban-chay' className={classes.linkHref} 
                                            >Sách bán chạy</Link>
                                        </li>
                                    </ul>
                                </Box>
                            </li>
                            <section onClick={()=>setDropMenu(!dropMenu)}>
                                <li className={classes.link}>
                                    <Link to='/pages/chuong-trinh-khuyen-mai' className={classes.linkHref} 
                                      >Chương trình khuyến mãi</Link>
                                </li>
                                <li className={classes.link}>
                                    <Link to='/tra-cuu-don-hang' className={classes.linkHref} 
                                      >Kiểm tra đơn hàng</Link>
                                </li>
                                <li className={classes.link}>
                                    <Link 
                                      to={user.name ? '/profile': '/register'}
                                      className={classes.linkHref}
                                      onClick={user.name ? null : ()=>setRegister(!register)} 
                                    >
                                        {user.name ? user.name: 'Đăng ký'}
                                    </Link>
                                </li>
                                <li className={classes.link}>
                                    <Link 
                                      to={user.name ? '/': '/login'} 
                                      className={classes.linkHref}
                                      onClick={user.name? ()=>dispatch(logOut()): ()=>setLogin(!login)}
                                    >
                                        {user.name ? 'Thoát': 'Đăng nhập'}
                                    </Link>
                                </li>
                            </section>
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
            <Store 
               open={openCart} onClose={()=>setOpenCart(!openCart)} 
               openPayment={()=>{
                   setOpenCart(false)
                   setOpenPayment(!openPayment)
               }}/>
            <Payment open={openPayment} onClose={()=>setOpenPayment(!openPayment)} startStep={0} />  
            
        </Grid>
        
    );
}
const mapStateToProps=state=>({
    user: state.user
})

export default connect(mapStateToProps,null)(MainHeader)