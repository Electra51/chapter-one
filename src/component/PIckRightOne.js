import React from "react";
import Star from "./Shared/Star";
import img4 from "../assets/account-svgrepo-com.svg";
import Image from "next/image";

const PIckRightOne = ({ data }) => {
  return (
    <div className="max-w-[1320px] mx-auto py-28">
      {" "}
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-12 mr-auto w-[210px]">
        Pick Right One
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex justify-normal items-start gap-5 border border-gray-100 bg-gray-50 rounded-sm shadow-fuchsia-300">
          <img
            src={data[0]?.image}
            alt={data[0]?.title}
            width={240}
            className="rounded-l-sm"
          />
          <div className="pr-6 pl-2">
            <div className="flex justify-start items-start pt-2">
              <Star ratingPoint={data[0].rating} />
            </div>
            <h2 className="font-semibold">{data[0].title}</h2>

            <div className="flex justify-normal items-center gap-2">
              <Image src={img4} alt={data[0]?.author} height={15} width={15} />{" "}
              <p className="underline font-normal my-2 text-gray-500 text-[14px]">
                {data[0]?.author}
              </p>
            </div>

            <p className="text-justify">
              {data[0].description.slice(0, 210) + "..."}
              <span className="underline text-blue-600 text-[14px]">
                Read more
              </span>
            </p>
            <p className="mt-5 text-blue-600 font-medium text-[18px]">
              $ {data[0].price}.00
            </p>
            <button className="hover:bg-[#59C2DA] bg-[#225f82] text-white px-2 py-1 mt-5 rounded-sm text-[14px]">
              Add to cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {data?.slice(1, 5).map((e, i) => {
            return (
              <div key={i}>
                <div className="bg-base-200 shadow-md border border-gray-200 h-[170px] flex justify-normal items-start gap-3">
                  <div className="flex justify-center items-center pl-3 pt-2.5">
                    <img src={e?.image} alt={e?.title} width={100} />
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-start items-start">
                      <Star ratingPoint={e?.rating} />
                    </div>
                    <h4 className="font-semibold">{e?.title}</h4>
                    <div className="flex justify-normal items-center gap-2">
                      <Image
                        src={img4}
                        alt={e?.author}
                        height={15}
                        width={15}
                      />{" "}
                      <p className="underline font-normal my-2 text-gray-500 text-[14px]">
                        {e?.author}
                      </p>
                    </div>
                    <p className="mt-5 text-blue-600 font-medium text-[18px]">
                      $ {e.price}.00
                    </p>
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
