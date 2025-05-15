import React from "react";
import "../Header/headerrr.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setProfileMenuOpen(false);
  };

  const nav__links = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/tours", display: "Tours" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#0d2231] sticky top-0 z-[999] shadow-md font-sans px-4 md:px-12 py-4 flex justify-between items-center text-white w-full ${
        isScrolled ? "bg-transparent shadow-lg" : "bg-[#0d2231] py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center w-1/3 md:w-1/4">
        <Link to="/home">
          <img src={logo} alt="Logo" className="w-full max-w-[120px]" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center justify-between gap-20">
        <ul className="flex items-center gap-6">
          {nav__links.map((item, index) => (
            <li
              key={index}
              className="transition transform hover:text-[#d4af37] active:text-[#1a2373] hover:scale-105 active:scale-105"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-[#f6932d] font-semibold" : "text-white"
                }
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              <button
                className="flex items-center gap-2"
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              >
                <h5 className="text-xl text-white mb-0">{user.username}</h5>
                <i
                  className={`ri-arrow-${
                    profileMenuOpen ? "up" : "down"
                  }-s-line`}
                ></i>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/my-bookings"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#f6932d] hover:text-white"
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    View My Bookings
                  </Link>
                  <Link
                    to="/edit-profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-[#f6932d] hover:text-white"
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-[#f6932d] hover:text-white"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="font-bold transition transform hover:text-[#d4af37] active:text-[#1a2373] hover:scale-105 active:scale-105">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-[#1a2373] text-white px-4 py-1 rounded-xl font-bold transition transform hover:bg-white hover:text-[#d4af37] active:text-aqua active:bg-[#800000] border-2 border-transparent active:border-black hover:scale-105 active:scale-105">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f2a39] flex flex-col items-start px-6 py-4 gap-4 lg:hidden">
          <ul className="flex flex-col gap-4 w-full">
            {nav__links.map((item, index) => (
              <li
                key={index}
                className="transition transform hover:text-[#d4af37] active:text-[#1a2373] hover:scale-105 active:scale-105"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-[#f6932d] font-semibold" : "text-white"
                  }
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 w-full">
            {user ? (
              <>
                <Link to="/my-bookings" onClick={() => setMenuOpen(false)}>
                  <button className="w-full text-left font-bold hover:text-[#d4af37]">
                    View My Bookings
                  </button>
                </Link>
                <Link to="/edit-profile" onClick={() => setMenuOpen(false)}>
                  <button className="w-full text-left font-bold hover:text-[#d4af37]">
                    Edit Profile
                  </button>
                </Link>
                <button
                  className="w-full text-left font-bold hover:text-[#d4af37]"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <button className="w-full text-left font-bold hover:text-[#d4af37] active:text-[#1a2373]">
                    Login
                  </button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-[#1a2373] text-white px-4 py-1 rounded-xl font-bold transition hover:bg-white hover:text-[#d4af37]">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
