import { createSlice } from "@reduxjs/toolkit";

const initialValueAuth = {
  token: null,
  isLogged: false,
  user: {
    username: null,
    password: null,
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
    },
    logout: (state) => {
      (state.token = initialValueAuth.token),
        (state.isLogged = initialValueAuth.isLogged),
        (state.user = initialValueAuth.user);
    },
    // error: (state, action) => {
    //   state.type = state.type = action.payload.type;
    // },
  },
});

export const { login, logout } = authSlice.actions;
