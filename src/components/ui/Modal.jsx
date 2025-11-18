import React from "react";

export default function Modal({ open, onClose, children, size = "max-w-md" }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Content */}
      <div
        className={`relative w-full ${size} bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 animate-fadeIn`}
      >
        {children}
      </div>
    </div>
  );
}
