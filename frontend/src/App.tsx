import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/Navbar'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

const App: React.FC = () => {
  const { state: { user} } = useAuthContext();
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={!user ? <Signin /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
