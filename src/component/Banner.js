import Image from "next/image";
import banner1Image from "../assets/slider.webp";

const Banner = () => {
  return (
    <div className="relative">
      <div className=" absolute top-[30%] left-44 w-[760px]">
        <p className="text-[18px] mt-6 w-[650px] tracking-[0.01rem]">
          Year end sale
        </p>
        <p className="font-bold text-6xl text-[#DF7A58] mt-3 tracking-[0.1rem] leading-16 w-[670px]">
          Get 70% Off, Each Design Books
        </p>
        <p className="text-[18px] mt-3 w-[650px] tracking-[0.01rem]">
          Find the perfect read, enjoy great deals, and bring your next favorite
          book home today!
        </p>
        <button className="mt-6 rounded-sm hover:bg-[#59C2DA] bg-[#225f82] px-5 py-1.5 text-center text-white cursor-pointer">
          Shop Now
        </button>
      </div>
      <Image src={banner1Image} alt="" />
    </div>
  );
};

export default Banner;
