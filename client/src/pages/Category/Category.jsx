import React, { useEffect, useState } from 'react';
import {typesBook} from '../../constanes'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import commonStyle from '../styleComon'
import Slider from '../../components/Slider/Slider';
import {useParams} from 'react-router-dom'
import BookCase from '../../components/BookCase/BookCase';





function Category(props) {
    const classesCommon=commonStyle()
    let link= useParams()
    link= typesBook.find(value=>value.link==link.type)
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <Slider  />
                {link.link ? 
                  (<BookCase type={link} />) :
                  'Pages not found !!!' }
            </div>
        </div>
    );
}

export default Category;