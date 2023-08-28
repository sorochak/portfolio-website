import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        {/* Uncomment when you add these pages */}
        {/* <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
  );
}

export default App;
