import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              <span className="text-[#f6932d]">Subscribe</span> now to get
              useful traveling information.
            </h2>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              />
              <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition font-bold">
                Subscribe
              </button>
            </div>

            <p className="text-l text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              voluptatibus nostrum nisi, voluptas consequuntur ratione quas
              dolor saepe perferendis fugit in iusto natus laboriosam fugiat
              nemo magni. Obcaecati, nesciunt veritatis!
            </p>
          </div>

          {/* Right Column */}
          <div className="px-2">
            <img src="https://iili.io/3NMcUGf.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
