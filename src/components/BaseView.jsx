import { createContext, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, GlobalStyles } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import BaseRouter from "./BaseRouter";

// Context to provide color mode toggle function throughout the app
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Context to provide shared styles throughout the app
export const StyleContext = createContext();

const BaseView = ({ children }) => {
  // State variable to track the current color mode ('light' or 'dark')
  const [mode, setMode] = useState("dark"); // Set initial mode to "dark"

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Detects if the screen is a mobile landscape
  const isMobileLandscape = useMediaQuery(
    "(max-width: 930px) and (max-height: 500px) and (orientation: landscape)"
  );

  // Determines background color for child elements based on the current mode
  const childBoxBackgroundColor =
    mode === "dark" ? "rgba(0, 0, 0, 0.38)" : "rgba(213, 255, 252, 0.3)";

  // Applies text shadow styling based on the current mode
  const textShadow =
    mode === "dark"
      ? "3px 3px 10px #ffffff70, 0 0 35px #ffffff90, 0 0 25px #ffffffa0"
      : "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff";

  // Stores shared style values to be provided throughout the app
  const sharedStyles = {
    isMobileLandscape,
    childBoxBackgroundColor,
    textShadow,
  };

  // Creates a custom theme based on the current color mode
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
      // Apply custom baseline styles
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
    // Provide color mode context to the entire app
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {/* Provide shared style context to the entire app */}
      <StyleContext.Provider value={sharedStyles}>
        {/* Apply the theme using the ThemeProvider component */}
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
            {/* Renders the header component */}
            <Header />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Renders the main content router */}
              <BaseRouter />
            </Box>
            {/* Renders the footer component */}
            <Footer />
          </Box>
        </ThemeProvider>
      </StyleContext.Provider>
    </ColorModeContext.Provider>
  );
};

export default BaseView;
