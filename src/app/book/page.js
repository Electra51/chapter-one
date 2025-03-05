import Image from "next/image";
import booksCover from "../../assets/booksCover.jpg";
import Card from "@/component/Shared/Card";

const BooksPage = async () => {
  const res = await fetch("https://boighor-server-electra51.vercel.app/books", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
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
          return <Card e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default BooksPage;
