"use client";
import Image from "next/image";
import img1 from "../assets/img3.png";
import img2 from "../assets/book2.jpeg";
import img3 from "../assets/book1.jpeg";

const books = [
  {
    id: 1,
    title: "COLLECT SHOP",
    subtitle: "Game. Anime. Life",
    image: img1,
    bgColor: "bg-gradient-to-r from-[#142D4C] to-[#203647]",
  },
  {
    id: 2,
    title: "THE TRUTH LIES HERE",
    subtitle: "New this week.",
    image: img2,
    bgColor: "bg-gradient-to-r from-[#651E3E] to-[#993955]",
  },
  {
    id: 3,
    title: "WOMAN IN THE WATER",
    subtitle: "Fiction bestsellers.",
    image: img3,
    bgColor: "bg-gradient-to-r from-[#0B3D2E] to-[#1C6E52]",
  },
];

const ExtraShop = () => {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-42">
      {books.map((book) => (
        <div
          key={book.id}
          className={`${book.bgColor} rounded-md h-[180px] px-3 py-2 grid grid-cols-2`}
          style={{
            backgroundImage: book.image,
          }}>
          <div className="">
            <p className="text-sm text-gray-300">{book.subtitle}</p>
            <h2 className="text-white text-2xl font-bold">{book.title}</h2>
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>

          <div>
            <Image
              src={book.image}
              alt={book.title}
              width={140}
              height={170}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraShop;
