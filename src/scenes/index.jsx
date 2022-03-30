import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import App from "../App"

export default function Root() {
  return (
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
  )
}


// Home.jsx: Appbar, logo
//      Search Componenet
//      Result Componenet
//      Favorite Componenet