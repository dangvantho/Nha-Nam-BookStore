import React, { useEffect } from 'react';
import {typesBook} from '../../constanes'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import commonStyle from '../styleComon'
import Slider from '../../components/Slider/Slider';
import {Link,useParams} from 'react-router-dom'
import BookCase from '../../components/BookCase/BookCase';





function Category(props) {
    const classesCommon=commonStyle()
    let type= useParams()
    type= typesBook.find(value=>value.link==type.type)
    // useEffect(()=>{
    //     console.log(type)
    //     type= typesBook.find(value=>value.link==type.type)
    // },[type])
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Slider  />
                {type.link ? 
                  (<BookCase type={type} />) :
                  'Pages not found !!!' }
            </div>
        </div>
    );
}

export default Category;