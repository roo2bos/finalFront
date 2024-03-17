import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from './features/signUpSlice';
import loginReducer from './features/loginSlice';
import userCheckReducer from './features/userIdCheck';

const store = configureStore({
  reducer: {
    signup: signUpReducer,
    login: loginReducer,
    usercheck: userCheckReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
