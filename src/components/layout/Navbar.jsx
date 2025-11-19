import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "../../context/AuthContext";
// Importing icons for a better UI (assuming you have react-icons installed)
// e.g., import { Menu, X } from 'lucide-react'; // Or any other icon library

export default function Navbar() {
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu
  const nav = useNavigate();

  // Helper function to handle auth modal opening
  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setOpenAuth(true);
    setIsMenuOpen(false); // Close mobile menu on opening modal
  };

  // Helper function to handle logout and navigation
  const handleLogout = () => {
    logout();
    setIsMenuOpen(false); // Close mobile menu
    nav("/"); // Optional: Navigate to home after logout
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-600 tracking-wider hover:text-blue-700 transition duration-150"
            >
              Makhnaa! 🍪
            </Link>
          </div>

          {/* Primary Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/shop"
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-150"
            >
              Shop
            </Link>
            <a
              href="#offers"
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-150"
            >
              Offers
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 font-medium transition duration-150"
            >
              About
            </a>
          </nav>

          {/* Auth/User Controls - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {!user ? (
              <>
                <button
                  onClick={() => openAuthModal("login")}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-150"
                >
                  Log in
                </button>
                <button
                  onClick={() => openAuthModal("signup")}
                  className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
                >
                  Sign up
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">
                  Hi, **{user.name.split(" ")[0]}**
                </span>
                <Link to="/shop">
                  <button className="text-sm font-medium text-white bg-green-500 hover:bg-green-600 py-2 px-3 rounded-full transition duration-150">
                    Go to Shop
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition duration-150"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              {/* Replace with an actual icon if using an icon library */}
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> // X/Close Icon
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> // Hamburger Icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content - Hidden by default, shown when isMenuOpen is true */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden border-t border-gray-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/shop"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-150"
          >
            Shop
          </Link>
          <a
            href="#offers"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-150"
          >
            Offers
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition duration-150"
          >
            About
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-100">
          <div className="flex flex-col items-start px-5 space-y-3">
            {!user ? (
              <>
                <button
                  onClick={() => openAuthModal("login")}
                  className="w-full text-left px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-150"
                >
                  Log in
                </button>
                <button
                  onClick={() => openAuthModal("signup")}
                  className="w-full text-left py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                <span className="text-gray-700 font-medium">
                  Signed in as: **{user.name}**
                </span>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition duration-150"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <AuthModal open={openAuth} onClose={() => setOpenAuth(false)} mode={authMode} />
    </header>
  );
}