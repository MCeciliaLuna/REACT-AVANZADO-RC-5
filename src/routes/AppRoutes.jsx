import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

function AppRoutes() {
  const isLogged = false

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
              <GeneralLayout />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default AppRoutes;
