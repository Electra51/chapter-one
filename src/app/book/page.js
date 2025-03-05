import Image from "next/image";
import booksCover from "../../assets/booksCover.jpg";
import SearchFilter from "@/component/SearchFilter";

export const metadata = {
  title: "Chapter One | Book page",
  description: "Design and developed by Safayet Nur using create next app",
};

const BooksPage = async () => {
  const res = await fetch("https://boighor-server-electra51.vercel.app/books", {
    next: { revalidate: 5 },
  });
  const data = await res.json();

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="max-w-[1390px] h-[500px] rounded-sm relative mb-18">
        <Image
          src={booksCover}
          alt="Books Cover"
          className="h-full w-full object-fill rounded-sm"
        />
        <div className="absolute top-[36%] left-[35%] text-white">
          <h3 className="text-3xl font-bold text-center mt-10">
            All Collections
          </h3>
          <p className="text-[16px] font-normal text-center mt-2">
            A room without books is like a body without a soul.
          </p>
        </div>
      </div>
      <SearchFilter data={data} />
    </div>
  );
};

export default BooksPage;
