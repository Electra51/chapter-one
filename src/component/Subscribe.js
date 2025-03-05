"use client";
import React from "react";
import bsImg from "../assets/subscribe.png";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="my-32">
      <div className="max-w-[1320px] mx-auto rounded-sm flex justify-center items-center gap-20 bg-[#59C2DA] py-8">
        <div className="flex justify-center items-center">
          <Image src={bsImg} alt="" className="" height={190} width={280} />
        </div>
        <div className="w-[500px] flex flex-col justify-normal items-center">
          <p className="font-medium text-[16px] pb-1 mb-2 text-white">
            Stay In The Know.
          </p>
          <p className="uppercase text-center text-[18px] text-white tracking-[0.1rem] font-semibold text-wrap">
            Submit your email to receive exclusive B&N Press updates & special
            offers.
          </p>
          <div className="flex justify-center items-center mt-6">
            <input
              type="text"
              className="border bg-white border-[#225f82] placeholder:text-[14px] pl-2 py-1"
              placeholder="Enter your Email"
            />
            <button className="border-0 border-r border-t border-b px-2 text-white hover:bg-[#59C2DA] bg-[#225f82] border-[#225f82] py-1">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
