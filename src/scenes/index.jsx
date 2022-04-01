import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./Home"

export default function Root() {
  return (
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
  )
}


