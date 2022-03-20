import React, { useState } from "react";
import useFetchBooks from "./hooks/useFetchBooks";
import { CssBaseline, Container, TextField, Button, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomAppbar from './scenes/mainpage'



const useStyles = makeStyles((theme) => ({
  ConatinerStyle: {
    //backgroundColor: 'red',
  },

  InputField: {
    //backgroundColor: 'blue'
  }
}));


function App() {
  //console.log('rerendering the componenet before the useFetchbooks')

  //const [params, setParams] = useState({})

  let favList = []

  

  const [query, setQuery] = useState(true)

  const { books, loading, error } = useFetchBooks(query);

  const classes = useStyles();

  console.log("rerendering the App component")

  // {books.map((book) => <Typography variant='h6' color='initial'>{book.title}</Typography>)}

  //console.log(books)



  const DisplayDataComponent = (props) => {
    const { books } = props

    const [favBooks, setFavBooks] = useState([])
    
    const addtofavs = (book) => {
      setFavBooks([...favBooks, book])
      console.log(favBooks)
      console.log(favBooks.length)
    }

    console.log(books)
    return ( <div>
      
          {books.map( (book) =>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.3em'}}>
              <Typography key={books.key} fontWeight='Bold' align='left' variant='h6' color='initial'>{book.title}</Typography>
              <Button variant="contained" color="primary" onClick={() => addtofavs(book.title)}>
                Add to fav
              </Button>
            </div>
            )}
            <div>
            <FavBooksComponent favBooksList={favBooks}></FavBooksComponent>
          </div>
    </div>
     )
  }

const FavBooksComponent = (props) => {

  const { favBooksList } = props
  
  return(
    <Container maxWidth="md">
      {favBooksList.map( (title) => <Typography variant="h6" color="initial">{title}</Typography>)}
    </Container>
  )
}

//  {books.map((book) => <Typography fontWeight='Bold' align='center' variant='h6' color='initial'>{book.title}</Typography>)}

  return (
    <>
      <CssBaseline />
      <CustomAppbar></CustomAppbar>
      <Container sx={{ position: 'relative' }} className={classes.ConatinerStyle}>
        {loading && <h1>Loading..</h1>}
        {error && <h1>error..</h1>}

        <Container maxWidth="xs">

          <DisplayDataComponent books={books}></DisplayDataComponent>

        </Container>

        <Button variant="contained" onClick={() => setQuery(!query)}>Search Button</Button>
      </Container>
    </>

  );
}

export default App;


// make fav list, append to it on click, and display/update
