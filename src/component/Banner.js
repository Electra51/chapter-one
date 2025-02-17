import Image from "next/image";
import banner1Image from "../assets/slider.webp";

const Banner = () => {
  return (
    <div className="relative">
      <div className=" absolute top-1/2 left-24">
        <p>Year end sale</p>
        <p>Get 70% off for All design books</p>
        <p>
          Find the perfect read, enjoy great deals, and bring your next favorite
          book home today!
        </p>
      </div>
      <Image src={banner1Image} alt="" />
    </div>
  );
};

export default Banner;
