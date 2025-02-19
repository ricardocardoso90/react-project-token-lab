import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}