import Card from "./Card";
import Star from "./Star";

const ResentCollection = ({ resentdata }) => {
  return (
    <div className="max-w-[1400px] mx-auto py-28">
      <p className="font-bold text-2xl border-0 border-b border-gray-300 pb-1 mb-18 mr-auto w-[210px]">
        Featured Books
      </p>
      <div className="grid grid-cols-4 gap-6">
        {resentdata?.data?.map((e, i) => {
          return <Card e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ResentCollection;
