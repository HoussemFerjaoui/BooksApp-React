import { useReducer, useEffect } from "react";
import * as api from '../API/APIClient'

// ACTIONS TYPES
const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, books: [] }
        case ACTIONS.GET_DATA:
            console.log('dispatched')
            //console.log(state)
            //console.log('^^  the dispatched state')
            return { ...state, loading: false, books: action.payload.books }
        case ACTIONS.ERROR:
            return { ...state, loading:false, books: [], error: action.payload.error }
        
        // incase nothing, return the current state
        default:
            console.log('nothing**********************************')
            return state
    }
}
//params, page
export default function useFetchBooks(query) {
    //console.log(query.toString())
    //console.log('this hook is being called ')
    
    const [ state, dispatch ] = useReducer(reducer, { books: [], loading: false } );
    //console.log(state)
    
    useEffect( () => {
        if (query==null) return;
        dispatch({type: ACTIONS.MAKE_REQUEST})
        api.getBooks(query, dispatch, ACTIONS);

    }, [query])

    //console.log(state)
    return state
}

