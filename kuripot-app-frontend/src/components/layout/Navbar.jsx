import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar({ title }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    setIsLoading(true); // start spinner
    await logout();
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-16 bg-bg shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">{title}</h1>

      <div className="relative" ref={dropdownRef}>
        {/* Avatar + Name */}
        <button
          onClick={() => !isLoading && setOpen(!open)}
          className={`flex items-center gap-2 px-2 py-1 rounded-lg transition
            ${
              isLoading ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"
            }`}
          disabled={isLoading}
        >
          {/* Avatar circle */}
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-9 h-9 rounded-full border-4 border-gray-300 border-t-primary animate-spin"></div>
              <p>Loggin Out...</p>
            </div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          {!isLoading && (
            <span className="text-gray-700 font-medium">
              {user?.name || "User"}
            </span>
          )}
        </button>

        {/* Dropdown Menu */}
        {open && !isLoading && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
            <button
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
