import React, { useState,useEffect } from "react";
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DevTool } from '@hookform/devtools';
//import Button from '@mui/material/Button';
import { useTheme, Stack,  } from '@mui/material';
import { useForm} from 'react-hook-form'
import  {tokens}  from './theme';
import { useNavigate ,Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
//import { adminsignin, authenticate  } from "./components/functions/admin";
import { useLoginMutation} from './redux/adminApiSlice'

import { setCredentials } from "./redux/authSlice";




export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const { adminInfo } = useSelector((state) => state.auth)


  const navigate= useNavigate()
  const dispatch = useDispatch()

  const [login,{isLoading} ] =  useLoginMutation()


  useEffect(()=>{
    if(adminInfo){
      navigate('/dashboard')
    }
  },[navigate, adminInfo])






  const form = useForm({
    email:'',
    password:''
})
  const {register, handleSubmit, formState, control} = form
  const { errors} = formState






  const onSubmit = async (body,e) =>{
 
        e.preventDefault();
    try{
      const res = await login(body).unwrap()
      dispatch(setCredentials({...res}))
      navigate('/')

    }catch(err){
      console.log(err.data.message || err.message)
    }
    // adminsignin(data).then(response => {
    //         console.log('SIGNIN SUCCESS', response);
    //         // save the response (user, token) localstorage/cookie
    //         authenticate(response, () => {

    //             // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
               
    //        navigate('/dashboard')
    //         });
    //     })
    //     .catch(error => {
    //         console.log('SIGNIN ERROR', error.response.data);
    //        // toast.error(error.response.data.error);
    //     });

  }


 
  return (
    <div>
    
    <p><Link to='/register'>signup</Link></p>
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
          
        <button type='submit' color={colors.grey[700]}  >Login </button>
          
          </Stack>
          </form>
          <DevTool control={control}/>
          </div>
  )
 }