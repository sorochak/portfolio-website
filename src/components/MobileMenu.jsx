import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    // This function will toggle the state of the drawer
    // It will also check if the click was made with a keyboard or not to maintain accessibility
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        sx={{
          color: theme.palette.primary.main,
          position: "relative",
          zIndex: 1300,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top" // Drawer will slide in from the right
        open={isOpen}
        disableScrollLock={true}
        onClose={toggleDrawer(false)}
      >
        <List
          sx={{ width: 150 }} // You can set the width of the Drawer
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component={RouterLink}
              to={item.path}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
