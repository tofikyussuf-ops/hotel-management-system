import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PageNotFound from './pages/NotFound';
import Settings from './pages/Settings';
import Users from './pages/Users';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/Cabins" element={<Cabins />} />
          <Route path="/Bookings" element={<Bookings />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Users" element={<Users />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
