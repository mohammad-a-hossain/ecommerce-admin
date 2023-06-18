import React, {useEffect} from "react";
import { Box, TextField,Button, Input } from '@mui/material'
import  {Formik } from 'formik'
import * as yup from 'yup'
import { Header } from './components/Header/index';
import { Link ,useNavigate} from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux';
//import useMediaQuery from "@mui/material/useMediaQuery";
import {useRegistrationMutation } from './redux/adminApiSlice'
import { setCredentials } from "./redux/authSlice";
import{ toast }from 'react-toastify'


 const Register = () => {
  //const isNonMobile = useMediaQuery("(min-width:600px)");
  //const { adminInfo } = useSelector((state) => state.auth)

  const navigate= useNavigate()
  const dispatch = useDispatch()

  const [registration,{isLoading} ] =useRegistrationMutation()

 
 

  const handleFormSubmit= async (values)=>{
    
    try{
     const res =  await registration(values).unwrap()
         dispatch(setCredentials({...res}))

         if(res){
          toast.success('admin register success')
            navigate('/login')
         }
      
    

    }catch(err){
      toast.error(err.data.message || err.message)
    }

  

  }
  
 
  return (
    <Box m='20px'>
      register admin
<br/>

<br/>
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValues}
    validationSchema={checkoutSchema}
  >
    {({
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
    }) => (
      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
       
          <TextField
          fullWidth
          variant="filled"
          type="text"
          label="firstname"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstname}
          name="firstname"
          error={!!touched.firstname && !!errors.firstname}
          helperText={touched.firstname && errors.firstname}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastname}
        name="lastname"
        error={!!touched.lastname && !!errors.lastname}
        helperText={touched.lastname && errors.lastname}
        sx={{ gridColumn: "span 4" }}
      />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            sx={{ gridColumn: "span 4" }}
          />
        
           <TextField
           fullWidth
           variant="filled"
           type='password' 
           label='password'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.password}
           name="password"
           error={!!touched.password && !!errors.password}
           helperText={touched.password && errors.password}
           sx={{ gridColumn: "span 4" }}
         />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.mobile}
            name="mobile"
            error={!!touched.mobile && !!errors.mobile}
            helperText={touched.mobile && errors.mobile}
            sx={{ gridColumn: "span 4" }}
          />
       
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
           <Button type="submit" color="secondary" variant="contained">
           Register Admin
          </Button> 
        </Box>
      </form>
    )}
  </Formik>
  <p><Link to='/login'>signin</Link></p>
    </Box>
  )

}
const initialValues={
  firstname:'',
  lastname: '',
  email:'',
  mobile:'',
  password:''
}


const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const checkoutSchema= yup.object().shape({
  firstname: yup.string().required('required'),
  lastname: yup.string().required('required'),
  email:yup.string().email('invalid email').required('requird'),
  mobile:yup.string().matches(phoneRegExp,'phone number is not valid').required('requird'),
  password:yup.string().required('required'),
})

export default Register 