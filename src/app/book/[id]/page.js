import Star from "@/component/Shared/Star";
import Image from "next/image";
import img4 from "../../../assets/account-svgrepo-com.svg";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://boighor-server-electra51.vercel.app/book/${id}`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data = await res.json();
  return (
    <div className="max-w-[1400px] mx-auto my-24 flex justify-normal items-start gap-6">
      <div className="flex justify-center items-center w-[30%]">
        <Image src={data?.image} alt={data?.title} height={200} width={300} />
      </div>
      <div className="w-[70%]">
        <div className="flex justify-start items-start">
          <Star ratingPoint={data?.rating} />
        </div>
        <h4 className="font-semibold">{data?.title}</h4>
        <div className="flex justify-normal items-center gap-2">
          <Image src={img4} alt={data?.author} height={15} width={15} />{" "}
          <p className="underline font-normal my-2 text-gray-500 text-[14px]">
            {data?.author}
          </p>
        </div>
        <p className="mt-5 text-blue-600 font-medium text-[18px]">
          $ {data?.price}.00
        </p>
        <h2 className="my-2">
          <span className="font-semibold">Genre:</span> {data.genre}
        </h2>
        <h2 className="mb-2">
          <span className="font-semibold">Publication Date:</span>{" "}
          {data.publication_date}
        </h2>
        <p className=" text-justify">
          <span className="font-semibold">Description:</span>{" "}
          {data?.description}
        </p>
        <button className="hover:bg-[#59C2DA] bg-[#225f82] text-white px-2 py-1 mt-5 rounded-sm text-[14px]">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
