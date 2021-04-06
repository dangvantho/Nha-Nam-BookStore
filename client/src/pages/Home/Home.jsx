import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import containerBgImg from '../../assets/images/bg-main.jpg'

import Slider from '../../components/Slider/Slider';
import {Link} from 'react-router-dom'
import BookCase from '../../components/BookCase/BookCase';


Home.propTypes = {
    
};
const useStyles=makeStyles(theme=>({
    root:{
        backgroundImage: `url(${containerBgImg})`,
        paddingTop: 16,
        borderBottom: '8px solid rgba(216,216,216,.6)',
    },
    container:{
        [theme.breakpoints.up('xs')]:{
            width: '98%',
        },
        [theme.breakpoints.up('md')]:{
            width: '100%',
            maxWidth: 1000,
        },
        margin: '0 auto',
    },
    
}))

function Home(props) {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Slider/>
                
                <BookCase/>
            </div>
        </div>
    );
}

export default Home;