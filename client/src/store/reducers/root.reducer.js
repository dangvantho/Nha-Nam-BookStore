import {combineReducers} from '@reduxjs/toolkit'
import bookReducer from './book.reducer'
import commentReducer from './comment.reducer'
import notifyPagesReducer from './notifyPages.reducer'
import sessionUserReducer from './sessionUser.reducer'
import userReducer from './user.reducer'

const rootReducer=combineReducers({
    user:userReducer,
    books: bookReducer,
    session: sessionUserReducer,
    comments: commentReducer,
    notifyPages: notifyPagesReducer,
})

export default rootReducer