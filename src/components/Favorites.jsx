import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from '@mui/material'
 
import { useSelector, useDispatch } from 'react-redux'

import { removebookfromfav } from "../actions/actions";


export default function Favorites(props) {
    
    // redux hooks
    const favBooks = useSelector(state => state.booksReducer.favbooks) 
    const dispatch = useDispatch();

    const { favBooksList } = props
    //console.log('KKK')
    //console.log(favBooksList)
    //const [favBooks, setFavBooks] = useState([])

    /* useEffect(() => {
      setFavBooks(favBooksList)
    }, [favBooksList]) */

    // remove book Component -------------------------------------------------------------------------------------------------------------------------------------------------------
    const removeBook = (title) => {
      //console.log(title)
      //console.log(favBooks)
      dispatch( removebookfromfav(title) )
      //setFavBooks(favBooks.filter(item => item !== title))
    }

 
    return (
        <Container maxWidth="md"> Hello Favorites
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

