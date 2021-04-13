import React from 'react';
import {Link} from 'react-router-dom'
import {Box,Grid,Hidden,Icon} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from '@material-ui/core/styles'
import footerTop from '../../assets/images/headerbg.png'
import shareIcon from '../../assets/images/shareicons2.png'
import footerBottom from '../../assets/images/slidebottombg.png'

const useStyles=makeStyles(theme=>({
    root:{
        maxWidth:1000,
        margin:'0 auto',
    },
    footerTop:{
        padding:'0 10px',
        [theme.breakpoints.down('md')]:{
            paddingRight: 0,
        },
        [theme.breakpoints.up('md')]:{
            padding: '20px 20px 20px 0',
        },
    },
    listLink:{
        listStyle:'none',
        padding:0,
        margin:0,
    },
    item:{
        padding:'10px 0 10px 0',
        borderBottom:'1px solid #c2c2c2',
    },
    link:{
        color:'#0f5731',
        textDecoration:'none',
        display:'flex',
        alignItems:'center',
        fontSize: 16,
    },
    avatar:{
        width: 16,
        height: 16,
        borderRadius: '50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:8,
        lineHeight:'14px',
        textAlign:'center',
        backgroundColor:'#0f5731',
        color:'white',
        marginRight:18,
    },
    icon:{
        fontSize:8,
        fontWeight:'bold',
    },
    social:{
        width:42,
        background:`url(${shareIcon})  no-repeat`,
        marginLeft:'auto',
        marginTop: 45,
        paddingRight: 8,
        display:'flex',
        alignItems:'center',
    },
    footerBottom:{
        borderTop:'4px solid rgba(216,216,216,.8)',
        background:`url(${footerBottom})`,
        textAlign:'center',
        fontSize:13,
        color:'white',
        paddingBottom: 8,
    },
}))

function Footer(props) {
    const classes=useStyles()
    return (
        <React.Fragment>
            <div style={{backgroundImage:`url(${footerTop})`}}>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={6} md={4} className={classes.footerTop}>
                        <ul className={classes.listLink}>
                            <li className={classes.item}>
                                <Link to='/pages/gioi-thieu' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className={classes.item}>
                                <Link to='/pages/chinh-sach-bao-mat' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Chính sách bảo mật
                                </Link>
                            </li>
                            <li className={classes.item}>
                                <Link to='/pages/hinh-thuc-thanh-toan' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Hình thức thanh toán
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.footerTop}>
                        <ul className={classes.listLink}>
                            <li className={classes.item}>
                                <Link to='/pages/lien-he' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Liên hệ
                                </Link>
                            </li>
                            <li className={classes.item}>
                                <Link to='/pages/thong-bao' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Thông báo
                                </Link>
                            </li>
                            <li className={classes.item}>
                                <Link to='/pages/quy-dinh-doi-tra' className={classes.link}>
                                    <span className={classes.avatar} >
                                        <ArrowForwardIosIcon className={classes.icon} />
                                    </span>
                                    Quy định đổi, trả sách
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Hidden smDown>
                       <a className={classes.social} href="https://www.facebook.com/nhanampublishing"></a>
                    </Hidden>
                    
                </Grid>
            </div>
            <Box className={classes.footerBottom}>
                <div style={{lineHeight:'20px',}}>© 2014 - Đặng Văn Hợi </div>
                <div style={{lineHeight:'20px',}}>Địa chỉ: 59 Đỗ Quang, phường Trung Hoà, quận Cầu Giấy, Hà Nội</div>
                <div style={{lineHeight:'20px',}}>
                    Giấy ĐKKD số 0101603420 do Sở KH-ĐT TP Hà Nội cấp ngày 21 
                    tháng 1 năm 2005 sửa đổi lần 5 ngày 20/3/2013
                </div>
            </Box>
        </React.Fragment>
        
    );
}

export default Footer;