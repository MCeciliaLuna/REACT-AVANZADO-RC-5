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
    login: (state) => {
        state.token = 'Cecilia1234',
        state.isLogged = true,
        state.user = {
            username: 'mcecilialuna',
            password: 'Cecilia1234'
        }
    },
    logout: (state) => {
        state.token = initialValueAuth.token,
        state.isLogged = initialValueAuth.isLogged,
        state.user = initialValueAuth.user
  }
}
});

export const { login, logout } = authSlice.actions;