import { configureStore} from "@reduxjs/toolkit";
import authReducer from '../features/users/userSlice'
import  CategoryReducer  from "../features/category/catSlice";

 const store = configureStore({
    reducer:{
        auth:authReducer,
        Category: CategoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store