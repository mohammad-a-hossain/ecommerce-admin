
import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import CategoryService from "./catService";
import{ toast }from 'react-toastify'


const initialState = {
    Categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const createCategory = createAsyncThunk(
    "Category/createCategory",
    async (categoryData, thunkAPI) => {
      try {
        return await CategoryService.createCategory(categoryData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
export const CategorySlice = createSlice({
    name:'Category',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(createCategory.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdCategory = action.payload;
            if(state.isSuccess === true){
              toast.info('category created success')
             }
          })
          .addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
          })
    }
})

export default CategorySlice.reducer;