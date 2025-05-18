import React, { useState } from "react";
import { BASE_URL } from "../utils/config";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

  const sendOtp = async () => {
    const res = await fetch(`${BASE_URL}auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
      const data = await res.json();
    if (data.success) {
      
      setStep(2);
    } else {
      alert(data.message);
    }
  };

    const verifyOtp = async (e) => {
        e.preventDefault();
        

        try {
            const res = await fetch(`${BASE_URL}auth/verifyotp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    otp: otp,
                }),
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message || "Verification failed");
                return;
            }

            setStep(3)

        } catch (err) {
            console.error("FETCH ERROR:", err);
            alert("Something went wrong. Please try again.");
        }};

  const resetPassword = async () => {
    const res = await fetch(`${BASE_URL}auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: newPassword }),
    });
    const data = await res.json();
    if (data.success) {
      alert("Password reset successfully");
      window.location.href = "/login";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-80 bg-[#0f2a39] text-white">
      <div className="bg-[#112e42] p-8 rounded-lg shadow-lg w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 px-4 py-2 rounded bg-transparent border border-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="w-full bg-orange-400 py-2 rounded"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Verify OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mb-4 px-4 py-2 rounded bg-transparent border border-gray-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-orange-400 py-2 rounded"
            >
              Verify
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <input
              type="password"
              placeholder="New Password"
              className="w-full mb-4 px-4 py-2 rounded bg-transparent border border-gray-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={resetPassword}
              className="w-full bg-orange-400 py-2 rounded"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
