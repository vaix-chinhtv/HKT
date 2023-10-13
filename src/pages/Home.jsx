import React from "react";
import { LogoQuest, Banner } from "../asset/img";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="mx-auto max-w-screen-2xl w-full mt-10 overflow-hidden">
      <div className="flex items-center ">
        <img className="w-[80px] h-[80px] object-cover rounded-lg" src={LogoQuest} alt="logo" />
        <h1 className="text-[40px] font-bold text-white ml-5">PLATS QUEST</h1>
      </div>
      <div className="flex items-center justify-between mt-20">
        <div className="flex-1 absolute top-[25%] z-50">
          <h1 className="text-[80px] w-fit text-white font-medium border-b-2 border-gray-400">PLATS QUEST</h1>
          <h2 className="text-[60px] w-fit text-[#ED3A85] font-medium border-b-2 border-gray-400 mt-4">
            Explore, Engage, Educate
          </h2>
          <h2 className="text-[50px] text-white font-medium mt-4">Polkadot's Quest Campaigns</h2>
          <p className="text-[26px] text-white mt-10 w-[720px]">
            Provide an effective Marketing Tool for every project in the Polkadot ecosystem
          </p>
          <div className="flex items-center gap-10 mt-10">
            <button className="btnGradient1 cursor-pointer py-4 px-10 rounded-lg text-[20px] font-bold text-white">
              Start Earning
            </button>
            <button
              onClick={() => navigate("/quest")}
              className="btnGradient1 cursor-pointer py-4 px-10 rounded-lg text-[20px] font-bold text-white"
            >
              Create Campaign Now
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img className="w-full -mt-[150px] relative" src={Banner} alt="banner" />
        </div>
      </div>
    </main>
  );
}

export default Home;
