import React, { useState, useContext } from "react";
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
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./BaseView";
import Logo from "./Logo";

const pages = ["about", "projects", "contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();

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
      position="static"
      style={{
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
      }}
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
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
