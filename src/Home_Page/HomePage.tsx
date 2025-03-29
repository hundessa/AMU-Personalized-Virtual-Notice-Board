import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import banner from "../assets/banner1.png";
import NewsCard from "../Components/Cards/NewsCards";
import { news } from "../assets/data/news";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Components/Footer";

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

      <section className="mt-22 mb-32">
        <div className="flex flex-col items-center text-center">
          <h1 className=" font-bold text-4xl">Latest News</h1>
          <p className="">
            Stay updated with the most recent headlines and breaking stories.
          </p>
        </div>
        <div className="mt-22">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            slidesPerView={4}
            spaceBetween={-150}
            // spaceBetween={20}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
              640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
              1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptops
              1280: { slidesPerView: 4, spaceBetween: -50 }, // Large Screens
            }}
          >
            {news.map((news, index) => {
              return (
                <div key={index} className="">
                  <SwiperSlide key={index} className="">
                    <div className="xl:mx-14 w-[400px]">
                      <NewsCard
                        image={news.image}
                        title={news.title}
                        news={news.news}
                        date={news.date}
                        category={news.category}
                      />
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
        {/* <div className="flex gap-x-6 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory px-4 py-6">
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
          </div> */}
      </section>
      <section>
        <div className="bg-[var(--muted)] py-22">
          <div className="flex flex-col text-center mb-22">
            <h1 className="text-4xl font-bold">Other News</h1>
            <p>
              Explore more stories and stay informed with additional updates.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-12 gap-y-12 mx-[15%]">
            {news.map((news, index) => (
              <div key={index}>
                <NewsCard
                  image={news.image}
                  title={news.title}
                  news={news.news}
                  date={news.date}
                  category={news.category}
                />
              </div>
            ))}
          </div>
          <div className="flex mt-18">
            <button className="font-bold text-xl text-white mx-auto px-6 py-2 rounded-lg cursor-pointer bg-black/70 hover:bg-black transition-all ease-in-out duration-300">Explore More</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
