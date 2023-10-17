import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
<Routes>
      <Routes path='/' element={<Home/> } />
      <Routes path='/books/create' element={<CreateBooks />} />
      <Routes path='/books/details/:id' element={<ShowBook />} />
      <Routes path='/books/edit/:id' element={<EditBook />} />
      <Routes path='/books/delete/:id' element={<DeleteBook />} />
</Routes>
  )
}

export default App