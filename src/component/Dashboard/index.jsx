import React from 'react'

import { Box, Button,IconButton, useTheme,Typography} from '@mui/material';
import { Header } from '../Header';
import { tokens } from './../../theme';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
//import StatBox from '../UI-components/StatBox';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
//mport LineChart from './../LineChart/index';
//import { mockTransactions } from '../../data/mockData';
//import ProgressCircle from '../progressCircle';
// import BarChart from './../BarChart/index';
// import TrafficIcon from "@mui/icons-material/Traffic";
// import GeographyChart from '../Geography';


export const Dashboard = () => {
  const theme =useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
    {/* HEADER */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr:"10px" }} />
          Download Reports
        </Button>
      </Box>
      </Box>
      {/* ----------------- */}

       
      </Box>
      
  
  )
}
