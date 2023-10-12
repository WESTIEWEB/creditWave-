import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import OtpVerify from './pages/otp';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/otp-verify" element={<OtpVerify />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        

      </Routes>
    </Router>
  )
}

export default App
