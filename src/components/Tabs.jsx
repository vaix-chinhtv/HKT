/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Setup from "./Setup";
import Reward from "./Reward";
import Entries from "./Entries";
import Deposit from "./Deposit";
import Leaderboard from "./Leaderboard";
import { Segmented } from "antd";

const listTabs = ["Setup", "Entries", "Reward", "Deposit", "Leaderboard"];

function Tabs() {
  const [value, setValue] = useState("Setup");
  const Options = {
    Setup: <Setup setValue={setValue} />,
    Entries: <Entries setValue={setValue} />,
    Reward: <Reward setValue={setValue} />,
    Deposit: <Deposit setValue={setValue} />,
    Leaderboard: <Leaderboard />,
  };
  return (
    <>
      <div className="w-[50%] pb-4">
        <Segmented className="" options={listTabs} value={value} onChange={setValue} />
      </div>
      {Options[value]}
    </>
  );
}

export default Tabs;
