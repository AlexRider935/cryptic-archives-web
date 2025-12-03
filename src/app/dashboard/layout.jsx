// File: web/src/app/(dashboard)/layout.jsx

import DashboardHeader from "./components/DashboardHeader";
import DashboardFooter from "./components/DashboardFooter";
import { CustomCursor } from "@/components/CustomCursor";

export default function DashboardLayout({ children }) {
  return (
    // The `flex flex-col h-screen` creates the sticky container
    <div className="flex flex-col h-screen">
      {/* <CustomCursor/> */}
      <DashboardHeader />
      {/* The `flex-grow` makes this main section fill all available space and scroll */}
      <main className="flex-grow bg-[#f3dfc1] overflow-y-auto">{children}</main>
      <DashboardFooter />
    </div>
  );
}
