import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import ExpenseTracker from './Pages/ExpenseTracker'
import Err404 from './Pages/Err404'
import "./App.css"

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/ExpenseTracker' element={<ExpenseTracker/>} />
      <Route path='*' element={<Err404/>} />
    </Routes>
    </>
  )
}

export default App