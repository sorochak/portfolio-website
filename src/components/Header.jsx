import React, { useState, useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
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
import AdbIcon from "@mui/icons-material/Adb";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./BaseView";
import Logo from "./Logo";

const pages = ["about", "projects", "contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [appBarBackground, setAppBarBackground] = useState("transparent");
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // You can adjust this value as needed
        setAppBarBackground(theme.palette.background.default);
      } else {
        setAppBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme.palette.background.default]);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="absolute"
      elevation={0}
      style={{
        backgroundColor: appBarBackground,
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))"
            : "none",
        transition: "all 0.5s ease-in-out",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      onMouseEnter={() => setAppBarBackground(theme.palette.background.default)}
      onMouseLeave={() =>
        window.scrollY <= 50 && setAppBarBackground("transparent")
      }
    >
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Box sx={{ m: "10px" }}>
            <Logo />
          </Box>
          <RouterLink to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
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
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <RouterLink to={`/${page}`}>
                    <Typography
                      sx={{ color: theme.palette.text.primary }}
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </RouterLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <RouterLink
                key={page}
                to={`/${page}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
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
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
