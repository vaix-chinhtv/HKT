import React from "react";
import { Input } from "antd";

function Retweet({ setRetweet }) {
  return (
    <div className="border-[1px] md:border-2 rounded-lg p-2 md:py-4 md:px-6 mb-4">
      <h1 className="text-[16px] md:text-[24px] font-semibold text-white">Twitter Retweet</h1>

      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          URL
        </label>
        <Input
          onChange={(e) => setRetweet(e.target.value)}
          id="follow"
          placeholder="https://twitter.com/intent/tweet"
        />
      </div>
    </div>
  );
}

export default Retweet;
