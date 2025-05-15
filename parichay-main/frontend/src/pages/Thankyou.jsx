import React from "react";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="flex items-center justify-center bg-[#0f2a39] md:h-80">
      <div className=" flex-col items-center justify-center">
        <h2 className="text-white inline-block px-5 py-3 text-3xl font-bold">
          Thank you for booking
        </h2>
        <h4 className="text-[#f6932d] px-2 py-4 text-xl">
          Your tour is under waitlist the tour operetor <br /> will contact you
          with in 3-4 days
        </h4>
        <button className="bg-[#f6932d] text-[#0f2a39] text-2xl font-medium px-2 md:w-48 py-2 rounded-full mt-4 hover:bg-orange-900 hover:text-white transition-transform ">
          <Link to="/home">Back to Home</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Thankyou;
