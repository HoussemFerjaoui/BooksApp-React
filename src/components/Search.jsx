import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import useFetchBooks from '../hooks/useFetchBooks';



export default function Search() {
    // Main App STUFF
    const [query, setQuery] = useState(null)
    const [search, setSearch] = useState(null)
    const { books, loading, error } = useFetchBooks(query); // this custom hook contains useEffect which looks for param change(dep) , so it execute everytime query updates

    const handleInputChange = (event) => {
    setSearch(event.target.value);
    }

    const handleSearchButtonClick = (value) => {
    setQuery(value);
    console.log(value)
    }

// AllDataComponent, mainly has search result, but uses favcomponenet, for state access (favbooks) --------------------------------------------------------------------
const DisplayDataComponent = (props) => {
    const { books, query } = props

    const [favBooks, setFavBooks] = useState([])

    const addtofavs = (book) => {
      setFavBooks([...favBooks, book])
    }

    return (
      <div style={{ marginRight: '5em', marginLeft: '5em', display: 'flex', marginTop: '5em', justifyContent: 'space-between' }}>

        <div>
          {(!error && !loading && query != null) && <Typography sx={{ marginBottom: '3em' }} align='left' variant="h5" color="primary">Results:</Typography>}
          {books.map((book) =>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3em' }}>
              <Typography key={books.key} fontWeight='Bold' align='left' variant='h6' color='initial'>{book.title}</Typography>
              <Button style={{ alignSelf: 'center', flexGrow: '0', flexShrink: '0', width: '20%' }} size='small' variant="outlined" color="primary" onClick={() => addtofavs(book.title)}>
                Add to fav
              </Button>
            </div>
          )}
        </div>
       {/*  <div style={{ width: '50%' }}>
          {(!error && !loading && query != null) && <Typography sx={{ marginBottom: '3em' }} align='left' variant="h5" color="primary">Favorites:</Typography>}
          <FavBooksComponent favBooksList={favBooks}></FavBooksComponent>
        </div> */}

        {loading && <CircularProgress sx={{ position: 'absolute', left: '50vw' }} />}
        {error && <Alert sx={{ position: 'absolute', left: '46vw' }} severity="error">API Error</Alert>}
        

      </div>
    )
  }



    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '5em' }}>
        <TextField
            style={{width: "70%", alignSelf: 'center'}}
          id="search-field"
          label="Search for books"
          onChange={(event) => handleInputChange(event)}

        />
        <Button sx={{ width: '40%', alignSelf: 'center', marginTop:'4em' }} endIcon={<SearchIcon />} variant="contained" onClick={() => handleSearchButtonClick(search)}>Search</Button>

        <DisplayDataComponent books={books} query={query}></DisplayDataComponent>

      </div>
  )
}
