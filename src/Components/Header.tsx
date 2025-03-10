import logo from "../assets/logo1.png";

const Header: React.FC = () => {
  return (
    <>
      <header className="shadow-xl z-[10001] static bg-white bg-opacity-45 backdrop-blur-md">
        <div className="flex justify-around">
          <a href="">
            <div className="flex">
              <img src={logo} alt="logo" className="size-22" />
              <h1 className="flex items-center">Amu News</h1>
            </div>
          </a>
          <div className="flex space-x-12 text-2xl items-center">
            <a href="" className="hover:border-b-[2px]">Home</a>
            <a href="" className="hover:border-b-[2px]">News</a>
            <a href="" className="hover:border-b-[2px]">Contact Us</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-xl p-2 border-1 border-black/20 hover:border0 rounded-lg cursor-pointer font-semibold hover:bg-black/10 transition-all ease-in-out duration-500">Sign Up</button>
            <button className="cursor-pointer font-semibold bg-black text-xl text-white p-2 rounded-lg hover:bg-black/70 hover:text- transition-all ease-in-out duration-500">Sign In</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
