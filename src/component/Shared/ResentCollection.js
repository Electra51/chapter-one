import Star from "./Star";

const ResentCollection = ({ resentdata }) => {
  console.log("resentdata", resentdata);
  return (
    <div className="max-w-[1300px] mx-auto py-[100px]">
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-24 mr-auto w-[210px]">
        Featured Books
      </p>
      <div className="grid grid-cols-4 gap-6">
        {resentdata?.data?.map((e, i) => {
          console.log("e", e);
          return (
            <div key={i}>
              <div className="bg-base-100 shadow-md border border-gray-200 h-[460px]">
                <div className="flex justify-center items-center pt-6">
                  <img src={e?.image} alt={e?.title} width={160} />
                </div>

                <div className="text-center mt-5">
                  <h2 className="text-center font-semibold">{e?.title}</h2>
                  <p>Price: {e?.price}</p>

                  <Star ratingPoint={e?.rating} />

                  <div className="card-actions justify-center mt-5">
                    <button className="bg-[#59C2DA] px-2 py-1.5 text-white font-medium text-[14px] rounded-sm hover:bg-blue-500">
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

export default ResentCollection;
