import { useMemo, createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, GlobalStyles } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import './App.css';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  // Toggle function
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const appliedTheme = useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode],
  );

  return (
      <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            {/* <Route path="/" element={Home} /> */}
          </Routes>
      </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
