import React from "react";
import Star from "./Shared/Star";

const PIckRightOne = ({ data }) => {
  return (
    <div className="max-w-[1320px] mx-auto py-20">
      {" "}
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-12 mr-auto w-[210px]">
        Pick Right One
      </p>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex justify-normal items-start gap-5">
            <img src={data[0]?.image} alt={data[0]?.title} width={240} />
            <div>
              <div className="flex justify-start items-start">
                <Star ratingPoint={data[0].rating} />
              </div>
              <h2 className="font-semibold">{data[0].title}</h2>
              <p className="underline font-normal my-2">{data[0]?.author}</p>

              <p className="text-justify">
                {data[0].description.slice(0, 310) + "..."}
              </p>
              <p className="mt-5">$ {data[0].price}.00</p>
              <button className="hover:bg-[#59C2DA] bg-[#225f82] text-white px-2 py-1 mt-5 rounded-sm text-[14px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data?.slice(1, 5).map((e, i) => {
            return (
              <div key={i}>
                <div className="bg-base-100 shadow-md border border-gray-200 h-[170px] flex justify-normal items-start gap-3">
                  <div className="flex justify-center items-center pl-3 pt-2.5">
                    <img src={e?.image} alt={e?.title} width={100} />
                  </div>

                  <div className="mt-5">
                    <h4 className="font-semibold">{e?.title}</h4>
                    <p>Price: {e?.price}</p>

                    <div className="flex justify-start items-start">
                      <Star ratingPoint={e?.rating} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PIckRightOne;
