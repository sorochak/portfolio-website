import React, { useState, useContext, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Import for handling declarative navigation in the app
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./BaseView";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const pages = ["about", "projects"];

const Header = () => {
  const [appBarBackground, setAppBarBackground] = useState("transparent");
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const location = useLocation();

  // This effect listens for the window's scroll event to adjust the AppBar's background
  useEffect(() => {
    // Set the initial background based on screen width
    if (window.innerWidth <= theme.breakpoints.values.md) {
      setAppBarBackground(theme.palette.background.default);
    }

    const handleResize = () => {
      if (window.innerWidth <= theme.breakpoints.values.md) {
        setAppBarBackground(theme.palette.background.default);
      } else if (window.scrollY <= 50) {
        setAppBarBackground("transparent");
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    handleResize();

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.palette.background.default, theme.breakpoints.values.md]);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const textShadow =
    theme.palette.mode === "light"
      ? "1px 1px 20px #fff, 0 0 25px #fff, 0 0 15px #fff"
      : "1px 1px 20px #fff0, 0 0 25px #ffffff70, 0 0 15px #ffffff80";

  const graphicalShadow =
    theme.palette.mode === "light"
      ? "drop-shadow(2px 2px 1.5px rgba(255,255,255,1))"
      : "drop-shadow(2px 2px 1.5px rgba(255,255,255,1))";

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      {" "}
      {/* Container for AppBar */}
      <AppBar
        position="absolute"
        // Set the shadow depth to zero, making the AppBar flat without shadows.
        elevation={0}
        style={{
          // Set the background color of the AppBar, which changes dynamically based on user interactions.
          backgroundColor: appBarBackground,
          backgroundImage: {
            xs: "none",
            md:
              theme.palette.mode === "light"
                ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))"
                : "none",
          },
          transition: "all 0.5s ease-in-out",
        }}
        // When the mouse enters the AppBar, change its background to the default theme background.
        onMouseEnter={() => {
          if (window.innerWidth > theme.breakpoints.values.md) {
            setAppBarBackground(theme.palette.background.default);
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth > theme.breakpoints.values.md) {
            setAppBarBackground("transparent");
          }
        }}
      >
        {/* The container constrains the width of its children and centralizes them. */}
        <Container maxWidth="lg">
          {/* TOOL BAR */}
          <StyledToolbar disableGutters>
            {/* Left portion of the AppBar */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              {/* The items on the left: Logo for medium and up screens, Typography, and Menu items for medium and up screens, and the Menu icon for small screens */}
              {/* Logo for medium and up screens */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  ml: "10px",
                  mr: "5px",
                }}
              >
                <RouterLink to="/" style={{ textDecoration: "none" }}>
                  <Logo style={{ filter: graphicalShadow }} />
                </RouterLink>
              </Box>

              {/* A navigational link to the root ("/") path. */}
              <RouterLink to={"/"} style={{ textDecoration: "none" }}>
                {/* Typography component displaying the text "AUSTEN SOROCHAK" */}
                <Typography
                  variant="h6"
                  // noWrap
                  sx={{
                    mr: 2,
                    // On extra-small screens, the text is hidden.
                    // On medium screens and up, it's displayed as a flex item.
                    // Effectively, the text "AUSTEN SOROCHAK" is hidden on mobile views.
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                    textShadow: textShadow,
                  }}
                >
                  AUSTEN SOROCHAK
                </Typography>
              </RouterLink>

              {/* Menu items for medium and up screens */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <RouterLink
                    key={page}
                    to={`/${page}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      sx={{
                        my: 2,
                        textShadow: textShadow,
                        color:
                          location.pathname === `/${page}` ||
                          (location.pathname === "/" && page === "about")
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                        display: "block",
                      }}
                    >
                      {page}
                    </Button>
                  </RouterLink>
                ))}
              </Box>

              {/* Menu icon for small screens */}
              <Box
                sx={{
                  // This box and its child components are displayed on extra-small screens.
                  // On medium screens and above, they are hidden.
                  // Contains mobile navigation options.
                  display: { xs: "flex", md: "none" },
                }}
              >
                {/* <BasicMenu /> */}
                <MobileMenu />
              </Box>
            </Box>

            {/* Center portion: Logo for small screens */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                flexGrow: 1,
                flexShrink: 1,
                marginTop: "8px",
                width: "100%",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Logo style={{ filter: graphicalShadow }} />
              </RouterLink>
            </Box>

            {/* Right portion:  Only the Light Mode icon button */}
            {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          > */}
            <IconButton
              sx={{
                ml: 1,
                color: theme.palette.text.primary,
                filter: graphicalShadow,
              }}
              onClick={toggleColorMode}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon
                  fontSize="large"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
              ) : (
                <Brightness4Icon
                  fontSize="large"
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
              )}
            </IconButton>
            {/* </Box> */}
          </StyledToolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
