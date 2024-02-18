"use client"
import * as React from 'react';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme, Box, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UseApp } from './statnav';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import Home from './Home/page';
import Post from './Post/page';
import User from './Users/page';


const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: '#2f4975', // Set your desired background color here
      color: '#fff', // Set your desired text color here
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': {
          ...openedMixin(theme),
          backgroundColor: '#14394D', // Set your desired background color when open
          color: '#fff', // Set your desired text color when open
        },
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
          ...closedMixin(theme),
          backgroundColor: '#14394D', // Set your desired background color when closed
          color: '#fff', // Set your desired text color when closed
        },
      }),
    }),
  );
  
  // ... (your existing code)
  


export default function Dashboard() {
    const theme = useTheme();
    const open = UseApp ((state) => state.Nopen);

    // -------------INDAGDAG NA CODE PARA SA TABS--------------
    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value)






    // -------------CLOSING--------------

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
            
            <DrawerHeader>
            <IconButton>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>

            <Divider />
            <TabContext value={value.toString()}>
                <TabList
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', marginTop:3,}}
                >
                   <Tab
                        sx={{backgroundColor:''}}
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0,  alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <OtherHousesOutlinedIcon color="primary" sx={{fontSize: 30, marginLeft: -2.6,}}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Home" sx={{ color: 'Gray', alignItems: "center", opacity: open ? 1 : 0 }} />
                                  
                            </React.Fragment>
                            </ListItem>  
                        }
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <PhotoCameraFrontOutlinedIcon sx={{fontSize: 30, marginLeft:  -2.6, color: '#8a96a3' }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Post" sx={{color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />       
                            </React.Fragment>   
                            </ListItem>  
                        }
                   
                    />
                    <Tab
                        label={
                            <ListItem                
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
                            >
                            <React.Fragment sx={{ fontSize: 16, opacity: open ? 1 : 0, display: 'flex', alignItems: 'center' }}>

                                        <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                        >
                                        <GroupOutlinedIcon sx={{fontSize: 30, marginLeft:  -2.6, color: '#8a96a3' }}/>
                                        </ListItemIcon>                   
                                        <ListItemText primary="Users" sx={{color: '#8a96a3', alignItems: "center", opacity: open ? 1 : 0 }} />       
                            </React.Fragment>   
                            </ListItem>  
                        }
                   
                    />
                </TabList>
            </TabContext>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3,  }}>
            <DrawerHeader />
            <TabContext value={value.toString()}>
                <TabPanel value="0">
                    <h1 style={{marginTop: -30,}} >My Dashboard</h1>
                    <Home/>
                </TabPanel>
                <TabPanel value="1">
                    <h1 style={{marginTop: -25}}>Posts</h1>
                    <Post/>
                </TabPanel>
                <TabPanel value="2">           
                    <h1 style={{marginTop: -25}}>Users</h1>
                    <User/>
                </TabPanel>
            </TabContext>
        </Box>
    </Box>

     

 

    );
}