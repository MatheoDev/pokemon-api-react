import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes> 
    </div>
  );
}

export default App
