import { createContext, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import BaseRouter from "./BaseRouter";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const BaseView = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  // Toggle function
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const appliedTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#CAF0F8", // Light mode background color
            },
          }
        : {
            background: {
              default: "#211E1E", // Dark mode background color
            },
          }),
    },
  });

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Box>
          <Header />
          <BaseRouter />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default BaseView;
