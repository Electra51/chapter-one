import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ ratingPoint }) => {
  // console.log(ratingPoint);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {ratingPoint >= index + 1 ? (
          <FaStar className="text-orange-500 text-[0.8rem]" />
        ) : ratingPoint >= number ? (
          <FaStarHalfAlt className="text-orange-500 text-[0.8rem]" />
        ) : (
          <AiOutlineStar className="text-orange-500 text-[0.8rem]" />
        )}
      </span>
    );
  });
  return (
    <div>
      {ratingPoint == "NaN" ? (
        <span className="text-[0.8rem] text-center">no reviews</span>
      ) : (
        <div className="flex gap-[1px] items-center justify-center">
          {ratingStar} ({ratingPoint})
        </div>
      )}
    </div>
  );
};

export default Star;
