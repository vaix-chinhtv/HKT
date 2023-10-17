import React from "react";
import { Input } from "antd";
import { FaWindowClose } from "react-icons/fa";

function HashTag({ setHashtag, setActionTwitter }) {
  return (
    <div className="borderBlue rounded-lg p-2 md:py-4 md:px-6 mb-4 relative">
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
      <div
        onClick={() => setActionTwitter((prev) => ({ ...prev, Hashtag: !prev.Hashtag }))}
        className="absolute top-4 right-4 z-10"
      >
        <FaWindowClose className="w-[40px] h-[40px] text-white cursor-pointer hover:text-yellow-300 active:opacity-40" />
      </div>
    </div>
  );
}

export default HashTag;
