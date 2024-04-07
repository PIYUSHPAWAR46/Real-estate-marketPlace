import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'




export const store = configureStore({ 
    reducer: {user: userReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false})
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on