import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";
import {userIdCheckApi, userNicknameCheckApi } from "../../api/userCheck"; 


interface UserCheckId{
  userId: boolean;
  nickname : boolean;
}

const initialState: UserCheckId = {
  userId: false,
  nickname: false,
};

const userCheckSlice = createSlice({
  name: "userCheck",
  initialState,
  reducers: {
    userCheckId : (state, action: PayloadAction<boolean>) => {
      state.userId = action.payload
    },
    userCheckNickname : (state, action: PayloadAction<boolean>) => {
      state.nickname = action.payload;
    },
  },
});

export const userIdCheck = (userdata: any) => async (dispatch: Dispatch) => {
  try {
    const user = await userIdCheckApi(userdata); 
    dispatch(userCheckId(user));
  } catch (error : any) {
    throw error 
  }
};

export const userNicknameCheck = (userdata: any) => async (dispatch: Dispatch) => {
  try {
    const user = await userNicknameCheckApi(userdata); 
    dispatch(userCheckNickname(user));
  } catch (error : any) {
    throw error 
  }
};

export const { userCheckId, userCheckNickname} = userCheckSlice.actions;

export default userCheckSlice.reducer;
