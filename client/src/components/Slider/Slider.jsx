import React, { useEffect, useState } from 'react';
import {Box,Slide,Grow} from '@material-ui/core'
import {} from '@material-ui/icons'
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import useStyles from './StyleSlider'




function Slider(props) {
    const slide=[slide1,slide2,slide3]
    const [check,setCheck]=useState(true)
    const [step,setStep]=useState(0)
    const [currentSlice,setCurrentSlice]=useState(0)
    const classes=useStyles()
    function handleChangeSlide(value){
        setCheck(false)
        setStep(value)
        setCurrentSlice(value)
    }
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setCheck(true)
        },700)
        return ()=>clearTimeout(timeout)
    },[check])
    console.log(step,currentSlice,'111')
    return (
        <React.Fragment>
            <Grow in={check} direction='left' timeout={600} >
                <Box 
                  className={classes.root} 
                  style={{backgroundImage: `url(${slide[currentSlice]})`}} 
                >
                </Box>
            </Grow>
            <div className={classes.bottom}>
                <ul className={classes.step} >
                    {slide.map((value,index)=>(
                        <li 
                          key={index}
                          className={`${classes.dot} ${step==index ? classes.dotActive: ''}`}
                          onClick={()=>handleChangeSlide(index)}
                        ></li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
        
    );
}

export default Slider;