import React, { useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sideber from "../components/Dashborad/Global/Sideber";
import { Topbar } from "../components/Dashborad/Global/Topbar";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <ProSidebarProvider>
        <Sideber isSidebar={isSidebar} />
      </ProSidebarProvider>
      <Topbar />
      <ToastContainer />
      <main className="content">{children}</main>
    </>
  );
}
