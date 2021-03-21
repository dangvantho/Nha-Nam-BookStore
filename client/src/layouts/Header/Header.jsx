import React from 'react';
import {Box} from '@material-ui/core';
import headerStyle from './Header.style';
import HeaderTop from '../../components/HeaderTop/HeaderTop';


export default function SpacingGrid() {
  const classes = headerStyle()

  return (
    <div className={classes.root} >
      <div className={classes.topHeader} >
        <Box className={classes.container}>
          <HeaderTop/>
        </Box>
      </div>
      
      
    </div>
    
  );
}