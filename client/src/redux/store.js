import { configureStore } from "@reduxjs/toolkit";  
import authReducer from "./slices/authSlice";  
import { apiSlice } from "./slices/apiSlice";  
import taskReducer from "./slices/taskSlice";  

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,  
    auth: authReducer,  
    tasks: taskReducer, // Added tasks reducer for task management
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
  devTools: true,  
});

export default store;