import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-background-light text-text-light">
      {/* If you want a global auth bg or watermark, add here */}
      <Outlet />
    </div>
  );
}
