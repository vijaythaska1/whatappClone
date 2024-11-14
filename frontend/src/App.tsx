import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './page/UserPage/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/profile' element={<Profile />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
