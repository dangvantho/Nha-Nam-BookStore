import {combineReducers} from '@reduxjs/toolkit'
import bookReducer from './book.reducer'
import sessionUserReducer from './sessionUser.reducer'
import userReducer from './user.reducer'

const rootReducer=combineReducers({
    user:userReducer,
    books: bookReducer,
    session: sessionUserReducer,
})

export default rootReducer