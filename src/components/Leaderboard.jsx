import React from "react";

function Leaderboard() {
  return (
    <div className="">
      <div className="max-w-[80%] mx-auto flex items-center justify-between mt-10 border-[1px] border-[#279EFF] rounded-lg py-4 px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[32px]">Days</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[32px]">Hours</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[32px]">Minutes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[32px]">Seconds</p>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="title">Questers (899)</h1>
      </div>
    </div>
  );
}

export default Leaderboard;
