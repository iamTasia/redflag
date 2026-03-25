import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router'
import Landing from './section/Landing'
import Report from './section/Report'
import Feedpage from './section/Feedpage'
import Conirmation from './section/Conirmation'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/feed' element={<Feedpage/>}/>
        <Route path='/confirmation' element={<Conirmation/>}/>
      </Routes>
    </>
  )
}

export default App
