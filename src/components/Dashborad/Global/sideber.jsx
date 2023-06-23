import React from 'react'
import {Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
//import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useTheme, Box, Typography, IconButton } from '@mui/material';
import { tokens } from '../../../theme';
import { useState } from 'react';
import user from '../../../assets/user.png'
import {useSelector } from "react-redux";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


 





 const Item = ( {title, to, icon, selected, setSelected }) => {

  

  //  console.log('sid',adminInfo)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    
    </MenuItem>
  );
}




 const Sideber = () => {
  const theme = useTheme()
  const colors= tokens(theme.palette.mode)
  const [isCollapsed,setIsCollapsed] = useState(false)
  const [ selected, setSelected] = useState()

  const authUser  = useSelector((state) => state.auth)
 
 console.log('this is sidebar',authUser)

  return (
    <Box sx={{
      "& .sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .sidebar-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .sidebar-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .sidebar-inner-item:hover": {
        color: "#a7acf0 !important",
      },
      "& .sidebar-menu-item.active": {
        color: "#a7acf0 !important",
      },
    }}>
    <Sidebar collapsed={isCollapsed}>
      <Menu>
        <MenuItem 
        onClick={()=>setIsCollapsed(!isCollapsed) }
        icon = {isCollapsed ? <MenuOutlinedIcon/>:undefined}
        style={{margin:"10px 0 20px 0",
            color:colors.grey[100]}}
        >
        {
          !isCollapsed && (
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
            >
            <Typography variant='h3' color={colors.grey[100]}>
            Admin
            </Typography>
            <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
            <MenuOutlinedIcon />
            </IconButton>
            </Box>
          )
        }
        </MenuItem>
        {
          !isCollapsed && (
            <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={user}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
          
            <Box textAlign="center">
              <Typography
                variant="h4"
                color={colors.grey[100]}
              
                sx={{ m: "10px 0 0 0" }}
              >
               
              
               {authUser.user !== null ? (authUser.user.firstname):( <p>adminName</p>) }
             
          
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[500]}>
               the super admin
              </Typography>
            </Box>
          </Box>
          )
        }

    
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
        <Item
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

        <Typography
          variant="h6"
          color={colors.grey[100]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Pages
        </Typography>
       
         <Item 
          title="Add Category"
          to="/addcategory"
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        /> 
        <Item
          title="Add Subcategory"
          
          href='/subcategory'
          icon={<ContactsOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Add Product"
          to="/addproduct"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

   
        <Item
          title="Oreders"
          to="/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Cupons"
          to="/geography"
          icon={<MapOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

   <FormGroup aria-label="position" row>
      <FormControlLabel
          value="logout"
          control={<Switch color="primary" />}
          label="logout"
          labelPlacement="logout"
        />
        
        </FormGroup>

      </Box>
      </Menu>

   
    </Sidebar>
    </Box>
  )
}
export default Sideber