import React, { useContext } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Booking = ({ tour, avgrating, totalrating }) => {
  
  const { reviews, price, maxGroupSize,title } = tour;
  const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState({
      userid: user && user._id,
      userEmail: user && user.email,
      tourName:title,
      fullName: "",
      phone: "",
      guestSize: 1,
      bookAt: "",
      price:price,
    });
  
  
  

    const handleChange = (e) => {
      setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      
  };
    const today = new Date().toISOString().split("T")[0];
    // send data to server
  const navigate = useNavigate()
  
  

    const handleClick = async e => {
      e.preventDefault();
      
      try {
        if (!user || user === undefined || user === null) {
          return alert("Please sign in");
        }

        const res = await fetch(`${BASE_URL}booking/${booking.userid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
          , credentials: 'include',
          body: JSON.stringify(booking)
        });

        
        const result = await res.json();

        if (!res.ok) {
          return alert(result.message);
        } 
        navigate("/thank-you");
      } catch (err) {
        
        alert(err.message)
      }
      
      
        
  }
  
  const Total = (
  booking.guestSize *
    (price + 500 + ((price + 500) * 18) / 100)
  ).toFixed(0);


  return (
    <div className="border-2 border-gray-400 px-4 py-6 rounded-xl w-full max-w-3xl mx-auto bg-[#0f2a39]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#f6932d]">
          <span className="text-lg sm:text-xl text-white">Price </span>
          <i
            className="ri-money-rupee-circle-line text-[#f6932d]"
            style={{ fontWeight: "100" }}
          ></i>
          {price}
          <span className="text-lg sm:text-xl text-white"> /per_person</span>
        </h3>
        <span className="flex items-center gap-1 text-[#f6932d] text-lg">
          <i className="ri-star-s-fill"></i>
          {avgrating === 0 ? null : avgrating}
          {totalrating === 0 ? (
            " Not Rated"
          ) : (
              <span className="text-white">
                ({reviews?.length})
              </span>
          )}
        </span>
      </div>

      {/* Form Section */}
      <div>
        <h5 className="text-2xl font-bold mt-6 text-white">Information</h5>
        <form
          className="py-4 mt-3 border border-gray-400 rounded-md px-4"
          onSubmit={handleClick}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
              className="w-full text-white px-4 py-2 border-b-2 border-white bg-transparent focus:outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              required
              onChange={handleChange}
              className="w-full text-white px-4 py-2 border-b-2 border-white bg-transparent focus:outline-none focus:bg-transparent"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                id="bookAt"
                required
                onChange={handleChange}
                min={today}
                className="w-full text-white px-4 py-2 border-b-2 border-white bg-transparent focus:outline-none"
              />
              <input
                type="number"
                placeholder="No of guests"
                id="guestSize"
                required
                onChange={handleChange}
                className="w-full text-white px-4 py-2 border-b-2 border-white bg-transparent focus:outline-none"
              />
            </div>
          </div>
        </form>

        {/* Summary Section */}
        <ul className="mt-6 space-y-4 text-white">
          <li className="flex justify-between">
            <span className="font-semibold">
              {price} x {booking.guestSize} person
            </span>
            <span className="font-semibold text-xl">
              <i className="ri-money-rupee-circle-line text-[#f6932d]"></i>
              {price}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Service Charge</span>
            <span className="font-semibold text-xl">
              <i className="ri-money-rupee-circle-line text-[#f6932d]"></i>
              500
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">18% GST</span>
            <span className="font-semibold text-xl">
              <i className="ri-money-rupee-circle-line text-[#f6932d]"></i>
              {(((price + 500) * 18) / 100).toFixed(0)}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Total Expenses</span>
            <span className="font-semibold text-xl">
              <i className="ri-money-rupee-circle-line text-[#f6932d]"></i>
              {
                Total}
            </span>
          </li>
        </ul>

        {/* Book Now Button */}
        <button
          className="text-[#0f2a39] bg-[#f6932d] mt-6 w-full py-3 rounded-full text-2xl font-bold hover:bg-orange-800 hover:text-white transition-all duration-300"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Booking;
