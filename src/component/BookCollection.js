"use client";
import { useState } from "react";
import Star from "./Shared/Star";

const BookCollection = ({ data }) => {
  const [visibleItems, setVisibleItems] = useState(8);
  const totalItems = data?.data?.length || 0;

  const handleViewMore = () => {
    setVisibleItems(totalItems);
  };

  const handleShowLess = () => {
    setVisibleItems(8);
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-12 mr-auto w-[210px]">
        Our Collections
      </p>
      <div className="grid grid-cols-4 gap-6">
        {data?.data?.slice(0, visibleItems).map((e, i) => (
          <div key={i}>
            <div className="bg-base-100 shadow-md border border-gray-200 h-[460px]">
              <div className="flex justify-center items-center pt-6">
                <img src={e?.image} alt={e?.title} width={160} />
              </div>

              <div className="text-center mt-5">
                <h2 className="text-center font-semibold">{e?.title}</h2>
                <p>Price: {e?.price}</p>

                <Star ratingPoint={e?.rating} />

                <div className="card-actions justify-center mt-5">
                  <button className="rounded-sm hover:bg-[#59C2DA] bg-[#225f82] px-5 py-1.5 text-center text-white cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-8">
        {visibleItems < totalItems ? (
          <button
            onClick={handleViewMore}
            className="rounded-sm hover:bg-[#59C2DA] bg-[#225f82] px-5 py-1.5 text-center text-white cursor-pointer mr-4">
            View More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="mt-6 rounded-sm hover:bg-[#59C2DA] bg-[#225f82] px-5 py-1.5 text-center text-white cursor-pointer">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCollection;
