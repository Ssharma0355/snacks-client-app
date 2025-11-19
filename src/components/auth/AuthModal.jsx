import React, { useState } from "react";
import Modal from "../ui/Modal";
import { useAuth } from "../../context/AuthContext";
import { IoClose } from "react-icons/io5";

export default function AuthModal({ open, onClose, mode = "login" }) {
  const { login } = useAuth();
  const [step, setStep] = useState("form");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();
    setStep("otp");
  };

  const verifyOtp = (code) => {
    if (code === "0000") {
      login({ name: name || "Guest", email });
      onClose();
      setStep("form");
    } else {
      alert("Invalid OTP (Use 0000)");
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
        setStep("form");
      }}
      size="max-w-md"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
          {step === "form"
            ? mode === "signup"
              ? "Create Account"
              : "Welcome Back"
            : "Verify OTP"}
        </h2>

        <button onClick={onClose} className="text-slate-500 hover:text-black">
          <IoClose size={26} />
        </button>
      </div>

      {/* Step Form */}
      {step === "form" ? (
        <form onSubmit={sendOtp} className="space-y-5">
          {mode === "signup" && (
            <div>
              <label className="text-sm font-medium text-slate-600">
                Full Name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
          )}

          {/* Email / Phone */}
          <div>
            <label className="text-sm font-medium text-slate-600">
              Email or Phone
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:outline-none"
              placeholder="example@gmail.com"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-700 transition">
              Send OTP
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <OtpScreen onVerify={verifyOtp} email={email} />
      )}
    </Modal>
  );
}

// ------------------- OTP COMPONENT -------------------
function OtpScreen({ onVerify, email }) {
  const [code, setCode] = useState("");

  return (
    <div className="space-y-5">
      <p className="text-slate-700 text-sm">
        Enter the 4-digit OTP sent to  
        <strong className="block text-brand-700">{email}</strong>  
        (Use 0000 for now)
      </p>

      <input
        value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
        maxLength={4}
        className="w-full p-4 border border-slate-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-brand-500 outline-none"
      />

      <button
        onClick={() => onVerify(code)}
        className="w-full py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-700 transition"
      >
        Verify OTP
      </button>
    </div>
  );
}
