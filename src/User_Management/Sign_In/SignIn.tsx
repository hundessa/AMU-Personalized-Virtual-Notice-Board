import logo from "../../assets/logo1.png"

const SignIn: React.FC = () => {
    return (
      <>
        <div className="bg-image h-screen">
          <div className="pt-[5%] backdrop-blur-[15px] h-screen">
            <div>
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="size-22 absolute top-0 left-6"
                />
              </a>
            </div>
            <h1 className="font-bold text-white text-4xl pb-2 relative w-fit mx-auto after:content-[''] after:w-16 after:border-b-4 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2">
              Sign Up
            </h1>
            <div className="flex justify-center mt-[1%]">
              <div className="bg-white/20 border border-white/20 shadow-xl rounded-lg p-8 w-[40%] text-white">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="email" className="text-2xl font-bold">
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="border-2 mt-3 py-2 w-full border-slate-400 rounded-sm outline-none pl-2 bg-transparent text-white focus:bg-white/80 focus:text-black/80"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-2xl font-bold">
                      Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="border-2 mt-3 py-2 w-full border-slate-400 rounded-sm outline-none pl-2 bg-transparent text-white focus:bg-white/80 focus:text-black/80"
                    />
                  </div>
                  <button className="w-full text-white text-2xl font-bold mt-8 border border-white/30 px-8 py-2 rounded-lg bg-white/40 hover:bg-white/80 hover:text-black/60 cursor-pointer transition-all ease-in-out duration-300">
                    Sign In
                  </button>
                  <div className="flex justify-center space-x-2">
                    <h1>Don't have an account?</h1>
                    <a
                      href="/sign-up"
                      className="text-blue-400 hover:underline"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SignIn;