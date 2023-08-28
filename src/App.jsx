import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={Home} /> */}
      </Routes>
    </Router>
  );
}

export default App;
