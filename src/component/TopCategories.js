import Image from "next/image";
import horrorImg from "../assets/top-category-img/horror.png";
import biographyImg from "../assets/top-category-img/biography.png";
import fantasyImg from "../assets/top-category-img/fantasy.png";
import fictionImg from "../assets/top-category-img/fiction.png";
import historyImg from "../assets/top-category-img/history.png";
import romanceImg from "../assets/top-category-img/romance.png";
import bannerImg from "../assets/top-category-img/top-categogries-img-banner.png";

const TopCategories = () => {
  return (
    <div className="bg-blue-100 py-28">
      <div className="max-w-[1300px] mx-auto">
        <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-10 mr-auto w-[210px]">
          Top Categories
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-3 gap-y-8">
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={horrorImg} alt="" height={50} width={50} />
              <div>
                <p>Horror</p>
                <p>5+</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={biographyImg} alt="" height={50} width={50} />
              <div>
                <p>Biography</p>
                <p>7+</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={fantasyImg} alt="" height={50} width={50} />
              <div>
                <p>Fantacy</p>
                <p>5+</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={historyImg} alt="" height={50} width={50} />
              <div>
                <p>History</p>
                <p>5+</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={fictionImg} alt="" height={50} width={50} />
              <div>
                <p>Fiction</p>
                <p>5+</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 border border-dashed rounded-sm border-gray-300 w-[180px] py-2 hover:scale-105 transition duration-500 hover:bg-gray-100 hover:text-[#225F82] text-[#215F85] shadow-sm">
              <Image src={romanceImg} alt="" height={50} width={50} />
              <div>
                <p>Romance</p>
                <p>5+</p>
              </div>
            </div>
          </div>
          <div>
            <Image src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
