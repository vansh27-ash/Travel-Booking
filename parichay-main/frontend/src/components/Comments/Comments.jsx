import React from 'react';
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg"
const Comments = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
      swipeToSlide: true,
        slidesToScroll:3,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                    
                 },
                
            },
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    }
    return (
      <>
        <Slider {...settings}>
          <div>
            <div className="py-4 px-3 bg-white rounded-2xl shadow-md m-2">
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sit, explicabo provident hic distinctio molestias voluptates
                nobis alias placeat suscipit earum debitis recusandae voluptate
                illum expedita corrupti aliquid doloribus delectus?
              </p>
              <div className="flex items-center gap-4 mt-3 ">
                <img src={ava01} alt="" className="w-24 h-24 rounded-full" />
                <h6 className="mb-0 mt-3 text-xl">Kya naam rkhu</h6>
                <p className="text-sm">*Customer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="py-4 px-3 bg-white rounded-2xl shadow-md m-2">
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sit, explicabo provident hic distinctio molestias voluptates
                nobis alias placeat suscipit earum debitis recusandae voluptate
                illum expedita corrupti aliquid doloribus delectus?
              </p>
              <div className="flex items-center gap-4 mt-3 ">
                <img src={ava01} alt="" className="w-24 h-24 rounded-full" />
                <h6 className="mb-0 mt-3 text-xl">Kya naam rkhu</h6>
                <p className="text-sm">*Customer</p>
              </div>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-white rounded-2xl shadow-md m-2">
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sit, explicabo provident hic distinctio molestias voluptates
                nobis alias placeat suscipit earum debitis recusandae voluptate
                illum expedita corrupti aliquid doloribus delectus?
              </p>
              <div className="flex items-center gap-4 mt-3 ">
                <img src={ava01} alt="" className="w-24 h-24 rounded-full" />
                <h6 className="mb-0 mt-3 text-xl">Kya naam rkhu</h6>
                <p className="text-sm">*Customer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="py-4 px-3 bg-white rounded-2xl shadow-md m-2">
              <p className="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                sit, explicabo provident hic distinctio molestias voluptates
                nobis alias placeat suscipit earum debitis recusandae voluptate
                illum expedita corrupti aliquid doloribus delectus?
              </p>
              <div className="flex items-center gap-4 mt-3 ">
                <img src={ava01} alt="" className="w-24 h-24 rounded-full" />
                <h6 className="mb-0 mt-3 text-xl">Kya naam rkhu</h6>
                <p className="text-sm">*Customer</p>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
}

export default Comments