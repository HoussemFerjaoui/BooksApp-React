import booksReducer from './favBooks'
import loggedIn from './loggedIn';

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    booksReducer: booksReducer,
    loggedReducer: loggedIn
})

export default allReducers;