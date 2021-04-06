import React from 'react';
import {Box, Hidden} from '@material-ui/core';
import headerStyle from './Header.style';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import MainHeader from '../../components/MainHeader/MainHeader.jsx';
import Navbar from '../../components/Navbar/Navbar';


export default function SpacingGrid() {
  const classes = headerStyle()

  return (
    <div className={classes.root} >
      <div className={classes.topHeader} >
        <Box className={classes.container}>
          <HeaderTop/>
        </Box>
      </div>
      <div className={classes.mainHeader}>
        <Box className={classes.container}>
          <MainHeader/>
        </Box>
      </div>
      <Hidden xsDown>
        <div className={classes.navbar}>
          <Box className={classes.container}>
            <Navbar/>
          </Box>
        </div>
      </Hidden>
      
    </div>
    
  );
}