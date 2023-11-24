import { createSlice } from "@reduxjs/toolkit";

export interface UserSliceState {
  user: boolean;
  registerPage: string;
  location: string;
  menu: boolean;
}

const initialState: UserSliceState = {
  user: false,
  registerPage: "SignUp",
  location: "/",
  menu: true,
};

export const userSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.user = true;
    },
    userSignOut: (state) => {
      state.user = false;
    },
    Login: (state) => {
      state.registerPage = "Login";
    },
    ForgetPassword: (state) => {
      state.registerPage = "ForgetPassword";
    },
    SignUp: (state) => {
      state.registerPage = "SignUp";
    },
    Verification: (state) => {
      state.registerPage = "Verification";
    },
    menuHandeler: (state) => {
      state.menu = !state.menu;
    },
  },
});
export const selectUser = (state: { info: UserSliceState }) => state.info;
export const selectInfo = (state: { info: UserSliceState }) => state.info;

// Action creators are generated for each case reducer function
export const {
  userLogin,
  userSignOut,
  ForgetPassword,
  SignUp,
  Verification,
  Login,
  menuHandeler,
} = userSlice.actions;

export default userSlice.reducer;
