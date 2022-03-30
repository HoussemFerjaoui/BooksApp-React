import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function HelloWorldScene() {
    let navigate = useNavigate();
    return (
    <div>This is a different page , using the router without render option
        <Button onClick={() => navigate('/')} variant="contained" color="primary">
            Home
        </Button>
    </div>
  )
}
