import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Wallet from './components/dashboardComponents/Wallet';
import KYC from './components/dashboardComponents/KYC';
import Transactions from './components/dashboardComponents/Transactions';
import Settings from './components/dashboardComponents/Settings';
import Investment from './components/dashboardComponents/Investment';
import { AuthProvider } from './AuthContext';
import HomeOffice from './backoffice/HomeOffice';
import Users from './backoffice/components/Users';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/wallet" element={<Wallet />} />
          <Route path="/dashboard/kyc" element={<KYC />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/investment" element={<Investment />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/backoffice/dashobard" element={<HomeOffice />} />
          <Route path="/backoffice/users" element={<Users />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
