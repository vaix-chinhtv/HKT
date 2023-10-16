import React from "react";
import { Input } from "antd";

function Like({ setLike }) {
  return (
    <div className="border-[1px] md:border-2 rounded-lg p-2 md:py-4 md:px-6 mb-4">
      <h1 className="text-[16px] md:text-[24px] font-semibold text-white">Twitter Like</h1>
      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          URL
        </label>
        <Input onChange={(e) => setLike(e.target.value)} id="follow" className="leading-[50px]" />
      </div>
    </div>
  );
}

export default Like;
