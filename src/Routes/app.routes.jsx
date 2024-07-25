import { Routes, Route, Navigate } from "react-router-dom";

import { New } from "../pages/New";
import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { Profile } from "../pages/Profile";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}