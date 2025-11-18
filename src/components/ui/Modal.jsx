import React from "react";
export default function Modal({ open, onClose, children, size = "max-w-lg" }){
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className={`relative bg-white dark:bg-slate-900 rounded-2xl p-6 ${size} shadow-soft`}>
        {children}
      </div>
    </div>
  );
}
