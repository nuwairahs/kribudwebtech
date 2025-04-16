import React from "react";
import hero from "../assets/hero.png";
export const Hero = () => {
  return (
    <div className="h-[90vh] w-full bg-gradient-to-tr max-lg:flex-col from-orange-50 via-white to-white flex">
      <div className="w-[60%] max-lg:w-full max-lg:p-8 h-full p-20 px-30 gap-6 font-poppins flex flex-col justify-center">
        <h1 className=" text-7xl max-lg:text-5xl max-lg:leading-14 text-[#333333]  leading-20 font-semibold">
          We help <br />
          you to boost <br />
          your business
        </h1>
        <p className="font- text-xl max-lg:text-sm mt-3 text-neutral-500">
          We are a team of highly motivated and skilled developers dedicated to
          delivering only the best software.
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="p-2 w-9/12 max-lg:w-full max-lg:text-xs bg-white shadow-2xl rounded-full"
        >
          {/* Replace this with your Web3Forms access key */}
          <input type="hidden" name="access_key" value="your-access-key-here" />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="py-3 px-6 font-semibold outline-0 w-[70%]"
            required
          />

          <button
            type="submit"
            className="font-semibold w-[30%] bg-rose-300 rounded-full py-4 px-4"
          >
            Get Started
          </button>
        </form>
      </div>
      <div className="w-[40%] relative max-lg:w-full h-full flex justify-end">
        <div className="w-full h-full flex items-center  absolute">
          <div className="h-8/12 max-lg:h-full w-7/12 bg-gradient-to-r from-amber-300 overflow-hidden  via-amber-300 to-amber-200">
            <img
              src={hero}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-7/12 bg-[#000000] max-lg:w-full h-full"></div>
      </div>
    </div>
  );
};
