import React,{useState} from 'react'
import {Box,IconButton, useTheme} from '@mui/material'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../../theme'; 
import InputBase from '@mui/material/InputBase'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector, useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
//import { useLogoutMutation } from '../../../redux/adminApiSlice';
//import { logout } from '../../../redux/authSlice';
import{ toast }from 'react-toastify'
import { logoutAdmin } from './../../../features/users/userSlice';


export const Topbar = () => {
    const theme = useTheme()
    const colors= tokens(theme.palette.mode)
    const colorMode =useContext(ColorModeContext)

  //  const { admininfo } = useSelector((state) => state.adminInfo)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };


     const dispatch= useDispatch()
     const navigate=  useNavigate()

   // const [logoutApiCall] = useLogoutMutation();


    const handleClose = () => {
       setAnchorEl(null);
    };

    
    const adminLogout =async()=>{ 
      console.log('logout')
      dispatch(logoutAdmin())
      navigate('/')
      //  try{
      //   await logoutApiCall().unwrap()
      //   dispatch(logout())
      //   toast.success('admin sign out success')
      //   navigate('/')
      //  }catch(err){
      //   console.log(err)
      //  }

    }
    



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

    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
    <IconButton>
    <SettingsOutlinedIcon/>
    </IconButton>
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
     <MenuItem >Profile</MenuItem>
     
      <MenuItem onClick={adminLogout}>Logout</MenuItem>
    </Menu>
  </div>
  
    </Box>
    
    </Box>
  )
}
