import React from 'react'
import { Link } from 'react-router-dom';
import "./tour-card.css"
import avgrating from "../../utils/avgrating"

const TourCard = ({ tour }) => {
    
    
    const { _id, title, city, photo, price, featured, reviews } = tour;
    const {totalrating,avgRating}=avgrating(reviews)
    
  return (
    <div className="bg-transparent border-white w-full max-w-sm md:max-w-md lg:max-w-[300px] h-[400px] relative rounded-lg overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col shadow-[0px_18px_50px_-10px_rgba(0,0,0,0.2)] border-4 border-white">
        {/* Image */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <img
            src={photo}
            alt="tour-img"
            className="w-full h-full object-cover rounded-t-lg"
          />
          {featured && (
            <span className="absolute bottom-2 right-2 bg-[#f6932d] text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-4">
          {/* Top Info */}
          <div className=" text-[#e7c688] text-sm md:text-base">
            <span className="flex items-center gap-1">
              <i className="ri-map-pin-line text-base"></i>
              <p className="text-white text-xs truncate">{city}</p>
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-star-fill text-base"></i>
              {avgRating === 0 ? null : avgRating}
              {totalrating === 0 ? (
                <span>Not Rated</span>
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          {/* Title */}
          <h5 className="text-[rgb(246,147,45)] text-sm md:text-xl font-semibold mt-2 truncate">
            <Link to={`/tour/${_id}`}>{title}</Link>
          </h5>

          {/* Bottom Info */}
          <div className="mt-4 text-white text-sm md:text-base ">
            <h5 className="mb-3">
              Rs{price} <span className="text-[#f4a441]">/Per Person</span>
            </h5>
            <button className="  bg-[#f6932d] text-white rounded hover:bg-[#0f2a39] transition-all w-full">
              <Link to={`/tour/${_id}`} className="text-white block">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard