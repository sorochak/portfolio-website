import React, { useEffect, useState } from 'react';
import { AppBar,
         Toolbar, 
         Typography, 
         Button, 
         IconButton, 
         Drawer, 
         List, 
         ListItem 
} from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        } else {
            setMobileView(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);


    return (
        // <nav style={navBarStyles}>
        //     <Link to="/" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Home</Link>
        //     <Link to="/projects" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Projects</Link>
        //     <Link to="/contact" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Contact</Link>
        // </nav>
    );
}

export default Header;