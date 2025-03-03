"use client";
import React from "react";
import bsImg from "../assets/bs.webp";
import bs1Img from "../assets/bs1.png";
import Image from "next/image";
const BestCollection = () => {
  return (
    <div className="">
      <div
        className="max-w-[1300px] mx-auto rounded-sm grid grid-cols-2 gap-5"
        style={{
          backgroundImage: `url(${bsImg.src})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="p-20">
          <p className="font-medium text-[16px] pb-1 mb-2 text-white">
            Best Collections.
          </p>
          <p className="uppercase text-4xl text-white tracking-[0.1rem] font-semibold best">
            Top favourite Thriller Stories
          </p>
          <button className="hover:bg-[#59C2DA] bg-[#225f82] text-white px-2 py-1 mt-5 rounded-sm text-[14px]">
            Discover Now
          </button>
        </div>

        <div>
          <Image src={bs1Img} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default BestCollection;
