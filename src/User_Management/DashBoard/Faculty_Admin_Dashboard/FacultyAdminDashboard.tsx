import { useState } from "react";
import { allNews } from "../../../assets/data/news";
import Header from "../../../Components/Header";
import { Link } from "react-router-dom";
import NewsCard from "../../../Components/Cards/NewsCards";
import { slugify } from "../../../utils/slugify";

const ITEMS_PER_PAGE = 12;
const FacultyAdminDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(allNews.length / ITEMS_PER_PAGE);
  const paginatedNews = allNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(Number(page));
  };

  return (
    <>
      <Header />
      <section className="pt-34">
        <div>
          <div className="ml-44">
            <div className="flex justify-center">
              <h1 className="font-bold text-5xl bg-[var(--muted)] p-4 max-w-[700px] flex justify-center rounded-lg">
                Welcome Back Mr. Abebe
              </h1>
            </div>
            <div>
              <div className="mt-12">
                <div className="">
                  <h1 className="text-5xl font-bold ml-7">Latest Posts</h1>
                </div>
                <div className="grid grid-cols-3 gap-x-12 gap-y-12 mx[15%] mt-12">
                  {paginatedNews.map((news) => (
                    <Link
                      key={news.id}
                      to={`/news/${slugify(news.title)}`}
                      className="cursor-pointer"
                    >
                      <NewsCard
                        image={news.image}
                        title={news.title}
                        news={news.news}
                        date={news.date}
                        category={news.category}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {Array.from({ length: totalPage }, (_, index) => (
                  <button
                    key={index}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyAdminDashboard;
