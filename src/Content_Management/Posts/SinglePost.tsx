import { useParams } from "react-router-dom";
import { allNews } from "../../assets/data/news";
import { slugify } from "../../utils/slugify";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const SinglePost: React.FC = () => {
  const { slug } = useParams();
  const newsItem = allNews.find((item) => slugify(item.title) === slug);

  if (!newsItem) return <p className="text-center text-2xl">News not found</p>;
  console.log(allNews.map((item) => slugify(item.title)));

  return (
    <>
      <Header />
      <section className="mx-[10%] pt-38 mb-44">
        <div className="">
          <div className="">
            <h1 className="font-bold text-6xl justify-center mx-auto max-w-[1200px]">
              {newsItem.title}
            </h1>
            <h1 className="mb-12 ml-44">{newsItem.date}</h1>
            <img src={newsItem.image.src} alt="" className="flex min-w-[1200px] justify-center mx-auto" />
            {newsItem.news.map((para, index) => (
              <p key={index} className="mx-[15%] text-justify my-12 text-xl">{para}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SinglePost;