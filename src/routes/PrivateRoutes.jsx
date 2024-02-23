import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children, isLogged }) => {
  const pathName = useLocation();
  localStorage.setItem("lastRoute", JSON.stringify(pathName));

  return isLogged ? children : <Navigate to={"/auth/login"} />;
};
