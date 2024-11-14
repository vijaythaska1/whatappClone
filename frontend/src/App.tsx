import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './page/UserPage/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
