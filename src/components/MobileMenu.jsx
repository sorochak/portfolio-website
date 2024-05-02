import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="menu-button"
        size="large"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpenNavMenu}
        sx={{
          color: theme.palette.primary.main,
          position: "relative",
          zIndex: 1300,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseNav}
        sx={{
          color: theme.palette.primary.main,
          // position: "relative",
          zIndex: 1300,
        }}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        <MenuItem onClick={handleCloseNav}>
          <RouterLink to="/about" style={{ textDecoration: "none" }}>
            <Typography
              textAlign="center"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightRegular,
                letterSpacing: theme.typography.letterSpacing,
              }}
            >
              About
            </Typography>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleCloseNav}>
          <RouterLink to="/projects" style={{ textDecoration: "none" }}>
            <Typography
              textAlign="center"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightRegular,
                letterSpacing: theme.typography.letterSpacing,
              }}
            >
              Projects
            </Typography>
          </RouterLink>
        </MenuItem>
        <MenuItem onClick={handleCloseNav}>
          <RouterLink to="/contact" style={{ textDecoration: "none" }}>
            <Typography
              textAlign="center"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: theme.typography.fontWeightRegular,
                letterSpacing: theme.typography.letterSpacing,
              }}
            >
              Contact
            </Typography>
          </RouterLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
