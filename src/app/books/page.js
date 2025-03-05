import Image from "next/image";
import booksCover from "../../assets/booksCover.jpg";
import Star from "@/component/Shared/Star";
const BooksPage = async () => {
  const res = await fetch("https://boighor-server-electra51.vercel.app/books", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log("data", data?.data);
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="max-w-[1390px] h-[500px] rounded-sm relative mb-24">
        <Image
          src={booksCover}
          alt=""
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
      <div className="grid grid-cols-4 gap-6 mb-24">
        {data?.data?.map((e, i) => {
          // console.log("e", e);
          return (
            <div key={i}>
              <div className="bg-base-100 group hover:bg-[#225f82] rounded-sm transition duration-300 shadow-md border border-gray-200 h-[460px]">
                <div className="flex justify-center items-center pt-6">
                  <img src={e?.image} alt={e?.title} width={160} />
                </div>

                <div className="text-center mt-5 group-hover:text-white">
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
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
