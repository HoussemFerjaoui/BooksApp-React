import React, { useState, useEffect } from "react";
import useFetchBooks from "./hooks/useFetchBooks";
import { CssBaseline, Container, TextField, Button, Typography, Box, AppBar, Toolbar, CircularProgress, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SearchIcon from '@mui/icons-material/Search';

import websiteLogo from './assets/weblogo.svg'

import { useNavigate, Outlet, Route, Routes } from "react-router-dom";
import HelloWorldScene from "./scenes/HelloWorldScene";


// NOTE: WE DONT NEED THIS ANYMORE, CAN BE DELETED.

// {books.map((book) => <Typography variant='h6' color='initial'>{book.title}</Typography>)}
//  {books.map((book) => <Typography fontWeight='Bold' align='center' variant='h6' color='initial'>{book.title}</Typography>)}
const useStyles = makeStyles((theme) => ({
  ConatinerStyle: {
    //backgroundColor: 'red',
  },

  InputField: {
    //backgroundColor: 'blue'
  }
}));


// Main APP Componenet  *************************************************************************************************************************
function App() {

  // router hooks
  let navigate = useNavigate();

  // MUI hooks
  const classes = useStyles(); //Legacy


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

        <div style={{ width: '50%' }}>
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
        <div style={{ width: '50%' }}>
          {(!error && !loading && query != null) && <Typography sx={{ marginBottom: '3em' }} align='left' variant="h5" color="primary">Favorites:</Typography>}
          <FavBooksComponent favBooksList={favBooks}></FavBooksComponent>
        </div>

        {loading && <CircularProgress sx={{ position: 'absolute', left: '50vw' }} />}
        {error && <Alert sx={{ position: 'absolute', left: '46vw' }} severity="error">API Error</Alert>}
        

      </div>
    )
  }

  // FAV books componenet  -------------------------------------------------------------------------------------------------------------------------------------------------------
  const FavBooksComponent = (props) => {



    const { favBooksList } = props
    console.log('KKK')
    console.log(favBooksList)
    const [favBooks, setFavBooks] = useState([])

    useEffect(() => {
      setFavBooks(favBooksList)
    }, [favBooksList])

    // remove book Component -------------------------------------------------------------------------------------------------------------------------------------------------------
    const removeBook = (title) => {
      console.log(title)
      console.log(favBooks)
      setFavBooks(favBooks.filter(item => item !== title))
    }

    return (
      <Container maxWidth="md">
        {favBooks.map((title) =>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3em' }}>
            <Typography variant="h6" color="initial">{title}</Typography>
            <Button style={{ alignSelf: 'center', flexGrow: '0', flexShrink: '0', width: '20%' }} size='small' variant="outlined" color="primary" onClick={() => removeBook(title)}>
              Remove
            </Button>
          </div>
        )}
      </Container>
    )
  }

  const TempDiv = () => {
    return (
      <div>Hello Route</div>
    )
  }

  return (
    <>
      <CssBaseline />
      <Box sx={{ felxGrow: 1 }}>
        <AppBar position="relative" sx={{ backgroundColor: 'primary' }}>
          <Toolbar>
            <BookmarksIcon />
            <Typography sx={{ flexGrow: 1 , cursor:'pointer'}} variant="h6" fontWeight='bold' marginLeft='1em' onClick={() => { navigate('/') }}>
              BooksApp by ferj
            </Typography>
            <Button onClick={() => navigate('fav')} variant="outlined" color="inherit">
              Favorites
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={{ marginTop: '3em' }} maxWidth="xs">

        <Box component="img" sx={{ marginTop: "2em", marginBottom: '5em' }} alt="XQuant Logo" src={websiteLogo} />

        <div style={{ display: 'flex' }}>
          <TextField
            id="search-field"
            label="Search for books"
            onChange={(event) => handleInputChange(event)}
          />
          <Button sx={{ width: '40%' }} endIcon={<SearchIcon />} variant="contained" onClick={() => handleSearchButtonClick(search)}>Search</Button>

        </div>

      </Container>

      <Routes>
        <Route path='/' element={ <DisplayDataComponent books={books} query={query}></DisplayDataComponent> } />
        <Route path='/fav' element={<HelloWorldScene />} />
      </Routes>

    </>

  );
}

export default App;


// make fav list, append to it on click, and display/update
