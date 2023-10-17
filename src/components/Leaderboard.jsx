import React, { useState } from "react";
import { DateTime } from "luxon";

function Leaderboard({ startDate, endDate }) {
  const now = DateTime.now();
  const start_date = DateTime.fromJSDate(new Date(startDate));
  const end_date = DateTime.fromJSDate(new Date(endDate));

  const [isRemainingToStart, setIsRemainingToStart] = useState(false);

  if (start_date && endDate) {
    const diff_now_start = start_date.diff(now).values.milliseconds;

    const diff_now_end = end_date.diff(now).values.milliseconds;
  }

  return (
    <div className="px-2 md:px-0">
      <h1 className="title">{isRemainingToStart ? "Countdown to the beginning" : "Time Remaining"}</h1>
      <div className="max-w-[85%] mx-auto flex items-center justify-between mt-10 border-[1px] border-[#279EFF] rounded-lg py-4 px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px] md:text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[18px] md:text-[32px]">Days</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px] md:text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[18px] md:text-[32px]">Hours</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px] md:text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[18px] md:text-[32px]">Minutes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[24px] md:text-[40px] text-white font-bold mb-3">3</p>
          <p className="text-white text-[18px] md:text-[32px]">Seconds</p>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="title">Questers (899)</h1>
      </div>
    </div>
  );
}

export default Leaderboard;
