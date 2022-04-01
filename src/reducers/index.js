import booksReducer from './favBooks'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    booksReducer: booksReducer,
})

export default allReducers;