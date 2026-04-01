import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';

export default function App() {
  return (

    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route>
          { /* Admin Layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
