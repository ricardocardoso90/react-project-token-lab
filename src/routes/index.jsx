import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "../Context";

export function Routes() {
  const { isLoaded } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {isLoaded ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}