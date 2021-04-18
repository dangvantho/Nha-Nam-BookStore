import {combineReducers} from '@reduxjs/toolkit'
import addressReducer from './address.reducer'
import bookReducer from './book.reducer'
import commentReducer from './comment.reducer'
import historyReducer from './history.reducer'
import notifyPagesReducer from './notifyPages.reducer'
import sessionUserReducer from './sessionUser.reducer'
import userReducer from './user.reducer'

const rootReducer=combineReducers({
    user:userReducer,
    books: bookReducer,
    session: sessionUserReducer,
    comments: commentReducer,
    notifyPages: notifyPagesReducer,
    address: addressReducer,
    history: historyReducer,
})

export default rootReducer