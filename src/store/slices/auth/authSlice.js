import { createSlice } from "@reduxjs/toolkit";

const initialValueAuth = {
  token: null,
  isLogged: false,
  user: {
    username: null,
    password: null,
  },
  message:{
    type:"SUCCESS ✅ all OK",
    status: 200
  },
  errorMessage:{
    msg:null,
    type:null
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialValueAuth,
  reducers: {
    login: (state, action) => {
      (state.token = action.payload.token),
        (state.isLogged = true),
        (state.user = action.payload.user);
        (state.message = initialValueAuth.message);
        (state.errorMessage = null);
    },
    logout: (state) => {
      (state.token = initialValueAuth.token),
        (state.isLogged = initialValueAuth.isLogged),
        (state.user = initialValueAuth.user);
        (state.message = initialValueAuth.message);
        (state.errorMessage = null);
      localStorage.removeItem("token");
      },

    errorMessage: (state, action) => {
      (state.errorMessage = action.payload.errorMsg);
      (state.message = null)
      },
    message: (state, action) => {

    }
  },
});

export const { login, logout, errorMessage } = authSlice.actions;
