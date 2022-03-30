import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Pokemon from './pages/Pokemon/Pokemon';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes> 
    </div>
  );
}

export default App
