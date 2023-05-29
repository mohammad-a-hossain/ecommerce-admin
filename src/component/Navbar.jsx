

//import React from 'react'
import {Box,IconButton, useTheme} from '@mui/material'
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme'; 
import InputBase from '@mui/material/InputBase'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




export const Navbar = () => {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
    const colorMode =useContext(ColorModeContext)


  return (
    <Box display= 'flex' justifyContent='space-between' p={2}>
    <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
    <InputBase sx={{ml:2,flex:1}} placeholder='search'/>
    <IconButton type='button' sx={{p:1}}>  
    <SearchOutlinedIcon />
    </IconButton>
  
   
    </Box>
    <Box display='flex'>
    <IconButton onClick={colorMode.toggleColorMode}>
    {
        theme.palette.mode === 'dark' ?(<DarkModeOutlinedIcon/>) :(<LightModeOutlinedIcon/>)
    }
    </IconButton>
    <IconButton>
    <NotificationImportantOutlinedIcon/>
    </IconButton>
    <IconButton>
    <Person2OutlinedIcon/>
    </IconButton>
    <IconButton>
    <SettingsOutlinedIcon/>
    </IconButton>
    </Box>
    
    </Box>
  )
}





/* 
import React from 'react'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme'; 


import {
    AppBar,
    //Button,
   // Box,
   // Typography,
    IconButton,
   InputBase,
    Toolbar,
   // Menu,
   // MenuItem,
    useTheme,
   
  } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import Search from '@mui/icons-material/Search'

//import {setMode} from '../theme'
import FlexBetween from './StyleComponent/FlexBetween';
//import { useDispatch } from 'react-redux'


 const Navbar = () => {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
    const colorMode =useContext(ColorModeContext)

  return (
    <AppBar sx={{position:'static', background:'none', boxShadow:'none'}}>
    <Toolbar sx={{justifyContent:'space-between'}}>
    <FlexBetween>
    <IconButton onClick={colorMode.toggleColorMode}>
    <MenuIcon />
     </IconButton>
    </FlexBetween>

    <FlexBetween 
    backgroundColor={colors.primary[400]}
     borderRadius='9px' gap='3rem'
    >
    <InputBase placeholder='serach..' />
    <IconButton >
    <Search/>
     </IconButton>
    </FlexBetween>
    <FlexBetween>
    <IconButton onClick={colorMode.toggleColorMode}>
    {
        theme.palette.mode === 'dark' ?(<DarkModeOutlinedIcon/>) :(<LightModeOutlinedIcon/>)
    }
    </IconButton>
    </FlexBetween>
    </Toolbar>
    
    </AppBar>
  )
}
export default Navbar */