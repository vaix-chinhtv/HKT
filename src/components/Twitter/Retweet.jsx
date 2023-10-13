import React from "react";
import { Input } from "antd";

function Retweet() {
  return (
    <div className="border-2 rounded-lg py-4 px-6 mb-4">
      <h1 className="text-[24px] font-semibold text-white">Twitter Retweet</h1>

      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          URL
        </label>
        <Input
          id="follow"
          className="leading-[50px] placeholder:text-[18px] "
          placeholder="https://twitter.com/intent/tweet"
        />
      </div>
    </div>
  );
}

export default Retweet;
