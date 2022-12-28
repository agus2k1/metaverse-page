/* eslint-disable @next/next/no-img-element */
import React from 'react';

const WorldSign = ({ title, amount, image }) => (
  <div className="absolute w-[196px] h-[158px] rounded-[24px] bg-[#5d6680]">
    <img
      src={image}
      alt="people"
      className="absolute w-full h-full rounded-[24px] p-[6px]"
    />
    <h1 className="absolute bottom-[10%] left-[11%] text-lg text-white text-bold">
      {title}
    </h1>
    <p className="absolute bottom-[33%] left-[38%] text-xs text-white text-normal">
      + {amount} has joined
    </p>
    <img
      src="/person-01.png"
      alt="person"
      className="absolute bottom-[32%] left-[10%] z-20"
    />
    <img
      src="/person-02.png"
      alt="person"
      className="absolute bottom-[32%] left-[15%] z-10"
    />
    <img
      src="/person-03.png"
      alt="person"
      className="absolute bottom-[32%] left-[20%]"
    />
  </div>
);

export default WorldSign;
