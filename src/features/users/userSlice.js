import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import{ toast }from 'react-toastify'


const getUserfromLocalStorage = localStorage.getItem("admininfo")
  ? JSON.parse(localStorage.getItem("admininfo"))
  : null;



export const registerUser = createAsyncThunk('auth/register', async(userData, thunkApi )=>{
        try{
            return await authService.register(userData)
        }catch(error){
         return thunkApi.rejectWithValue(error)
        }
})

export const loginAdmin = createAsyncThunk('auth/login', async(userData, thunkApi )=>{
    try{
        return await authService.login(userData)
    }catch(error){
     return thunkApi.rejectWithValue(error)
    }
})

export const logoutAdmin = createAsyncThunk('auth/logout', async(thunkApi )=>{
    try{
        return await authService.logout()
    }catch(error){
     return thunkApi.rejectWithValue(error)
    }
})



const initialState={
         user:getUserfromLocalStorage,
      isError:false,
    isSuccess:false,
    isLoading:false,
      message:''
}


export const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(registerUser.pending,(state) =>{ 
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state, action) =>{
            state.isLoading = false;
            state.isError= false;
            state.isSuccess = true;
            state.createUser= action.payload;
            if(state.isSuccess === true){
             toast.info('user created success')
            }
        }).addCase(registerUser.rejected,(state, action) =>{
            state.isLoading= false;
            state.isError=true;
            state.isSuccess= false;
            state.message= action.error;
            if(state.isError=== true){
                toast.error(action.error)
            }
        }).addCase(loginAdmin.pending,(state) =>{ 
            state.isLoading = true;
        }).addCase(loginAdmin.fulfilled,(state, action) =>{
            state.isLoading = false;
            state.isError= false;
            state.isSuccess = true;
            state.createUser= action.payload;
            if(state.isSuccess === true){

             toast.info('admin login success')
            }
        }).addCase(loginAdmin.rejected,(state, action) =>{
            state.isLoading= false;
            state.isError=true;
            state.isSuccess= false;
            state.message= action.error;
            if(state.isError=== true){
                toast.error(action.error)
            }
        }).addCase(logoutAdmin.pending,(state) =>{ 
            state.isLoading = true;
        }).addCase(logoutAdmin.fulfilled,(state, action) =>{
            state.isLoading = false;
            state.isError= false;
            state.isSuccess = true;
            state.action= null;
            if(state.isSuccess === true){

             toast.info('admin logout success')
            }
        }).addCase(logoutAdmin.rejected,(state, action) =>{
            state.isLoading= false;
            state.isError=true;
            state.isSuccess= false;
            state.message= action.error;
            if(state.isError=== true){
                toast.error(action.error)
            }
        })
    }
})

export default authSlice.reducer