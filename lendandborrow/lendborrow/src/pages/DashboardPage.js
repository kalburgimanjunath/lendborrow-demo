import React from "react";
import { Sidebar, Dashboard } from "../components/index";

function DashboardPage({ title }) {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default DashboardPage;
