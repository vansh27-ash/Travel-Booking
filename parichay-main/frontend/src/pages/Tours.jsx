import React, { useState, useEffect } from "react";
import CommonSection from "../components/shared/CommonSection";
import SearchBarHero from "../components/shared/SearchBarHero";

import TourCard from "../components/shared/TourCard";
import NewsLetter from "../components/shared/NewsLetter"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config";

const Tours = () => {

  
  
  const [Count, setCount] = useState(0);
  const [Page, setPage] = useState(0);

  const { data: tourCount } = useFetch(`${BASE_URL}tour/search/gettourcount`);
  const {
    data: tours,
    loading,
    error,
    
  } = useFetch(`${BASE_URL}tour?page=${Page}`);
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setCount(pages);
    window.scrollTo(0, 0);
  }, [Page,tourCount,tours]);

  

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://iili.io/3OFHSuj.png')`,
        }}
      >
        <CommonSection title={"Our All Packages"} />
        <section className="py-4 px-4">
          <div className="conatiner">
            <SearchBarHero />
          </div>
        </section>
        <section className="p-4">
          {loading && (
            <h4 className="text-2xl text-white text-center">Loading..............</h4>
          )}
          {error && <h4 className="text-2xl text-white text-center">{error}</h4>}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {tours?.map((tour) => (
                <div key={tour._id} className="w-full">
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          )}
          <div className="grid grid-cols-12 gap-4 items-center ">
            <div className="col-span-12 lg:col-span-12">
              <div className="flex items-center justify-center mt-4 gap-3 text-white">
                {[...Array(Count).keys()].map((number) => {
                  return (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={`w-8 text-white h-8 px-[5px] rounded-full flex items-center justify-center border text-[1.1rem] cursor-pointer font-bold 
                      ${Page === number ? "bg-[#f6932d] text-white " : ""}`}
                    >
                      {number + 1}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="ml-5">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Tours;
