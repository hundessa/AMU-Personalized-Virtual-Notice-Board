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

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="shadow-xl z-[10001] static bg-white bg-opacity-45 backdrop-blur-md">
        <div className="flex justify-around">
          <a href="/">
            <div className="flex">
              <img src={logo} alt="logo" className="size-22" />
              <h1 className="xl:flex items-center hidden">Amu News</h1>
            </div>
          </a>
          <CgMenuGridO
            className="flex xl:hidden size-12 my-auto justify-end ml-auto mr-2"
            onClick={menuHandler}
          />
          {/* {menuOpen && ( */}
          {/* <div className="mt-22 sm:mt-0"> */}
          <div className="flex flex-col md:flex-row space-x-12 text-2xl items-center">
          {/* <div
            className={`${
              menuOpen ? "block" : "hidden"
            } xl:flex flex-col md:flex-row space-x-12 text-2xl items-center`}
          > */}
            {/* <div className="flex flex-col md:flex-row space-x-12 text-2xl items-center"> */}
              <a href="" className="hover:border-b-[2px]">
                Home
              </a>
              <a href="" className="hover:border-b-[2px]">
                News
              </a>
              <a href="" className="hover:border-b-[2px]">
                Contact Us
              </a>
            {/* </div> */}
            <div className="flex flex-col md:flex-row items-center space-x-6">
              <button
                className="text-xl p-2 border-1 border-black/20 hover:border0 rounded-lg cursor-pointer font-semibold hover:bg-black/10 transition-all ease-in-out duration-500"
                onClick={signuphandler}
              >
                Sign Up
              </button>
              <button className="cursor-pointer font-semibold bg-black text-xl text-white p-2 rounded-lg hover:bg-black/70 hover:text- transition-all ease-in-out duration-500">
                Sign In
              </button>
            </div>{" "}
          {/* </div> */}
          </div>
          {/* )} */}
        </div>
      </header>
    </>
  );
};

export default Header;
