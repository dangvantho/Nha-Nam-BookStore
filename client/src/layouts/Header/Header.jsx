import React from 'react';
import {Box} from '@material-ui/core';
import headerStyle from './Header.style';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import MainHeader from '../../components/MainHeader/MainHeader.jsx';


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
      
    </div>
    
  );
}