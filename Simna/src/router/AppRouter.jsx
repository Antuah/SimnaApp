import React, { useContext } from "react";
import Menu from "../modules/auth/login/adapters/screens/Menu";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthContext from "../config/context/auth.context";
import Login from "../modules/auth/login/adapters/screens/Login";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {user?.signed ? (
          <Route path="/" element={<Menu />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;