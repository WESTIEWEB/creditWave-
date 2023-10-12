import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import OtpVerify from './pages/otp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app/otp-verify" element={<OtpVerify />} />
      </Routes>
    </Router>
  )
}

export default App
