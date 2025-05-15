import React from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
const Footer = () => {

  const Discoverlinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  const quicklinks = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];
  return (
    <div className="bg-[#0d2231] text-white px-6 md:px-14 py-10">
      <div className="flex flex-col md:flex-row flex-wrap gap-8">
        {/* Logo + Description + Social */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col items-start space-y-4">
            {/* Logo */}
            <Link to="/home">
              <img src={logo} alt="Logo" className="w-28 h-auto" />
            </Link>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              enim.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link to="#">
                <i className="ri-youtube-line text-xl hover:text-[#f6932d]"></i>
              </Link>
              <Link to="#">
                <i className="ri-facebook-circle-line text-xl hover:text-[#f6932d]"></i>
              </Link>
              <Link to="#">
                <i className="ri-instagram-line text-xl hover:text-[#f6932d]"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Discover Links */}
        <div className="flex-1 min-w-[200px]">
          <h5 className="text-lg font-semibold mb-4 text-[#f6932d]">
            Discover
          </h5>
          <ul className="space-y-2">
            {Discoverlinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-white hover:text-gray-300">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <h5 className="text-lg font-semibold mb-4 text-[#f6932d]">
            Quick Links
          </h5>
          <ul className="space-y-2">
            {quicklinks.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-white hover:text-gray-300">
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-[200px]">
          <h5 className="text-lg font-semibold mb-4 text-[#f6932d]">
            Contact Us
          </h5>
          <ul className="space-y-2">
            <li>
              <h6 className="text-base">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                Address:
              </h6>
              <p>Chandigarh,India</p>
            </li>
            <li>
              <h6 className="text-base">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                Phone:
              </h6>
              <p>+917017677913</p>
            </li>
            <li>
              <h6 className="text-base">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                Email:
              </h6>
              <p>parichay@main-parichay.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
