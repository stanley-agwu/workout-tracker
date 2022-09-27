import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
