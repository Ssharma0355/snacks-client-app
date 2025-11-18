import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "../../context/AuthContext";

export default function Navbar(){
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const nav = useNavigate();

  return (
    <header className="bg-white sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-brand-700">Thekua & Co.</Link>
          <nav className="hidden md:flex gap-3 items-center text-sm text-slate-600">
            <Link to="/shop">Shop</Link>
            <a href="#offers">Offers</a>
            <a href="#about">About</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={()=>nav("/shop")} className="px-3 py-2 rounded-md border">Shop</button>
          {!user ? (
            <>
              <button onClick={()=>{ setAuthMode("login"); setOpenAuth(true); }}>Log in</button>
              <button onClick={()=>{ setAuthMode("signup"); setOpenAuth(true); }} className="py-2 px-3 bg-brand-500 text-white rounded-md">Sign up</button>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Hi, {user.name}</span>
              <button onClick={()=>logout()} className="px-3 py-2 rounded-md border">Logout</button>
            </>
          )}
        </div>
      </div>
      <AuthModal open={openAuth} onClose={()=>setOpenAuth(false)} mode={authMode} />
    </header>
  );
}
