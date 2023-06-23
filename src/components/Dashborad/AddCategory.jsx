import React from 'react'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm} from 'react-hook-form'
import  {useDispatch,useSelector } from 'react-redux'
import { createCategory } from '../../features/category/catSlice';





import { Box, useTheme, Typography, Stack } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import  {tokens}  from '../../theme';
import { DataGrid} from '@mui/x-data-grid';
import {mockDataTeam } from '../../data/mockData'
import { Header } from '../Header';
import { DevTool } from '@hookform/devtools';




const FormDialog=()=> {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [open, setOpen] = React.useState(false);

 // const newCategory = useSelector((state) => state.Category);
 // console.log(newCategory)

  const disaptach= useDispatch()
  //const navigate= useNavigate()

  const form = useForm({
        category:''
  })

  const {register, handleSubmit, formState, control}= form
  const { errors} = formState
  

  const onSubmit = (data) =>{
    console.log(data)
    disaptach(createCategory(data))
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
        add category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent  >
         
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2 } width={400} color={colors.grey[100]}>
          <TextField 
          label='category'
           type='text' 
           {...register('category',{required:'a category is required',})}
           error={!!errors.category} 
           helperText={errors.category?.message} />
          
       
           <Button type='submin' variant='contained'  > Add </Button>
          
          </Stack>
          </form>
          <DevTool control={control}/>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}








export const AddCategory = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns=[
    {field:'id', headerName:'ID'},
    {field:'name',
     headerName:'Full Name',
    flex:1,
    cellClassName:'name-column--cell'},
   
    {
      field:'phone',
      headerAlign:'Phone Number',
      flex:1

    },
    
    {
      field:'accessLevel',
      headerName:'Access level',
      flex:1,
      renderCell:({row:{access}})=>{
        return(
          <Box 
          width='60%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent='center'
          backgroundColor={
            access==='admin'?colors.greenAccent[600]:access === 'manager'? colors.greenAccent[700]:colors.greenAccent[700]
          }
          borderRadius='4px'
          >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
          {access}
          </Typography>
          </Box>
        )
      }
    }

  ]
  return (
    <Box m='20px'>
    <Header title="category" />
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
