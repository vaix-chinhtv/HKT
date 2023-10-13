import React from "react";
import { Input } from "antd";

function Follow() {
  return (
    <div className="border-2 rounded-lg py-4 px-6 mb-4">
      <h1 className="text-[24px] font-semibold text-white">Twitter Follow</h1>

      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          User Name
        </label>
        <Input id="follow" addonBefore="https://twitter.com/" className="leading-[50px]" />
      </div>
    </div>
  );
}

export default Follow;
