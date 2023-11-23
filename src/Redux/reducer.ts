import { createSlice } from "@reduxjs/toolkit";

export interface userSlice {
  user: boolean;
  registerPage: string;
  location: string;
}

const initialState: userSlice = {
  user: false,
  registerPage: "SignUp",
  location: "/",
};

export const userSlice = createSlice({
  name: "user",
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
  },
});
export const selectUser = (state: { user: never }) => state.user;

// Action creators are generated for each case reducer function
export const {
  userLogin,
  userSignOut,
  ForgetPassword,
  SignUp,
  Verification,
  Login,
} = userSlice.actions;

export default userSlice.reducer;
