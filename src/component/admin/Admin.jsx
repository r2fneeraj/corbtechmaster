import React from "react";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>

      {/* ✅ Admin Navigation */}
      <div style={{ display: "flex", gap: 15, margin: "15px 0" }}>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/leads">Leads</Link>
      </div>

      <hr />

      {/* ✅ Child page render (Dashboard / Leads) */}
      <div style={{ marginTop: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
