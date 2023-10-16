import React from "react";
import { Input } from "antd";

function HashTag({ setHashtag }) {
  return (
    <div className="border-[1px] md:border-2 rounded-lg p-2 md:py-4 md:px-6 mb-4">
      <h1 className="text-[16px] md:text-[24px] font-semibold text-white">Twitter Hashtag</h1>
      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          Hashtags (separated by comma)
        </label>
        <Input
          onChange={(e) => setHashtag(e.target.value)}
          id="follow"
          className="leading-[50px] placeholder:text-[18px] "
          placeholder="#Twitter, #Retweet, #Like"
        />
      </div>
    </div>
  );
}

export default HashTag;
