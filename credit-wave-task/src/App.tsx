import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<div>Login</div>} />
      </Routes>
    </Router>
  )
}

export default App
