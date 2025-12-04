import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background-light text-text-light">
      {/* place global toasts / modals / loaders here later */}
      <Outlet />
    </div>
  );
}
