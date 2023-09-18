'use client'

import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userSlice from './Features/userSlice'
import whatSlice from './Features/whatSlice'
import {userApi} from "@/redux/services/auth/userApi";

const reducers = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    userSlice,
    whatSlice,
})

export const store = configureStore({
    reducer: reducers,
    // middleware: [thunk],
    middleware: [...getDefaultMiddleware()],
    devTools: true
})
