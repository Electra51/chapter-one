"use client";
import { useState } from "react";
import Star from "./Shared/Star";
import Card from "./Shared/Card";

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
    <div className="max-w-[1320px] mx-auto">
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-12 mr-auto w-[210px]">
        Our Collections
      </p>
      <div className="grid grid-cols-4 gap-6">
        {data?.data?.slice(0, visibleItems).map((e, i) => (
          <Card key={i} e={e} />
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
