import React, { useState, useContext } from 'react'
import logininmg from "../assets/images/login.png"
import userimg from "../assets/images/user.png"
import { Link ,useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: undefined,
    password:undefined
      });
      const { dispatch } = useContext(AuthContext)
        const navigate=useNavigate()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      
      dispatch({ type: "LOGIN_SUCESS", payload: result.data });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message })
      console.log(err.message)
      
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0f2a39] text-white">
      {/* Login Image - hidden on small screens */}
      <div className="hidden md:block md:w-1/2  items-center justify-center">
        <img
          src={logininmg}
          alt="Login Visual"
          className="max-w-full h-auto animate-fade-in"
        />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 py-12">
        <div className="border-2 border-gray-400 rounded-lg w-full max-w-md p-6 bg-[#0f2a39] shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.01]">
          {/* User Icon */}
          <div className="flex justify-center">
            <img src={userimg} alt="User Icon" className="w-20 h-20" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold text-center mt-4 mb-6">
            Login
          </h2>

          {/* Form */}
          <form onSubmit={handleClick}>
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

            <button
              type="submit"
              className="w-full bg-orange-400 text-2xl text-[#0f2a39] font-semibold py-2 rounded-md hover:bg-orange-900 hover:text-white transition duration-300"
              onClick={handleClick}
            >
              Login
            </button>
          </form>

          {/* Register Prompt */}
          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#f6932d] hover:text-red-400 transition duration-300"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login