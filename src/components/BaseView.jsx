import { createContext, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, GlobalStyles } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import BaseRouter from "./BaseRouter";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const StyleContext = createContext();

const BaseView = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  // Toggle function
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const isMobileLandscape = useMediaQuery(
    "(max-width: 930px) and (orientation: landscape)"
  );

  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.38)" : "rgba(213, 255, 252, 0.3)";

  const textShadow =
    mode === "dark"
      ? "3px 3px 10px #ffffff70, 0 0 35px #ffffff90, 0 0 25px #ffffffa0"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

  const sharedStyles = {
    isMobileLandscape,
    childBoxBackgroundColor,
    textShadow,
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
        md: 1024, // Medium devices
        lg: 1440, // Large devices
        xl: 1920, // Extra-large devices
      },
    },
  });

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <StyleContext.Provider value={sharedStyles}>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                scrollbarWidth: "none", // Hide scrollbar for Firefox
                msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
              },
              "body::-webkit-scrollbar": {
                display: "none", // Hide scrollbar for WebKit browsers (Chrome, Safari)
              },
              "::-webkit-scrollbar": {
                display: "none", // Ensure it's applied to all scrollbars
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BaseRouter />
            </Box>

            <Footer />
          </Box>
        </ThemeProvider>
      </StyleContext.Provider>
    </ColorModeContext.Provider>
  );
};

export default BaseView;
