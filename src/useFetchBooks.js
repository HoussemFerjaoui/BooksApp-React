import { useReducer, useEffect } from "react";
import axios from 'axios'

// useFetchJobs = useFetchBooks


const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://openlibrary.org/';


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
        dispatch({});
        /* axios.get(BASE_URL + 'search.json', {params: { title: query}})
        .then( (response) => {
            //console.log(response.data.docs.length);
            dispatch({type: ACTIONS.GET_DATA, payload: {books: response.data.docs}})
        } )
        .catch( (error) => {
            console.log(error);
            dispatch({type: ACTIONS.ERROR, payload: {error: error}})
        }) */
        
    }, [query])

    //console.log(state)
    return state
        

}