import { BrowserRouter } from "react-router-dom";

import { useContext } from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../context";

export function Routes() {
  const { isLoaded } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {isLoaded ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}