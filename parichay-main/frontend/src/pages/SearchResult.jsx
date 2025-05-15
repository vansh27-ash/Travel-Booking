import React, { useState } from 'react'
import CommonSection from '../components/shared/CommonSection'
import {useLocation} from 'react-router-dom'
import TourCard from '../components/shared/TourCard'
import NewsLetter from '../components/shared/NewsLetter'


const SearchResult = () => {
  const location = useLocation()
  const [data] = useState(location.state);
  
  return (
    <>
      <div className="relative w-full">
        {/* Background Image + Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://iili.io/3O3UB1I.png')",
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10">
          <CommonSection title={"Tour Search Result"} />

          <section className="py-8 px-4 w-full flex items-center justify-center">
            {data?.length === 0 ? (
              <h4 className="text-center text-lg font-semibold text-white">
                No tour found
              </h4>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map((tour) => (
                  <div key={tour._id} className="mb-4">
                    <TourCard tour={tour} />
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className="ml-0 lg:ml-44">
            <NewsLetter />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult