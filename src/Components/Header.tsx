import { useNavigate } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/logo1.png";
import { useState } from "react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const signuphandler = () => {
    navigate("/sign-up");
  };

  const signinhandler = () => {
    navigate("/sign-in");
  };

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="shadow-xl z-[10001] fixed w-full bg-white bg-opacity-45 backdrop-blur-md">
        <div className="flex justify-around">
          <a href="/" className="flex items-center">
            <div className="flex">
              <img
                src={logo}
                alt="logo"
                className="size-22 fixed left-1 bottom-2 top-[-2px] sm:static"
              />
              <h1 className="xl:flex items-center hidden">Amu News</h1>
            </div>
          </a>
          <CgMenuGridO
            className="flex xl:hidden size-12 my-auto justify-end ml-auto mr-2 fixed right-1 top-4"
            onClick={menuHandler}
          />
          <div className="mt-18 ml-4 sm:mt-0 w-full xl:w-auto">
            <nav
              className={`${
                menuOpen ? "flex" : "hidden"
              } xl:flex flex-col md:flex-row text-xl mt-8 gap-y-2 md:space-x-12`}
            >
              <a href="" className="hover:border-b-[2px]">
                Home
              </a>
              <a href="" className="hover:border-b-[2px]">
                News
              </a>
              <a href="" className="hover:border-b-[2px]">
                Contact Us
              </a>
              <div className="flex flex-col md:flex-row xl:space-x-6 space-y-2 xl:items-center xl:mt-[-10px] text-lg font-semibold">
                <button
                  className="p-2 border-1 border-black/20 rounded-lg cursor-pointer hover:bg-black/10 transition-all ease-in-out duration-500"
                  onClick={signuphandler}
                >
                  Sign Up
                </button>
                <button
                  className="cursor-pointer bg-black text-white p-2 xl:mt-[-6px] rounded-lg hover:bg-black/70 transition-all ease-in-out duration-500"
                  onClick={signinhandler}
                >
                  Sign In
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
