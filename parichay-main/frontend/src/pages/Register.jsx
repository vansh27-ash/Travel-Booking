import React, { useState, useContext } from "react";
import logininmg from "../assets/images/login.png";
import userimg from "../assets/images/user.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    username: undefined,
  });
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = registration, 2 = OTP verification
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.username) {
      return (alert("all feilds are required"));
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Registration failed");
        return;
      }

      setStep(2); // Move to OTP verification step
    } catch (err) {
      console.error("FETCH ERROR:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          otp: otp,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Verification failed");
        return;
      }

      dispatch({ type: "REGISTER_SUCCESS" });
      navigate("/login");
    } catch (err) {
      console.error("FETCH ERROR:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0f2a39] text-white">
      {/* Login Image - hidden on small screens */}
      <div className="hidden md:block md:w-1/2 items-center justify-center">
        <img
          src={logininmg}
          alt="Login Visual"
          className="max-w-full h-auto animate-fade-in"
        />
      </div>

      {/* Form Container */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-12">
        <div className="border-2 border-gray-400 rounded-lg w-full max-w-md p-6 bg-[#0f2a39] shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
          {/* User Icon */}
          <div className="flex justify-center">
            <img src={userimg} alt="User Icon" className="w-20 h-20" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-center mt-4 mb-6">
            {step === 1 ? "Register" : "Verify Email"}
          </h2>

          {step === 1 ? (
            // Registration Form
            <form>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#f6932d] transition duration-200"
                  type="email"
                  placeholder="Email"
                  required
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#f6932d] transition duration-200"
                  type="password"
                  placeholder="Password"
                  required
                  id="password"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#f6932d] transition duration-200"
                  type="text"
                  placeholder="Username"
                  required
                  id="username"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 text-2xl text-[#0f2a39] font-semibold py-2 rounded-md hover:bg-orange-900 hover:text-white transition duration-300"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Register"}
              </button>
            </form>
          ) : (
            // OTP Verification Form
            <form>
              <p className="text-center mb-6">
                We've sent a 6-digit code to{" "}
                <strong>{credentials.email}</strong>
              </p>

              <div className="mb-6">
                <input
                  className="w-full px-4 py-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#f6932d] transition duration-200 text-center text-2xl tracking-widest"
                  type="text"
                  placeholder="Enter OTP"
                  maxLength="6"
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 text-2xl text-[#0f2a39] font-semibold py-2 rounded-md hover:bg-orange-900 hover:text-white transition duration-300"
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <p className="text-center mt-4 text-sm">
                Didn't receive code?{" "}
                <button
                  type="button"
                  className="text-[#f6932d] hover:underline"
                  onClick={handleRegister}
                >
                  Resend OTP
                </button>
              </p>
            </form>
          )}

          {/* Login Prompt */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#f6932d] hover:text-red-400 transition duration-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
