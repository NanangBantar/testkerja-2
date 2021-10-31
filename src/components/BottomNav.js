import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';

const BottomNavItems = (statement) => {
    return (
        statement.map((val, index) =>
            <BottomNavigationAction key={index} label={val} icon={<MenuIcon />} />
        )
    );
};

const BottomNav = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
            >
                {BottomNavItems(["Home", "Promotions", "Others"])}
            </BottomNavigation>
        </Paper>
    );
}

export default BottomNav;