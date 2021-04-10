import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {fetchByFilter} from '../../store/reducers/book.reducer'
import {connect,useDispatch} from 'react-redux'
import { Box } from '@material-ui/core';
import {Link} from 'react-router-dom'
import useStyles from './styleFilterBooks'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'


SameCategoryBooks.propTypes = {
    
};


function SameCategoryBooks(props) {
    const classes=useStyles()
    const {filter,title,hiddenBook,type,books}=props
    const dispatch=useDispatch()
    // Make animation for list book
    const [coordinate,setCoordinate]=useState(0)
    const [showBtnLeft,setShowBtnLeft]=useState(false)
    const [showBtnRight,setShowBtnRight]=useState(false)
    const refUl=useRef()
    const ref=useRef()
    function handleMove(value){
        let ul=refUl.current
        let length=list.length
        if(ref.current.clientWidth<list.length*150){
            if(coordinate===0){
                setShowBtnLeft(false)
                setShowBtnRight(true)
            } else if(coordinate<0){
                setShowBtnRight(true)
                if(coordinate<=-150*(length-1)) setShowBtnLeft(false)
                else setShowBtnLeft(true)
            }
        }
        if(value==='left') {
            if(coordinate>=-150*(length-1)){
                ul.style.transform=`translateX(${coordinate-150}px)`
                setCoordinate(coordinate-150)
            }else {
                ul.style.transform=`translateX(0px)`
                setCoordinate(0)
            }
        } else {
            if(coordinate>=0){
                ul.style.transform=`translateX(0px)`
                setCoordinate(0)
            }else {
                ul.style.transform=`translateX(${coordinate+150}px)`
                setCoordinate(coordinate+150)
            }
        }
    }
    let list
    if(books.filterBooks[type]){
        list=books.filterBooks[type]
    } else list=[]
    if(hiddenBook){
        list=list.filter(book=>book._id!==hiddenBook)
    }
    useEffect( ()=>{
        if(ref.current.clientWidth<list.length*150){
            setShowBtnRight(true)
        }
        dispatch(fetchByFilter(filter))
    },[filter[type]])
    
    return (
        <div className={classes.root}>
            <div className={classes.title} ><span>{title}</span></div>
            <Box overflow='hidden' ref={ref}>
                <ul className={classes.list} ref={refUl}>
                    {list.map((book,index)=>(
                        <li className={classes.item}  key={index}>
                            <Link to={'/book/'+book._id}>
                              <img className={classes.imageBook} src={`data:image/png;base64,${book.image}`} alt=""/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Box>
            {showBtnLeft && (
            <Box className={classes.moveBtn} left={0} onClick={()=>handleMove('left')} >
                <ChevronLeftIcon/>
            </Box>) }
            
            {showBtnRight && (
            <Box className={classes.moveBtn} right={0} onClick={()=>handleMove('left')} >
                <ChevronRightIcon/>
            </Box>) }
        </div>
    );
}
const mapStateToProps=state=>({
    books:state.books
})
export default connect(mapStateToProps,null)(SameCategoryBooks)