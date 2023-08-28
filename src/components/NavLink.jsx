import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';

const NavLink = ({ to, label, onClick }) => {
    return (
        <ListItem onClick={onClick}>
            <ListItemText>
                <RouterLink to={to}>{label}</RouterLink>
            </ListItemText>
        </ListItem>
    );
}

export default React.memo(NavLink);