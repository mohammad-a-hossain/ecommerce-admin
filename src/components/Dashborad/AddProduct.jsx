import React from 'react'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from 'react-hook-form'






import { Box, useTheme, Typography, Stack } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import  {tokens}  from '../../theme';
import { DataGrid} from '@mui/x-data-grid';
import {mockDataTeam } from '../../data/mockData'
import { Header } from '../Header';
import { DevTool } from '@hookform/devtools';
import Form from './Form';




const FormDialog=()=> {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [open, setOpen] = React.useState(false);

  const form = useForm({
        category:''
  })

  const {register, handleSubmit, formState, control}= form
  const { errors} = formState
  

  const onSubmit = (data) =>{
    console.log(data)
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  return (

    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        add product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add product</DialogTitle>
        <DialogContent Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Form/>
          <DevTool control={control}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}








export const AddProduct = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns=[
    {field:'id', headerName:'ID'},
    {field:'name',
     headerName:'Full Name',
    flex:1,
    cellClassName:'name-column--cell'},
    {
      field:'age',
      headerName:'Age',
      type:'number',
      headerAlign:'left',
      align:'left'
    },
    {
      field:'phone',
      headerAlign:'Phone Number',
      flex:1

    },
    {
      field:'email',
      headerName:'Email',
      flex:1
    },
    
    {
      field:'action',
      headerName:'Action',
      flex:1,
      renderCell:({row:{access}})=>{
        return(
          <Box 
          width='60%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent='center'
         
          borderRadius='4px'
          >
          {<ModeEditOutlinedIcon/>}
          {<DeleteForeverOutlinedIcon/>}
         
          <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
       
          </Typography>
          </Box>
        )
      }
    }

  ]
  return (
    <Box m='20px'>
    <Header title="product" />
    <button>{FormDialog()}</button>
    <Box
    m="40px 0 0 0"
    height="80vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
      "& .name-column--cell": {
        color: colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: colors.blueAccent[700],
        borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: colors.primary[400],
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: colors.blueAccent[700],
      },
      "& .MuiCheckbox-root": {
        color: `${colors.greenAccent[200]} !important`,
      },
    }}
    >
    <DataGrid  rows={mockDataTeam} columns={columns}/>
    </Box>
    
    </Box>
  )




}
