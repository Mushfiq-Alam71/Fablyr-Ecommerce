import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { FaRocket } from 'react-icons/fa';
import UserLayout from './components/Layout/UserLayout';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>{ /* User Layout */}</Route>
        <Route>{ /* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  )
}
