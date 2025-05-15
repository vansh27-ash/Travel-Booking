import React from 'react'
import './service-card.css'

import weatherImg from'../assets/weather.png'
import guideImg from'../assets/guide.png'
import customImg from'../assets/customization.png'

const ServiceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
  },
  {
    imgUrl: customImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
  },
];

const ServiceList = () => {
  return (
    <>
      <section className="py-6 px-16  bg-[#0f2a39]">
        <div className="max-w-7xl  px-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Text Column */}
            <div>
              <h5 className="services_subtitle text-pink-500 italic text-lg mb-2">
                What we serve
              </h5>
              <h2 className="services_title text-3xl font-bold text-[#f6932d] leading-snug">
                We offer our <br /> best services
              </h2>
            </div>

            {/* Services Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-end">
              {ServiceData.map((item, index) => (
                <div key={index}
                  className="bg-white rounded-xl border border-orange-100 p-6 shadow-sm hover:shadow-md transition "
                >
                  <div className="bg-orange-400 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceList