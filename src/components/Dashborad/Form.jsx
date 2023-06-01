
import { Box, TextField,Button, Input } from '@mui/material'
import  {Formik } from 'formik'
import * as yup from 'yup'
import { Header } from './../Header/index';

//import useMediaQuery from "@mui/material/useMediaQuery";

 const Form = () => {
  //const isNonMobile = useMediaQuery("(min-width:600px)");


  const handleFormSubmit=(values)=>{
    console.log(values)
  }
  
 
  return (
    <Box m='20px'>
    <Input
    fullWidth
    variant="filled"
    type="file"
    label="product images"
    name="image"
    multiple
    sx={{ gridColumn: "span 4" }}
  />
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
          label="Address One"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address1}
          name="addressOne"
          error={!!touched.addressOne && !!errors.addressOne}
          helperText={touched.addressOne && errors.addressOne}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
        fullWidth
        variant="filled"
        type="text"
        label="Address One"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.address1}
        name="addressOne"
        error={!!touched.addressOne && !!errors.addressOne}
        helperText={touched.addressOne && errors.addressOne}
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
            type="text"
            label="Contact Number"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.contact}
            name="contact"
            error={!!touched.contact && !!errors.contact}
            helperText={touched.contact && errors.contact}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address One"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.address1}
            name="addressOne"
            error={!!touched.addressOne && !!errors.addressOne}
            helperText={touched.addressOne && errors.addressOne}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address Two"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.addressTwo}
            name="addressTwo"
            error={!!touched.addressTwo && !!errors.addressTwo}
            helperText={touched.addressTwo && errors.addressTwo}
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
           <Button type="submit" color="secondary" variant="contained">
            Create New product
          </Button> 
        </Box>
      </form>
    )}
  </Formik>
    
    </Box>
  )

}
const initialValues={
  firstName:'',
  lastName: '',
  email:'',
  contact:'',
  addressOne:'',
  addressTwo:''
}
const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const checkoutSchema= yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email:yup.string().email('invalid email').required('requird'),
  contact:yup.string().matches(phoneRegExp,'phone number is not valid').required('requird'),
  addressOne:yup.string().required('required'),
  addressTwo:yup.string().required('required'),
})

export default Form