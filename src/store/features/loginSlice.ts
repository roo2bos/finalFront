import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import {loginApi , logoutApi} from "../../api/login";

interface User {
    userId: string;
    password: string;
}

interface LoginState {
    user: User | null;
    loading: boolean;
    error: string | null;
    isLoggedin: boolean;
}

const initialState: LoginState = {
    loading: false,
    user: null,
    error: null,
    isLoggedin: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.user = action.payload;
            state.isLoggedin = true;
        },
        loginError: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedin = false;
        }
    }
});

export const loginUser = (userdata: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(loginStart());
        const user = await loginApi(userdata);
        dispatch(loginSuccess(user));
    } catch (error : any) {
        dispatch(loginError(error));
    }
};

export const logoutUser = () => async (dispatch : Dispatch) => {
    try{
        await logoutApi()
        dispatch(logout())
    }catch(error : any){
        dispatch(loginError(error));
    }
}

export const { loginStart, loginSuccess, loginError, logout } = loginSlice.actions;

export default loginSlice.reducer;
