import React, { useEffect, useRef, useState } from 'react';
import {Box,Grow, Hidden} from '@material-ui/core'
import {} from '@material-ui/icons'
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import useStyles from './StyleSlider'




function Slider() {
    const slide=[slide1,slide2,slide3]
    const [currentSlice,setCurrentSlice]=useState(0)
    const classes=useStyles()
    function handleChangeSlide(value){
        setCurrentSlice(value)
    }
    useEffect(()=>{
        let interval= setInterval(() => {
            if(currentSlice===2) setCurrentSlice(0)
            else setCurrentSlice(currentSlice+1)
        }, 3000)
        return ()=>clearInterval(interval)
    })
    return (
        <Hidden xsDown>
            <Box display='flex' flexWrap='nowrap' style={{overflow:'hidden'}}>
                <Grow in={currentSlice===0} direction='left' timeout={1500} >
                    <Box 
                      className={`${classes.root} ${currentSlice===0 && classes.show}`}  
                      style={{backgroundImage: `url(${slide[0]})`}} 
                    >
                    </Box>
                </Grow>
                <Grow in={currentSlice===1} direction='left' timeout={1500} >
                    <Box 
                      className={`${classes.root} ${currentSlice===1 && classes.show}`} 
                      style={{backgroundImage: `url(${slide[1]})`}} 
                    >
                    </Box>
                </Grow>
                <Grow in={currentSlice===2} direction='left' timeout={1500} >
                    <Box 
                      className={`${classes.root} ${currentSlice===2 && classes.show}`} 
                      style={{backgroundImage: `url(${slide[2]})`}} 
                    >
                    </Box>
                </Grow>
            </Box>
            <div className={classes.bottom}>
                <ul className={classes.step} >
                    {slide.map((value,index)=>(
                        <li 
                          key={index} 
                          className={`${classes.dot} ${currentSlice===index ? classes.dotActive: ''}`}
                          onClick={()=>handleChangeSlide(index)}
                        ></li>
                    ))}
                </ul>
            </div>
        </Hidden>
        
    );
}

export default Slider;