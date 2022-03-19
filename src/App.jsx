import React, {useState} from "react";
import useFetchBooks from "./useFetchBooks";
import { Container, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles( (theme) => ({
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
  
  const [query, setQuery] = useState(true)

  /* function getData() {
    setQuery(!query);
    //console.log(event);
  } */
  
  
  const { books, loading, error } = useFetchBooks(query);

  const classes = useStyles();

  console.log("rerendering the App component")

  console.log(books.data)
  return (
    <Container className={classes.ConatinerStyle}>
      {loading && <h1>Loading..</h1>}
      {error && <h1>error..</h1>}
      <h1>{books.length}</h1>
      <Button  variant="contained" onClick={() => setQuery(!query)}>Search Button</Button>

    </Container>
  );
}

export default App;
