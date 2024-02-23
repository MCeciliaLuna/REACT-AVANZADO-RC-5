import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkToken } from "../store/slices/auth/thunks";

function AppRoutes() {
  
  const { isLogged, user} = useSelector((state)=> state.auth )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkToken())
  }, [])
  

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
