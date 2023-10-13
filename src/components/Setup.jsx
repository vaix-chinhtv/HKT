import { Input } from "antd";
import React, { useState } from "react";
import { DatePicker } from "antd";

function Setup({ setValue }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="mt-5 w-full border-[1px] border-[#279EFF] py-6 px-8 rounded-lg">
        <div className="mb-6">
          <label htmlFor="default-input" className="heading">
            Title
          </label>
          <Input className="leading-[50px] placeholder:text-[18px] text-[18px]" />
        </div>

        <div>
          <label htmlFor="message" className="heading">
            Description
          </label>
          <Input.TextArea rows={4} />
        </div>

        <div className="flex items-center justify-between gap-10 mt-5 w-full">
          <div className="flex-1 w-full">
            <label className="block heading">Start Date</label>
            <DatePicker size="large" className="w-full p-3" />
          </div>
          <div className="flex-1">
            <label className="block heading">End Date</label>
            <DatePicker size="large" className="w-full p-3 text-white" />
          </div>
        </div>
      </div>
      <button
        onClick={() => setValue("Entries")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded relative left-[50%] -translate-x-[50%] mt-8 text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Setup;
