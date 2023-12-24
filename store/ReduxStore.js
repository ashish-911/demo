import { configureStore } from '@reduxjs/toolkit'
import AuthenticationReducer from '../store/credentialSlice'


export default configureStore({
    reducer: {
        authentication: AuthenticationReducer,
    },
})