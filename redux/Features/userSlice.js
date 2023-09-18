'use client'

import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
    "user/createUser",
    async ({username, password}) => {
        const result = await axios.post(`http://127.0.0.1:8000/api/register-user/`, {username, password});
        console.log(result)
        console.log(result.data)
        return result.data
    }
)
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({username, password}) => {
        console.log('вызвал фетч')
        const result = await axios.post('http://127.0.0.1:8000/api/login_user/', { username, password });
        console.log('fetch response ', result)
        console.log('дебажу нейм, пассворд: ', username, password)
        return result.data
    }
)

export const loginUserById = createAsyncThunk(
    "user/loginUserById",
    async ({id}) => {
        console.log('вызвал фетч')
        const result = await axios.post('http://127.0.0.1:8000/api/auth_user/', { id });
        return result.data
    }
)


// export const checkUserToken = createAsyncThunk(
//     "user/checkUserToken",
//     (_, thunkAPI) => {
//         console.log('ЧЕКАЮ ТОКЕН')
//         const token = getCookie('user-token')
//         if(token){
//             console.log('вызываю фетч')
//             return thunkAPI.dispatch(fetchUserData(token ?? null))
//         } else {
//             return false
//         }
//     }
// )

const userAdapter = createEntityAdapter()

export const userSlice = createSlice({
    name: "userData",
    initialState: userAdapter.getInitialState({
        loadingStatus: 'idle',
        error: null,
        user: null,
        selectId: 2,
        userAddress: null
    }),
    reducers: {
        setUserAddress: (state, action) => {
            state.userAddress = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload[0]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
            .addCase(createUser.pending, (state, action) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                console.log('установлен ACTION')
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
            .addCase(loginUserById.pending, (state, action) => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(loginUserById.fulfilled, (state, action) => {
                console.log('установлен user')
                let {user_id, user_name} = action.payload
                state.user = {user_id, user_name}
                state.loadingStatus = 'idle'
                state.error = null
            })
            .addCase(loginUserById.rejected, (state, action) => {
                state.loadingStatus = 'failed';
                state.error = action.error
            })
    }
})

export const {setUserAddress, setUser} = userSlice.actions

export default userSlice.reducer