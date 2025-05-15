import React from 'react'
import tours from "../../assets/tours.png"
const CommonSection = ({ title }) => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat h-[200px] flex flex-col items-center justify-center text-center text-white"
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://iili.io/3O3UB1I.png')`,
    //   }}
    >
      <div className="w-full px-4 mt-14">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </section>
    
  );
};

export default CommonSection;
