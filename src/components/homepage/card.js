/* eslint-disable react/prop-types */
import React from 'react';

function Card({ img, title, isInverted, description }) {
  return (
    <>
      <div
        className={`flex overflow-hidden w-full max-sm:pt-10 md:p-20 max-sm:text-center max-sm:flex-col max-sm:h-mobile items-center h-desktop justify-around bg-gradient-to-t ${
          isInverted
            ? 'from-orangeIndexBg to-mainPurple'
            : ' from-mainPurple to-orangeIndexBg'
        }`}
      >
        {isInverted ? (
          <>
            <div>
              <img className="object-scale-down h-80 w-90" src={img} alt="" />
            </div>
            <div className="md:pt-28 md:mr-11  max-sm:mx-4">
              <h1 className="text-5xl md:ml-11 font-squada text-grayLight">
                {title}
              </h1>
              <div className="">
                <p className="md:ml-11 font-squada p-8 rounded-md mb-10 mt-20 bg-dark-theme-bg bg-opacity-40 text-grayLight">
                  {description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:pt-26 md:mr-11  max-sm:mx-4">
              <h1 className="text-5xl font-squada text-white ml-4">{title}</h1>
              <div className="">
                <p className="md:ml-11 font-squada p-8 rounded-md mt-20 bg-dark-theme-bg bg-opacity-40 text-grayLight">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex">
              <img className="object-scale-down h-80 w-90" src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
