import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from './features/signUpSlice'

const store = configureStore({
    reducer : {
        signup : signUpReducer
    }
})

export default store

