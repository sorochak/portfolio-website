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
            primary: {
              main: "#2B544C",
            },
            background: {
              default: "#CAF0F8", // Light mode background color
            },
          }
        : {
            primary: {
              main: "#67D7CA",
            },
            background: {
              default: "#211E1E", // Dark mode background color
            },
          }),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 0.5s ease-in-out",
          },
        },
      },
    },
    // Adding custom breakpoints
    breakpoints: {
      values: {
        xs: 0, // Extra-small devices
        sm: 600, // Small devices
        md: 1024, // Medium devices - adjusted to start at a wider screen width
        lg: 1440, // Large devices
        xl: 1920, // Extra-large devices
      },
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
