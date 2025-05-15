import React, { useRef } from "react";
import "./search-bar.css";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBarHero = () => {
  const locationref = useRef("");
  const distanceref = useRef(0);
  const peopleref = useRef(0);
  const navigate=useNavigate()

  const Search_handler = async (e) => {
    e.preventDefault();
    const location = locationref.current.value;
    const distance = distanceref.current.value;
    const people = peopleref.current.value;

    if (location === "" || distance === "" || people === "") {
      return alert("All fields are required!");
    }
    const res = await fetch(
      `${BASE_URL}tour/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${people}`
    );
    

    if (!res.ok) {
      alert("Something Went wrong")
    }
    const result=await res.json()
    navigate(
      `tour/search?city=${location}&distance=${distance}&maxGroupSize=${people}`,{state:result.data}
    );
    // Do something with the values
  };

  return (
    <div className="w-max mx-auto mt-28 px-4 py-2 rounded-2xl shadow-[0px_48px_100px_rgba(17,12,46,0.15)] bg-white text-black">
      <form className="flex flex-col sm:flex-row items-center gap-4">
        {/* Location Input */}
        <div className="flex items-center gap-3 pr-4 border-r-2 border-gray-300">
          <span>
            <i className="ri-map-pin-line text-2xl" style={{ color: "#ee6e6e" }}></i>
          </span>
          <div>
            <h6 className="text-sm font-medium mb-0">Location</h6>
            <input
              type="text"
              placeholder="Where are you going?"
              ref={locationref}
              className="text-sm font-medium text-black border-none focus:outline-none"
            />
          </div>
        </div>

        {/* Distance Input */}
        <div className="flex items-center gap-3 pr-4 border-r-2 border-gray-300">
          <span>
            <i className="ri-map-pin-time-line text-2xl" style={{ color: "#ee6e6e" }}></i>
          </span>
          <div>
            <h6 className="text-sm font-medium mb-0">Distance</h6>
            <input
              type="number"
              placeholder="Distance k/m"
              ref={distanceref}
              className="text-sm font-medium text-black border-none focus:outline-none"
            />
          </div>
        </div>

        {/* People Input + Search Icon */}
        <div className="flex items-center gap-3">
          <span>
            <i className="ri-group-line text-2xl" style={{ color: "#ee6e6e" }}></i>
          </span>
          <div>
            <h6 className="text-sm font-medium mb-0">Max People</h6>
            <input
              type="number"
              placeholder="0"
              ref={peopleref}
              className="text-sm font-medium text-black border-none focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={Search_handler}
            className="ml-2 p-2 text-white"
            style={{
              backgroundColor: "#f6932d",
              borderRadius: "10px 5px 10px 5px",
            }}
          >
            <i className="ri-search-line text-xl"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarHero;



