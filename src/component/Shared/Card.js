import React from "react";
import Star from "./Star";
import Link from "next/link";
import love from "../../assets/love.png";
import Fakalove from "../../assets/fakalove.png";
import Image from "next/image";
const Card = ({ e }) => {
  return (
    <div className="bg-base-100 group hover:bg-[#225f82] rounded-sm transition duration-300 shadow-md border border-gray-200 h-[460px] relative">
      <Image src={Fakalove} alt="" className="h-5 w-5 absolute top-4 right-3" />
      <div className="flex justify-center items-center pt-6">
        <img src={e?.image} alt={e?.title} width={160} />
      </div>

      <div className="text-center mt-5 group-hover:text-white">
        <h2 className="text-center font-semibold">{e?.title}</h2>
        <p>Price: {e?.price}</p>

        <Star ratingPoint={e?.rating} />

        <div className="card-actions justify-center mt-5">
          <Link
            href={`/book/${e?._id}`}
            className="rounded-sm hover:bg-[#59C2DA] bg-[#225f82] px-5 py-1.5 text-center text-white cursor-pointer">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
