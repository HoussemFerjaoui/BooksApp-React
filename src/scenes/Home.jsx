// this scene should containe the main appbar/logo
// search input + button componenet
// search result component
// fav result component
//
// Home.jsx: Appbar, logo
//      Search Componenet
//      Result Componenet
//      Favorite Componenet


import React, { useState, useEffect } from "react";
import useFetchBooks from "./hooks/useFetchBooks";
import { CssBaseline, Container, TextField, Button, Typography, Box, AppBar, Toolbar, CircularProgress, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SearchIcon from '@mui/icons-material/Search';

import websiteLogo from './assets/weblogo.svg'

import { useNavigate, Outlet, Route, Routes } from "react-router-dom";
import HelloWorldScene from "./scenes/HelloWorldScene";


// Main APP Componenet  *************************************************************************************************************************
function App() {

  // router hooks
  let navigate = useNavigate(); 

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
        
      </Container>

      <Routes>
        {/* <Route path='/' element={ <DisplayDataComponent books={books} query={query}></DisplayDataComponent> } /> */}
        <Route path='/fav' element={<HelloWorldScene />} />
      </Routes>

    </>

  );
}

export default App;

// make fav list, append to it on click, and display/update
