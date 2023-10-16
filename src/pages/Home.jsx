import React from "react";
import { LogoQuest, Banner } from "../asset/img";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="mx-auto max-w-screen-2xl w-full mt-10 overflow-hidden px-2">
      <div className="flex items-center ">
        <img className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] object-cover rounded-lg" src={LogoQuest} alt="logo" />
        <h1 className="text-[24px] md:text-[40px] font-bold text-white ml-5">PLATS QUEST</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 ml-8">
        <div className=" md:flex-1 md:absolute md:top-[25%] md:z-50">
          <h1 className="text-[36px] md:text-[80px] w-fit text-white font-medium border-b-2 border-gray-400">
            PLATS QUEST
          </h1>
          <h2 className="text-[30px] md:text-[60px] w-fit text-[#ED3A85] font-medium border-b-2 border-gray-400 mt-4 break-words">
            Explore, Engage, Educate
          </h2>
          <h2 className="text-[32px] text-wra md:text-[50px] text-white font-medium mt-4">
            Polkadot's Quest Campaigns
          </h2>
          <p className="text-[18px] md:text-[26px] text-white mt-4 md:mt-10 w-[400px] md:w-[720px]">
            Provide an effective Marketing Tool for every project in the Polkadot ecosystem
          </p>
          <div className="md:hidden h-fit">
            <img className="w-[400px] h-[300px] -ml-[120px] -mt-[50px] object-cover" src={Banner} alt="banner" />
          </div>
          <div className="flex items-center gap-4 md:gap-10 mt-10">
            <button className="btnGradient1 cursor-pointer py-2 px-4 md:py-4 md:px-10 rounded-lg text-[16px] md:text-[20px] font-normal md:font-bold text-white">
              Start Earning
            </button>
            <button
              onClick={() => navigate("/quest")}
              className="btnGradient1 cursor-pointer py-2 px-4 md:py-4 md:px-10 rounded-lg text-[16px] md:text-[20px] font-normal md:font-bold text-white"
            >
              Create Campaign Now
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-1 w-full">
          <img className="w-full md:-mt-[150px] md:relative" src={Banner} alt="banner" />
        </div>
      </div>
    </main>
  );
}

export default Home;
