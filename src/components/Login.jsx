import React, { useState } from "react";
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DevTool } from '@hookform/devtools';
import Button from '@mui/material/Button';
import { useTheme, Stack } from '@mui/material';
import { useForm} from 'react-hook-form'
import  {tokens}  from '../theme';



export default function Login() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const form = useForm({
    email:'',
    password:''
})


  const {register, handleSubmit, formState, control}= form
  const { errors} = formState
  
  
  const onSubmit = (data) =>{
    console.log(data)
  }


 
  return (
    <div>
    <h1>login form</h1>
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2 } width={400} color={colors.grey[100]}>
          <TextField 
          label='email'
           type='email' 
           {...register('email',{required:'a email is required',})}
           error={!!errors.email} 
           helperText={errors.email?.message} 
           />

           <TextField 
           label='password'
            type='password' 
            {...register('password',{required:'a password is required',})}
            error={!!errors.password} 
            helperText={errors.password?.message} 
            />
          
        <Button type='submin' variant='contained'  >Login </Button>
          
          </Stack>
          </form>
          <DevTool control={control}/>
          </div>
  )
 }