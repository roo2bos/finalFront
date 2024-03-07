import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import signupApi from "../../api/signUp"; 


interface User{
  username: string;
  userId: string;
  nickname : string;
  email: string;
  password: string;
  confirmPassword: string;
  agree : boolean;
}

interface SignUpState {
  user: User | null;
  loading: boolean;
  error: string | null; 
}

const initialState: SignUpState = {
  user: null,
  loading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    signUpError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const signUpUser = (userdata: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(signUpStart());
    const user = await signupApi(userdata); 
    dispatch(signUpSuccess(user));
  } catch (error : any) {
    dispatch(signUpError(error.message));
  }
};

export const { signUpStart, signUpSuccess, signUpError } = signUpSlice.actions;

export default signUpSlice.reducer;