import React from "react";
import Kaamharu from "../../utils/Experiences";

const Experiences = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 m-auto w-full max-w-screen-xl">
      {Kaamharu.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between mb-4 w-full rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-center bg-no-repeat bg-cover min-h-[250px] max-h-[300px]"
            style={{
              backgroundImage: `url(${item.bg_img_url})`,
            }}
          >
            <div className="bg-white/30 backdrop-brightness-90 backdrop-blur-sm p-4 w-full h-full flex flex-col justify-end">
              <h1 className="text-lg md:text-xl font-semibold underline">{item.title}</h1>
              <p className="text-sm md:text-base leading-relaxed mt-2">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
