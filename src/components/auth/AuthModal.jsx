import React, { useState } from "react";
import Modal from "../ui/Modal";
import { useAuth } from "../../context/AuthContext";

export default function AuthModal({ open, onClose, mode = "login" }){
  const { login } = useAuth();
  const [step, setStep] = useState("form"); // form -> otp
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const sendOtp = (e) => {
    e?.preventDefault();
    // In prod: call backend to send OTP. Here we mock and move to OTP screen
    setStep("otp");
  };

  const verifyOtp = (code) => {
    // accept "0000" as valid
    if(code === "0000"){
      login({ name: name || "Guest", email });
      onClose();
      setStep("form");
    } else {
      alert("Invalid OTP. (Hint: use 0000)");
    }
  };

  return (
    <Modal open={open} onClose={() => { onClose(); setStep("form"); }}>
      {step === "form" ? (
        <form onSubmit={sendOtp} className="space-y-4">
          {mode === "signup" && (
            <input required value={name} onChange={e=>setName(e.target.value)}
              className="w-full p-3 rounded-md border" placeholder="Full name" />
          )}
          <input required value={email} onChange={e=>setEmail(e.target.value)}
            className="w-full p-3 rounded-md border" placeholder="Email or phone" />
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-md bg-brand-500 text-white">Send OTP</button>
            <button type="button" className="py-2 px-3 rounded-md border" onClick={onClose}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <p>Enter the 4-digit OTP (use <strong>0000</strong> for now)</p>
          <OTPInput onVerify={verifyOtp} />
        </div>
      )}
    </Modal>
  );
}

// simple OTP input
function OTPInput({ onVerify }){
  const [code, setCode] = useState("");
  return (
    <div className="space-y-2">
      <input value={code} onChange={e=>setCode(e.target.value.replace(/\D/g,""))}
        maxLength={4} className="w-full p-3 border rounded-md text-center text-xl" />
      <div className="flex gap-2">
        <button onClick={()=>onVerify(code)} className="flex-1 py-2 rounded-md bg-brand-500 text-white">Verify</button>
      </div>
    </div>
  );
}
