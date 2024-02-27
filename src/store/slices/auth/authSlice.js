import { createSlice } from "@reduxjs/toolkit";

const initialValueAuth = {
  token: null,
  isLogged: false,
  user: {
    username: null,
    password: null,
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
        (state.errorMessage = initialValueAuth.errorMessage);
    },
    logout: (state) => {
      (state.token = initialValueAuth.token),
        (state.isLogged = initialValueAuth.isLogged),
        (state.user = initialValueAuth.user);
        (state.errorMessage = initialValueAuth.errorMessage);
      localStorage.removeItem("token");
      },

    errorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMsg;
    },
  },
});

export const { login, logout, errorMessage } = authSlice.actions;
