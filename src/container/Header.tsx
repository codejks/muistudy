import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideNavMenu from '../components/SideNavMenu';
export default function Header() {
    return (
        <>
        <AppBar color='transparent'>
            <Toolbar>
                <SideNavMenu />
                <Typography variant="h6" component="div" style={{marginLeft:'70px'}}>
                    MUI Menu
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
}