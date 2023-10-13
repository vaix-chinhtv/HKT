import React from "react";
import { Input } from "antd";

function HashTag() {
  return (
    <div className="border-2 rounded-lg py-4 px-6 mb-4">
      <h1 className="text-[24px] font-semibold text-white">Twitter HashTag</h1>

      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          Hashtags (separated by comma)
        </label>
        <Input
          id="follow"
          className="leading-[50px] placeholder:text-[18px] "
          placeholder="#Twitter, #Retweet, #Like"
        />
      </div>
    </div>
  );
}

export default HashTag;
