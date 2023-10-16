import { Input } from "antd";
import React, { useState } from "react";
import { DatePicker } from "antd";

function Setup({ setValue, setValueSetup }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDate = (date, dateString) => {
    setStartDate(dateString);
  };

  const handleEndDate = (date, dateString) => {
    setEndDate(dateString);
  };

  const handleNext = () => {
    setValue("Quest");
    setValueSetup({
      title,
      description,
      start_date: startDate,
      end_date: endDate,
    });
  };

  return (
    <div className="px-2 md:px-0">
      <div className="mt-5 w-full border-[1px] border-[#279EFF] py-2 px-4 md:py-6 md:px-8 rounded-lg">
        <div className="mb-4 md:mb-6">
          <label htmlFor="default-input" className="heading">
            Title
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="!leading-9 md:leading-[50px] placeholder:text-[18px] text-[18px]"
          />
        </div>

        <div>
          <label htmlFor="message" className="heading">
            Description
          </label>
          <Input.TextArea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 mt-3 md:mt-5 w-full">
          <div className="w-full">
            <label className="block heading">Start Date</label>
            <DatePicker onChange={handleStartDate} size="large" className="w-full p-3" />
          </div>
          <div className="w-full">
            <label className="block heading">End Date</label>
            <DatePicker onChange={handleEndDate} size="large" className="w-full p-3 text-white" />
          </div>
        </div>
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium md:font-bold py-2 px-4 md:py-3 md:px-8 rounded relative left-[50%] -translate-x-[50%] mt-4 md:mt-8 text-[16px] md:text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Setup;
