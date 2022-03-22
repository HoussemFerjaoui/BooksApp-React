import React, { useState, useEffect } from "react";
import useFetchBooks from "./hooks/useFetchBooks";
import { CssBaseline, Container, TextField, Button, Typography, Box, AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

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


// Main APP Componenet
function App() {

  const [query, setQuery] = useState(true)

  const { books, loading, error } = useFetchBooks(query);

  const classes = useStyles();

// AllDataComponent, mainly has search result, but uses favcomponenet, for state access (favbooks)
  const DisplayDataComponent = (props) => {
    const { books } = props

    const [favBooks, setFavBooks] = useState([])
    
    const addtofavs = (book) => {
      setFavBooks([...favBooks, book])
      console.log(favBooks)
      console.log(favBooks.length)
    }

    //console.log(books)
    return ( 
    <div style={{display: 'flex', marginTop: '5em', justifyContent:'space-between'}}>
          <div style={{width: '50%'}}>
            {books.map( (book) =>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.3em'}}>
                <Typography key={books.key} fontWeight='Bold' align='left' variant='h6' color='initial'>{book.title}</Typography>
                <Button style={{alignSelf: 'center', flexGrow:'0', flexShrink:'0', width: '20%'}} size='small' variant="outlined" color="primary" onClick={() => addtofavs(book.title)}>
                  Add to fav
                </Button>
              </div>
              )}
          </div>
      <div style={{width: '50%'}}>
      <FavBooksComponent favBooksList={favBooks}></FavBooksComponent>
    </div>
    </div>
     )
  }

// FAV books componenet
const FavBooksComponent = (props) => {

  const { favBooksList } = props
  console.log('KKK')
  console.log(favBooksList)
  const [favBooks, setFavBooks] = useState([])

  useEffect(() => {
    setFavBooks(favBooksList)
  }, [favBooksList])
  

  const removeBook = (title ) => {
    console.log(title)
    console.log(favBooks)
    setFavBooks(favBooks.filter( item => item !== title ))
  }
  
  return(
    <Container maxWidth="md">
      {favBooks.map( (title) => 
      <div style={{display: 'flex', justifyContent:'space-between', marginBottom: '0.3em'}}>
        <Typography variant="h6" color="initial">{title}</Typography>
            <Button style={{alignSelf: 'center', flexGrow:'0', flexShrink:'0', width: '20%'}} size='small' variant="outlined" color="primary" onClick={() => removeBook(title)}>
            Remove
          </Button>
      </div>
    )}
    </Container>
  )
}


  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="primary">
                <Toolbar>
                    <BookmarksIcon />
                    <Typography variant="h6" fontWeight='bold' marginLeft='1em'>
                        BooksApp
                    </Typography>
                </Toolbar>
            </AppBar>
      <Container sx={{ position: 'relative' }} className={classes.ConatinerStyle}>
        {loading && <h1>Loading..</h1>}
        {error && <h1>error..</h1>}
        </Container>

        <Container sx={{marginTop: '3em'}} maxWidth="xs">
          <Typography align='center' variant="h3" color="initial">APP</Typography>
        </Container>

        <Container maxWidth="disable">
          <DisplayDataComponent books={books}></DisplayDataComponent>
          <Button variant="contained" onClick={() => setQuery(!query)}>Search Button</Button>
        </Container> 

      
    </>

  );
}

export default App;


// make fav list, append to it on click, and display/update
