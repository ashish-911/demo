import { createSlice } from '@reduxjs/toolkit'
// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
    name: 'Authentication',
    initialState: {
        token: "",
        isAuthenticated: false,
    },
    reducers: {
        authenicate: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            AsyncStorage.setItem('token', state.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            AsyncStorage.removeItem('token');

        }

    },
})

// Action creators are generated for each case reducer function
export const { authenicate, logout } = authSlice.actions;

export default authSlice.reducer;