const SignUp: React.FC = () => {
  return (
    <>
      <div className="bg-image h-screen">
        <div className="pt-[5%] backdrop-blur-[15px] h-screen">
          <h1 className="font-bold text-white text-4xl pb-2 relative w-fit mx-auto after:content-[''] after:w-16 after:border-b-4 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
            Sign Up
          </h1>
          <div className="flex mx-[30%] mt-[1%] bg-slate200 bg-white/30 backdrop-blur-xl border border-slate300 border-white/20 shadow-xl rounded-lg">
            <div className="my-[6%] mx-[30%] text-white">
              <div className="">
                <label htmlFor="" className="text-2xl">
                  First Name:
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="border-2 mt-3 py-2 w-[150%] border-slate-400 rounded-sm outline-none pl-2"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-2xl">
                  Last Name:
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="border-2 mt-3 py-2 w-[150%] border-slate-400 rounded-sm outline-none pl-2"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-2xl">
                  Email:
                </label>{" "}
                <br />
                <input
                  type="email"
                  className="border-2 mt-3 py-2 w-[150%] border-slate-400 rounded-sm outline-none pl-2"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-2xl">
                  Password:
                </label>{" "}
                <br />
                <input
                  type="password"
                  className="border-2 mt-3 py-2 w-[150%] border-slate-400 rounded-sm outline-none pl-2"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-2xl">
                  Confirm Password:
                </label>{" "}
                <br />
                <input
                  type="password"
                  className="border-2 mt-3 py-2 w-[150%] border-slate-400 rounded-sm outline-none pl-2"
                />
              </div>
              <button className="flex mx-auto text-white text-xl font-bold mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
