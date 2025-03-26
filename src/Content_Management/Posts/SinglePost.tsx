import { useParams } from "react-router-dom";
import { allNews } from "../../assets/data/news";
import { slugify } from "../../utils/slugify";


const SinglePost: React.FC = () => {

  const { slug } = useParams();
  const newsItem = allNews.find((item) => slugify(item.title) === slug);

  if (!newsItem) return <p className="text-center text-2xl">News not found</p>
console.log(allNews.map((item) => slugify(item.title))); 

    return (
      <>
        <section className="mx-[10%]">
          <div className="">
            <div className="">
              <h1 className="font-bold text-5xl text-center">{newsItem.title}</h1>
              <h1 className="text-center">{ newsItem.duration}</h1>
              <img src={newsItem.image.src} alt="" className="flex w-full"/>
              <p className="mx-[15%] text-justify">{ newsItem.news}</p>
            </div>
          </div>
        </section>
      </>
    );
}


export default SinglePost;