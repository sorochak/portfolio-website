import React, { useState, useContext, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./BaseView";
import Logo from "./Logo";

const pages = ["about", "projects", "contact"];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [navMenuAnchor, setNavMenuAnchor] = useState(null);
  const [appBarBackground, setAppBarBackground] = useState("transparent");
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const menuButtonRef = React.useRef(null);

  // This effect listens for the window's scroll event to adjust the AppBar's background
  useEffect(() => {
    // Set the initial background based on screen width
    if (window.innerWidth <= theme.breakpoints.values.md) {
      setAppBarBackground(theme.palette.background.default);
    }

    const handleScroll = () => {
      if (
        window.scrollY > 50 ||
        window.innerWidth <= theme.breakpoints.values.md
      ) {
        setAppBarBackground(theme.palette.background.default);
      } else {
        setAppBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme.palette.background.default, theme.breakpoints.values.md]);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const handleOpenNavMenu = (event) => {
    setNavMenuAnchor(menuButtonRef.current);
  };

  const handleCloseNavMenu = (page) => {
    setNavMenuAnchor(null);
  };

  return (
    <AppBar
      // position={isHomePage ? "absolute" : "relative"}
      position="relative"
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
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      // When the mouse enters the AppBar, change its background to the default theme background.
      onMouseEnter={() => setAppBarBackground(theme.palette.background.default)}
      // When the mouse leaves the AppBar, if the current scroll position is less than or equal to 50, set the AppBar background to transparent.
      onMouseLeave={() =>
        window.scrollY <= 50 && setAppBarBackground("transparent")
      }
    >
      {/* The container constrains the width of its children and centralizes them. */}
      <Container maxWidth="xl">
        {/* TOOL BAR */}

        <StyledToolbar disableGutters>
          {/* Left portion of the AppBar */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* The items on the left: Logo for medium and up screens, Typography, and Menu items for medium and up screens, and the Menu icon for small screens */}
            {/* Logo for medium and up screens */}
            <Box sx={{ display: { xs: "none", md: "block" }, ml: "10px", mr: "5px" }}>
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <Logo />
            </RouterLink>  
            </Box>

            {/* A navigational link to the root ("/") path. */}
            <RouterLink to={"/"} style={{ textDecoration: "none" }}>
              {/* Typography component displaying the text "AUSTEN SOROCHAK" */}
              <Typography
                variant="h6"
                noWrap
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
                    key={page}
                    sx={{
                      my: 2,
                      color: theme.palette.text.primary,
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
              <IconButton
                ref={menuButtonRef}
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={navMenuAnchor}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(navMenuAnchor)}
                onClose={handleCloseNavMenu}
                // This menu is visible only on extra-small screens.
                // Hidden on medium screens and up.
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page === "about" ? (
                      <a
                        href="/#about-section"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </a>
                    ) : (
                      <RouterLink
                        to={`/${page}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </RouterLink>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Center portion: Logo for small screens */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              flexGrow: 1,
              flexShrink: 1,
              width: "100%",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <Logo />
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
            sx={{ ml: 1, color: theme.palette.text.primary }}
            onClick={toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon
                fontSize="large"
                sx={{ color: theme.palette.primary.main }}
              />
            ) : (
              <Brightness4Icon
                fontSize="large"
                sx={{ color: theme.palette.primary.main }}
              />
            )}
          </IconButton>
          {/* </Box> */}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
