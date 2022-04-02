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


let defaultState = {
    favbooks: []
}
//[...state.favbooks.filter( (book) => book!=payload.bookTitle )]
const booksReducer = handleActions( {
    [actions.bookAdded]: (state, {payload}) => ({ 
        ...state, 
        favbooks: [...state.favbooks, payload.bookTitle]
     }),
    [actions.bookRemoved]: (state, {payload}) => ({ 
        ...state, 
        favbooks: state.favbooks.filter((book) => book != payload.bookTitle)
     })    
    },
    defaultState
)
 

export default booksReducer;
