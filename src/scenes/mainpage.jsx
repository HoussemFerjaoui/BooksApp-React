import React from 'react'
import { Container, Typography, Button, Box, Appbar, AppBar, Toolbar } from '@mui/material'
import BookmarksIcon from '@mui/icons-material/Bookmarks';

export default function CustomAppbar() {
    return (
        <>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <BookmarksIcon />
                    <Typography variant="h6" fontWeight='bold' marginLeft='1em'>
                        BooksApp
                    </Typography>
                </Toolbar>
            </AppBar>

        </>
    )
}
