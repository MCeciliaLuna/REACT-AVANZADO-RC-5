import { errorMessage, login, logout } from "./authSlice";
import { axiosDash } from "../../../config/dashAxios";

export const getLogin = (username, password) => {
  return async (dispatch, getState) => {

    try {
      const { data } = await axiosDash.post("/auth/login", {
        username,
        password,
      });
  
      const newUser = {
        user: {
          id: data.id,
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
        },
        token: data.token,
      };
  
      localStorage.setItem("token", JSON.stringify(newUser));
  
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

      
      
    } catch (error) {
      console.error(error)
      dispatch(errorMessage({
        errorMsg:{
          msg: error.response.data.message,
          type: error.response.status
        }
      }))
    }
  }
}

export const checkToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const dataToken = JSON.parse(token);

    if (!token) {
      return dispatch(logout());
    }
    dispatch(
      login({
        user: {
          id: dataToken.user.id,
          username: dataToken.user.username,
          password: dataToken.user.password,
          email: dataToken.user.email,
          firstName: dataToken.user.firstName,
          lastName: dataToken.user.lastName,
          gender: dataToken.user.gender,
        },
        token: dataToken.token,
      })
    );
  };
};