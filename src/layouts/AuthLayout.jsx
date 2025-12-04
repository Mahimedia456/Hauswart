// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f5f5f5] px-4">
      <Outlet />
    </div>
  );
}
