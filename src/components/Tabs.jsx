/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Setup from "./Setup";
import Reward from "./Reward";
import Quest from "./Quest";
import Deposit from "./Deposit";
import Leaderboard from "./Leaderboard";
import { Segmented } from "antd";

const listTabs = ["Setup", "Quest", "Reward", "Deposit", "Leaderboard"];

function Tabs() {
  const [value, setValue] = useState("Setup");
  const [valueSetup, setValueSetup] = useState();
  const [valueQuest, setValueQuest] = useState();
  const [valueReward, setValueReward] = useState();

  const Options = {
    Setup: <Setup setValue={setValue} setValueSetup={setValueSetup} />,
    Quest: <Quest setValue={setValue} setValueQuest={setValueQuest} />,
    Reward: <Reward setValue={setValue} setValueReward={setValueReward} />,
    Deposit: <Deposit setValue={setValue} amount={valueReward?.totalReward} />,
    Leaderboard: <Leaderboard startDate={valueSetup?.startDate} endDate={valueSetup?.endDate} />,
  };
  return (
    <>
      <div className="w-[50%] pb-4 px-2 md:px-0">
        <Segmented className="" options={listTabs} value={value} onChange={setValue} />
      </div>
      {Options[value]}
    </>
  );
}

export default Tabs;
