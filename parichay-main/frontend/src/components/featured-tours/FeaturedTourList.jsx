import React from 'react'
import TourCard from '../shared/TourCard';
import useFetch from '../../hooks/useFetch.js'
import { BASE_URL } from '../../utils/config.js';

const FeaturedTourList = () => {

  // const { data: featuredTours } = useFetch(`${BASE_URL}/tour/search/getfeaturedtour`)
  const { data: featuredTours ,loading,error} = useFetch(`${BASE_URL}tour/search/getfeaturedtour`)
    return (
      <>
        {loading && (
          <h4 className="text-2xl text-white">Loading..............</h4>
        )}
        {error && <h4 className="text-2xl text-white">{error}</h4>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredTours?.map((tour) => (
              <div key={tour.id} className="w-full">
                <TourCard tour={tour} />
              </div>
            ))}
          </div>
        )}
      </>
    );
}

export default FeaturedTourList