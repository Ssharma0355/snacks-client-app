import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Shop from "../pages/Shop";
import { useAuth } from "../context/AuthContext";

function Protected({ children }){
  const { user } = useAuth();
  if(!user) return <Navigate to="/" replace />;
  return children;
}

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={
          <Protected><div className="p-8">My Account (protected)</div></Protected>
        } />
      </Routes>
    </BrowserRouter>
  );
}
