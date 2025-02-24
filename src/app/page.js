import Banner from "@/component/Banner";
import BookCollection from "@/component/BookCollection";
import ResentCollection from "@/component/Shared/ResentCollection";

export const metadata = {
  title: "Chapter One | Home page",
  description: "Design and developed by Safayet Nur using create next app",
};

const HomePage = async () => {
  const res = await fetch("https://boighor-server-electra51.vercel.app/books", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  console.log("data", data?.data);
  const resentRes = await fetch(
    "https://boighor-server-electra51.vercel.app/getbooks",
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const resentdata = await resentRes.json();
  console.log("resentdata", data?.data);
  return (
    <div>
      <div>
        <Banner />
      </div>
      <ResentCollection resentdata={resentdata} />
      <BookCollection data={data} />
    </div>
  );
};

export default HomePage;
