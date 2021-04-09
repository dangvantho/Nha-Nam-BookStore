import React from 'react';
import {typesBook} from '../../constanes'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import commonStyle from '../styleComon'
import Slider from '../../components/Slider/Slider';
import {Link} from 'react-router-dom'
import BookCase from '../../components/BookCase/BookCase';





function Home(props) {
    const classesCommon=commonStyle()
    
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Slider  />
                {typesBook.map((type,index)=>(<BookCase type={type} key={index}/>))}
                
            </div>
        </div>
    );
}

export default Home;