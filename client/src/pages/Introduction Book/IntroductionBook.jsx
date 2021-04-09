import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import ContentBook from '../../components/Introduction Book/ContentBook';
import { fetchOneBook } from '../../store/reducers/book.reducer';
import commonStyles from '../styleComon'
import { makeStyles } from '@material-ui/core';
import bg from '../../assets/images/headerbg.png'

const useStyles=makeStyles(theme=>({
    root:{
        margin:'10px 0',
        background:`url(${bg}) `,
        borderRadius:6,
        boxShadow:'0 0 5px #444',
        padding:30,
        minHeight: 300,
    },
}))
function IntroductionBook(props) {
    const classesCommon=commonStyles()
    const classes=useStyles()
    let {books}=props
    const dispatch=useDispatch()
    let book=''
    let idBook=useLocation().pathname.split('/')[2]
    for(let type in books.type){
        book= books.type[type].find(data=>data._id===idBook)
        if(book) break
    }
    if(!book && !books.book ){
        dispatch(fetchOneBook(idBook))
    } else if(books.book._id!==idBook) dispatch(fetchOneBook(idBook))
    
    
    
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <div className={classes.root}>
                    {book || books.book ? <ContentBook book={book ? book: books.book } />: 'Page not found '}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps=state=>({
    books: state.books,
})

export default connect(mapStateToProps,null)(IntroductionBook)