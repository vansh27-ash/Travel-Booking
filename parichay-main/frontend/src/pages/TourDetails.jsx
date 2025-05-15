import React ,{useEffect, useRef,useState,useContext} from "react";
import { useParams,useNavigate } from "react-router-dom";
import avgrating from "../utils/avgrating.js";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking.jsx";
import NewsLetter from "../components/shared/NewsLetter.jsx";
import useFetch from "../hooks/useFetch.js";
import { BASE_URL } from "../utils/config.js";
import { AuthContext } from "../context/AuthContext.jsx";
 

const TourDetails = () => {
  const { id } = useParams();
  // have to use api here to load data
  const reviewMsgRef = useRef("");
  const [tourrating, setTourRating] = useState(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate(); 

  const submitHandler =async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
   
    
    try {
      if (!user || user === undefined || user === null) {
        return alert("please sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating:tourrating,
      }
      const res = await fetch(`${BASE_URL}review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json()
      if (!res.ok) {
        return alert(result.message);
      } 
      alert("review submitted")
      navigate(0)
     
      
    } catch (err) {
      
        return alert(err.message)
      }


  }

   const {data:tour,loading,error}=useFetch(`${BASE_URL}tour/${id}`)
  const {
    distance,
    title,
    city,
    photo,
    price,
    desc,
    featured,
    reviews,
    address,
    maxGroupSize,
  } = tour;
 

  const { totalrating, avgRating } = avgrating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  useEffect(() => {
    window.scrollTo(0,0)
  },[tour])

  return (
    <>
      <section className="bg-[#0f2a39] text-white ">
        {loading && (
          <h4 className="text-2xl text-white text-center">
            Loading..............
          </h4>
        )}
        {error && <h4 className="text-2xl text-white text-center">{error}</h4>}
        {!loading && !error && (
          <div className="max-w-screen-xl mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-7">
                <div className="content py-6 px-4 border-[#f6932d] border-2 rounded-lg mb-7">
                  <div className="border-2 border-[#f6932d]">
                    <img src={photo} alt="" />
                  </div>
                  <div className="border-2 border-white my-6 p-4 rounded-md">
                    <h2 className="text-4xl font-bold ">{title}</h2>

                    <div className="flex items-center gap-5 py-4 ">
                      <span className="flex items-center gap-1 text-[#f6932d]">
                        <i
                          class="ri-star-s-fill"
                          style={{ color: "#f6932d" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalrating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span className="text-[#ffffff]">
                            ({reviews?.length})
                          </span>
                        )}
                      </span>

                      <span className="text-[#f6932d]">
                        <i class="ri-map-pin-fill"></i>
                        {address}
                      </span>
                    </div>

                    <div className="details py-4">
                      <span className="text-[#ffffff] text-xl font-bold">
                        <i
                          class="ri-road-map-line"
                          style={{ color: "#f6932d" }}
                        ></i>
                        <span className="px-3">{city}</span>
                      </span>
                    </div>
                    <div className="py-4">
                      <span className="text-[#ffffff] text-2xl font-semibold">
                        <i
                          class="ri-money-rupee-circle-line"
                          style={{ color: "#f6932d", fontweight: "200" }}
                        ></i>
                        {price} / Per-Person
                      </span>
                    </div>
                    <div className="flex gap-24">
                      <span className="text-[#ffffff] text-base font-medium">
                        <i
                          class="ri-group-fill"
                          style={{ color: "#f6932d" }}
                        ></i>
                        Group Size :- {maxGroupSize}
                      </span>

                      <span className="text-[#ffffff] text-base font-medium">
                        <i
                          class="ri-route-line"
                          style={{ color: "#f6932d" }}
                        ></i>
                        Distance:- {distance}
                      </span>
                    </div>

                    <div className="py-10">
                      <h5 className="text-xl font-semibold">Description</h5>

                      <p>{desc}</p>
                    </div>
                  </div>
                  {/* ================Tour Reviews==================== */}
                  <div className="border-2 border-gray-400 py-6 px-4">
                    <h4 className="text-2xl py-4 mb-9">
                      Reviews ({reviews?.length} reviews)
                    </h4>
                    <form onSubmit={submitHandler}>
                      <div className="flex items-center gap-3 mb-4 ">
                        <span
                          className="cursor-pointer"
                          onClick={() => setTourRating(1)}
                        >
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => setTourRating(2)}
                        >
                          2<i class="ri-star-s-fill "></i>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => setTourRating(3)}
                        >
                          3<i class="ri-star-s-fill"></i>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => setTourRating(4)}
                        >
                          4<i class="ri-star-s-fill"></i>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => setTourRating(5)}
                        >
                          5<i class="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-full bg-white p-2">
                        <input
                          type="text"
                          placeholder="Share your thoughts"
                          ref={reviewMsgRef}
                          className="px-2 py-2 text-black w-full focus:outline-none "
                          required
                          
                        />
                        <button
                          className="bg-[#f6932d] text-[#0f2a39] mx-2 rounded-xl px-4 py-2 font-bold hover:bg-orange-800 hover:text-[#ffffff] transition-transform"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    <div className="py-20">
                      <ul>
                        {reviews?.map((review) => {
                          return (
                            <div className="py-2">
                              <img
                                src={avatar}
                                alt=""
                                className="rounded-full h-20"
                              />

                              <div className="w-100">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h5 className="text-2xl font-bold text-[#f6932d]">
                                      {review.username}
                                    </h5>
                                    <p className="text-sm">
                                      {new Date(
                                        review.createdAt
                                      ).toLocaleDateString("en-US", options)}
                                    </p>
                                  </div>
                                  <span>
                                    {review.rating}
                                    <i class="ri-star-s-fill"></i>
                                  </span>
                                </div>
                                <h6 className="text-lg text-[#f6932d] font-bold">
                                  "{review.reviewText}"
                                </h6>
                              </div>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:col-span-5 px-4">
                <Booking
                  tour={tour}
                  avgrating={avgRating}
                  totalrating={totalrating}
                />
              </div>
            </div>
          </div>
        )}
        <div className="ml-5">
          <NewsLetter />
        </div>
      </section>
    </>
  );
};

export default TourDetails;
