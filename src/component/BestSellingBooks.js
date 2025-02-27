"use client";
import React from "react";

const BestSellingBooks = ({ bestSell }) => {
  console.log("best", bestSell?.data);
  return (
    <div className=" py-28">
      <div className="max-w-[1300px] mx-auto">
        <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-10 mr-auto w-[230px]">
          Best Selling Books
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-3 gap-y-8">hello</div>
          <div>hellll</div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingBooks;
