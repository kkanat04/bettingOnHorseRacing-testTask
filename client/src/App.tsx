import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Bet from './pages/Bet/Bet';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/bet' element={<Bet />} />
    </Routes>
    </>
  )
}

export default App