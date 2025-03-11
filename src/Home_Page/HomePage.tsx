import Header from "../Components/Header";
import banner from "../assets/banner1.png";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <section className="flex items-center justify-center min-h-[800px] px-4">
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
                          <button className="bg-black/70 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-black transition-all ease-in-out duration-300">Sign In</button>
                          <button className="px-6 py-2 border-1 hover:bg-black/10 cursor-pointer transition-all ease-in-out duration-300 rounded-lg">Sign up</button>
                      </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={banner} alt="news banner" className="max-w-[450px] w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
