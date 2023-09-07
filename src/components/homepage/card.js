/* eslint-disable react/prop-types */
import React from 'react';

function Card({ img, title, isInverted, description }) {
  return (
    <>
      <div
        className={`flex font-squada overflow-hidden w-full max-sm:pt-10 md:p-20 max-sm:text-center max-sm:flex-col sm:h-mobile items-center h-desktop justify-around bg-gradient-to-b ${
          isInverted
            ? 'from-mainPurple via-mediumpurple to-orangeIndexBg'
            : 'from-orangeIndexBg via-mediumpurple to-mainPurple'
        }`}
      >
        {isInverted ? (
          <>
            <div>
              <img className="object-scale-down h-80 w-90" src={img} alt="" />
            </div>
            <div className="md:pt-28 md:mr-11 max-sm:mx-4">
              <h1 className="text-6xl md:ml-11  text-grayLight">{title}</h1>
              <div className="">
                <p className="md:ml-11 p-8 rounded-md mb-10 mt-20 bg-dark-theme-bg bg-opacity-40 text-grayLight">
                  {description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="md:pt-26 md:mr-11  max-sm:mx-4">
              <h1 className="text-6xl  text-white ml-4">{title}</h1>
              <p className="md:ml-11  p-8 rounded-md mt-20 bg-dark-theme-bg bg-opacity-40 text-grayLight">
                {description}
              </p>
            </div>
            <div className="flex">
              <img className="object-scale-down h-90 w-80" src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
