import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import banner from "../assets/banner1.png";
import NewsCard from "../Components/Cards/NewsCards";
import { news } from "../assets/data/news";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const signinhandler = () => {
    navigate("/sign-in");
  };

  const signuphandler = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <Header />
      <section className="flex items-center justify-center min-h-[800px] px-4 bg-[var(--muted)]">
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1400px]">
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="font-extrabold text-[2.5rem] md:text-[3.5rem] leading-tight">
              Stay Informed with the Latest News
            </h1>
            <p className="text-lg text-gray-600 font-bold max-w-[400px]">
              Your trusted source for the latest, authentic and something
              something news
            </p>
            <div className="xl:flex mt-6 space-x-6 hidden">
              <button
                className="bg-black/70 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-black transition-all ease-in-out duration-300"
                onClick={signinhandler}
              >
                Sign In
              </button>
              <button
                className="px-6 py-2 border-1 hover:bg-black/10 cursor-pointer transition-all ease-in-out duration-300 rounded-lg"
                onClick={signuphandler}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="news banner"
              className="max-w-[450px] w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mt-22 mb-[900px]">
        <div className="flex flex-col items-center text-center">
          <h1 className=" font-bold text-4xl">Latest News</h1>
          <p className="">
            Stay updated with the most recent headlines and breaking stories.
          </p>
        </div>
        {/* <div className="flex gap-x-10 overflow-x-auto whitespace-nowrap">
          {news.map((news, index) => (
            <div key={index} className="shrink-0 w-[300px]">
              <NewsCard
                image={news.image}
                title={news.title}
                news={news.news}
                duration={news.duration}
              />
            </div>
          ))}
        </div> */}
        <div className="flex gap-x-6 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory px-4 py-6">
          {news.map((news, index) => (
            <div key={index} className="shrink-0 w-[400px] snap-start">
              <NewsCard
                image={news.image}
                title={news.title}
                news={news.news}
                duration={news.duration}
              />
            </div>
          ))}
          </div>
      </section>
    </>
  );
};

export default HomePage;
