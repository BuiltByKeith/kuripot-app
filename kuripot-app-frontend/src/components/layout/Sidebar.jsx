import React from "react";
import { NavLink  } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Settings",
      path: "/settings",
    },
    {
      name: "Accounts",
      path: "/accounts",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];
  return (
    <div className="w-60 h-screen bg-sidebar text-primary-text flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Kuripot Admin</h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-sidebar-hover ${
                isActive ? "bg-sidebar-hover font-semibold" : ""
              }`
            }
          >
            {item.name}
          </NavLink >
        ))}
      </nav>
    </div>
  );
}
