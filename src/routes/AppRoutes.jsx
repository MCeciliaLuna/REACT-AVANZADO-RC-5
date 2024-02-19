import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useSelector } from "react-redux";

function AppRoutes() {
  
  const { isLogged, user} = useSelector((state)=> state.auth )

  return (
    <>
      <Routes>
        <Route
          path="/auth/login/*"
          element={
            <PublicRoutes isLogged={isLogged}>
              <AuthLayout />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isLogged={isLogged}>
              <GeneralLayout user={user} />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
