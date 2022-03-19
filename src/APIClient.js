import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://openlibrary.org/';


// seperate API Client
export const getBooks = (query, dispatch, ACTIONS) => {
    axios.get(BASE_URL + 'search.json', {params: { title: query}})
        .then( (response) => {
            //console.log(response.data.docs.length);
            dispatch({type: ACTIONS.GET_DATA, payload: {books: response.data.docs}})
        } )
        .catch( (error) => {
            console.log(error);
            dispatch({type: ACTIONS.ERROR, payload: {error: error}})
        }) 
}



