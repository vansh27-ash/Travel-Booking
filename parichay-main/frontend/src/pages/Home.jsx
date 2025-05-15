import React, { useRef } from "react";
import "../pages/styles/home.css";
import SearchBarHero from "../components/shared/SearchBarHero";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import galleryImages from "../components/image-gallery.js"
import NewsLetter from "../components/shared/NewsLetter.jsx";
import Comments from "../components/Comments/Comments.jsx";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config.js";

const Home = () => {
  const keywordref = useRef("")
  const navigate = useNavigate()
  
  const Search_handler = async (e) => {
      e.preventDefault();
      const keyword = keywordref.current.value;
  
      if (keyword === "") {
        return alert("All fields are required!");
      }
      const res = await fetch(`${BASE_URL}tour/search/new?searchdata=${keyword}`);
      
  
      if (!res.ok) {
        alert("Something Went wrong")
      }
      const result=await res.json()
      navigate(
        `tour/search?keyword=${keyword}`,{state:result.data}
      );
      
  };
  
  return (
    <>
      {/*--------------------- Search Section-------------------------------------- */}
      <section
        className="bg-cover bg-center text-white text-center py-16 px-4 w-full"
        style={{
          backgroundImage:
            "url('https://static.toiimg.com/photo/102580287.cms')",
          backgroundColor: "#b44719",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Temples, Culture & Heritage Places of India
        </h1>
        <p className="text-base md:text-lg mb-6">
          Explore and experience the spiritual and historical heritage of India.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for places"
            ref={keywordref}
            className="flex-1 px-4 py-2 rounded shadow-md text-black"
          />
          <button
            className="bg-[#1f3c88] text-white px-4 py-2 rounded hover:bg-[#162d5d] transition"
            onClick={Search_handler}
          >
            Search
          </button>
        </div>
      </section>

      {/* ----------------------------- another Search Section---------------------------------- */}
      <section className="flex flex-col lg:flex-row items-center justify-between py-9 px-4 md:px-12 bg-[#0f2a39] w-full">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <span className="inline-block bg-[#ffe0b2] text-[#8b2c13] px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Know Before You Go 🌍
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-[#f6932d]">
            Traveling opens the door <br className="hidden md:block" /> to
            creating <span className="text-[#f4a300]">memories</span>
          </h2>
          <p className="text-[#ffffff] text-sm md:text-base max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae
            tempora dignissimos, animi praesentium molestias porro expedita
            delectus.
          </p>
          <SearchBarHero />
        </div>
        <div className="lg:w-1/2 grid grid-cols-3 gap-4">
          <img
            src="https://images.pexels.com/photos/31912724/pexels-photo-31912724/free-photo-of-ancient-gateway-at-daulatabad-fort-india.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Travel 1"
            className="rounded-xl object-cover h-100 w-full shadow-md"
          />
          <video
            src="https://videos.pexels.com/video-files/30622018/13107070_360_682_50fps.mp4"
            controls
            className="rounded-xl object-cover h-50 w-full shadow-md mt-7"
          ></video>
          <video
            src="https://videos.pexels.com/video-files/17407831/17407831-sd_360_640_30fps.mp4"
            controls
            className="rounded-xl object-cover h-90 w-full shadow-md"
          ></video>
          {/* <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=400&q=80"
            alt="Travel 2"
            className="rounded-xl object-cover h-48 w-full shadow-md"
          /> */}
        </div>
      </section>
      {/*----------------------------------- Hero Section------------------------------ */}
      <ServiceList />

      {/* ----------------------------------------Featured Tours Card -----------------------------*/}

      <section className="py-6 bg-[#0f2a39] flex items-center justify-center">
        <div className="max-w-7xl  px-7 ">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div>
              <div className="bg-[#f6932d] text-black italic font-bold rounded-full w-20 m-1 px-2">
                Explore
              </div>
              <h2 className="featured_tour-title text-3xl font-bold text-[#f6932d] leading-snug">
                Our Featured Tours <br />
                <br />
              </h2>
            </div>
          </div>
          <FeaturedTourList />
        </div>
      </section>
      {/* ==================================Expierenece================================================= */}
      <section>
        <div className="bg-[#0f2a39] text-white px-4 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="space-y-6">
                <div className="text-[#ffffff] text-sm italic font-semibold uppercase tracking-wide bg-orange-600 inline-block px-3 py-1 rounded-full">
                  Experience
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#f6932d]">
                  With our all experience <br /> we will serve you
                </h2>

                <p className="text-[#ffffff] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  <br />
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
              </div>

              {/* Counters */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl bg-[#f6932d] px-6 py-2 rounded-xl font-extrabold">
                    10k+
                  </span>
                  <h6 className="mt-2 text-sm font-semibold">
                    Successful Trips
                  </h6>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-3xl bg-[#f6932d] px-6 py-2 rounded-xl font-extrabold">
                    1.2k+
                  </span>
                  <h6 className="mt-2 text-sm font-semibold">
                    Regular Clients
                  </h6>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-3xl bg-[#f6932d] px-5 py-2 rounded-xl font-extrabold">
                    3+
                  </span>
                  <h6 className="mt-2 text-sm font-semibold">
                    Years Experience
                  </h6>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://www.anubhavvacations.in/blog/wp-content/uploads/2024/10/spiritual-tour-south-india-temples.webp"
                alt="Spiritual Temple Tour"
                className="object-cover rounded-full h-72 w-72 md:h-96 md:w-96"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Gallery  */}
      <div className="p-4 bg-[#0f2a39]">
        <div>
          <h2 className="text-[#ffffff] text-sm italic font-semibold uppercase tracking-wide bg-orange-600 inline-block px-3 py-1 rounded-full">
            Gallery
          </h2>
          <h3 className="text-3xl font-bold text-[#f6932d] m-5">
            Visit Our Tour Gallery
          </h3>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 py-6">
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              className="w-full rounded-lg break-inside-avoid shadow-md hover:scale-110 transition-transform duration-500 ease-in"
            />
          ))}
        </div>
      </div>
      {/* ============================================Comments====================================== */}
      <section className="bg-[#0f2a39] p-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className=" w-full">
              <h2 className="text-[#ffffff] text-sm italic font-semibold uppercase tracking-wide bg-orange-600 inline-block px-3 py-1 rounded-full">
                Reviews
              </h2>
              <h2 className="text-3xl font-bold text-[#f6932d] m-5">
                Coustmer Satisfaction and their reviews
              </h2>
            </div>
          </div>
          <Comments />
        </div>
      </section>
      <div className="px-12 bg-[#0f2a39]">
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
