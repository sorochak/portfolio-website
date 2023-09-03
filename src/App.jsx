import { useMemo, createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  // Toggle function
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const appliedTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          background: {
            default: '#CAF0F8',  // Light mode background color
          },
        }
        : {
          background: {
            default: '#211E1E',  // Dark mode background color
          },
          }
        ),
    }
  })

  return (
      <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Home />
          <Footer />
          <Routes>
            <Route path="/" element={Home} />
          </Routes>
      </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
