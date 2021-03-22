import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {Grid,Hidden, Box,IconButton} from '@material-ui/core'
import useStyles from './StyleMainHeader'
import {Search} from '@material-ui/icons'
import cartImg from '../../assets/images/cart.png'
import logoImg from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'



function MainHeader(props) {
    const classes=useStyles()
    return (
        <Grid container spacing={2}>
            <Hidden xsUp>
                <Grid item xs={3}>
                    
                </Grid>
            </Hidden>
            <Hidden xsDown>
                <Grid className={classes.root} item xs={6}>
                   <Link to='/'>
                      <img className={classes.logo} src={logoImg} alt=""/>
                   </Link>
                </Grid>
                <Grid className={classes.root} item xs={6}>
                    
                    <Box position='absolute' bottom={70} right={8} >
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