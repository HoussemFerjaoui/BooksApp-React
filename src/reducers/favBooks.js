//import actions from '../actions/actionType'

/* let initFavBooks = []

const booksReducer = (state = initFavBooks, action) => {
    switch (action.type) {
        case actions.bookAdded:
            return [...state, action.payload.bookTitle]
    
        case actions.bookRemoved:
            return [...state.filter( (book) => book != action.payload.bookTitle)]

        default:
            return state;
    }
}

export default booksReducer; */
 

// migrating to redux-actions flux
import { handleActions } from 'redux-actions'
import actions from '../actions/actionType'


let defaultState = []

const booksReducer = handleActions( {
    [actions.bookAdded]: (state, {payload}) => { return [...state , payload.bookTitle] },
    [actions.bookRemoved]: (state, {payload}) => { return [...state.filter( (book) => book!=payload.bookTitle )] }    
    },
    defaultState
)
 

export default booksReducer;
