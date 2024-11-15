import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './page/UserPage/UserProfile';
import FriendProfile from './page/UserPage/FriendProfile';
import SignIn from './page/login/SignIn';
import SignUp from './page/login/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/FriendProfile' element={<FriendProfile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Layout' element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
