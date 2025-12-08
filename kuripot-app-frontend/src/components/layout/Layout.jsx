import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div className="flex h-screen">  {/* Add h-screen here */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar title={title}/>
        
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
