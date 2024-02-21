import { login } from "./authSlice";
import { axiosDash } from "../../../config/dashAxios";

export const getLogin = (username, password) => {
  return async (dispatch, getState) => {
    const { data } = await axiosDash.post("/auth/login", {
      username,
      password,
    });

    dispatch(
      login({
        user: {
          id: data.id,
          username: data.username,
          password: data.password,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
        },
        token: data.token,
      })
    );
  };
};
