import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './features/signUpSlice'
import loginReducer from './features/loginSlice'

const store = configureStore({
    reducer : {
        signup : signUpReducer,
        login : loginReducer
    }
})

export default store

