let initFavBooks = []

const booksReducer = (state = initFavBooks, action) => {
    switch (action.type) {
        case "BOOK_ADDED":
            return [...state, action.payload.bookTitle]
    
        case "BOOK_REMOVED":
            return [...state.filter( (book) => book != action.payload.bookTitle)]

        default:
            return state;
    }
}

export default booksReducer;