import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import UserLayout from './components/Layout/UserLayout';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function App() {
  return (

    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route>
          { /* Admin Layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
