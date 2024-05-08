import React, { useState } from "react";
import { Drawer, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "./NavLink";

const NavDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClose = () => setOpenDrawer(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={handleClose}>
        <List>
          <NavLink to="/" label="About" onClick={handleClose} />
          <NavLink to="/projects" label="Projects" onClick={handleClose} />
          <NavLink to="/contact" label="Contact" onClick={handleClose} />
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default NavDrawer;
