import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";

export const AuthLayout = () => {

  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
    </Routes>
  );
};
