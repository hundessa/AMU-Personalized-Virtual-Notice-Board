import { categories } from "../../assets/data/news";
import logo from "../../assets/logo1.png";

const CategorySelection: React.FC = () => {
  return (
    <>
      <section>
        <div className="flex">
        <a href="/" className="flex mx-auto">
          <img src={logo} alt="logo" className="size-22"/>
          <h1 className="text-xl my-auto">Amu News</h1>
        </a>
        </div>
        <div className="flex my-14">
          <h1 className="flex mx-auto font-bold text-3xl">Categories</h1>
        </div>

        <div
          className="grid grid-cols-3 gap-y-4 justify-items-center w-fit mx-auto">
          {categories.map((category, index) => (
            <label
              key={index}
              className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all cursor-pointer min-w-[150px]"
            >
              <input
                type="checkbox"
                className="mr-2 w-5 h-5 accent-black cursor-pointer"
              />
              <h1 className="text-lg">{category.categoryName}</h1>
            </label>
          ))}
        </div>
        <div className="mt-16">
          <button className="text-white bg-black text-lg font-semibold flex mx-auto px-22 py-2 rounded-xl cursor-pointer">Continue</button>
        </div>
      </section>
    </>
  );
};

export default CategorySelection;
