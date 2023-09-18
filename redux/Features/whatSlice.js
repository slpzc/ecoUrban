'use client'

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const whatSlice = createSlice({
    name: "userAdress",
    initialState,
    reducers: {
        setUserAdress: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setUserAdress } = whatSlice.actions

export default whatSlice.reducer