import { Input, Select } from "antd";
import "antd/dist/antd";
import React from "react";
import { NetWorks, Tokens } from "./ActionWeb3/TemplateWeb3";
function Reward({ setValue }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-10">
        <div className="w-full">
          <label className="heading">Reward Type</label>
          <Select
            className="w-full !h-[60px] !text-[130px] placeholder:text[20px]"
            size="large"
            defaultValue="Token"
            onChange={handleChange}
            options={[
              { value: "Token", label: "Token" },
              { value: "NFT", label: "NFT" },
            ]}
          />
        </div>
        <div className="w-full">
          <label className="heading">Network</label>
          <Select
            className="w-full !h-[60px] !text-[130px] placeholder:text[20px]"
            size="large"
            defaultValue="Phala"
            onChange={handleChange}
          >
            {NetWorks.map((item) => (
              <Select.Option key={item.network} value={item.network} label={item.network}>
                <div className="text-[18px] flex items-center">
                  <img className="w-[40px] h-[40px] rounded-full mr-2" src={item.icon} alt="icon" />
                  <p>{item.network}</p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <label className="heading">Token</label>
          <Select
            className="w-full !h-[60px] !text-[130px] placeholder:text[20px]"
            size="large"
            defaultValue="PHA"
            onChange={handleChange}
          >
            {Tokens.map((item) => (
              <Select.Option key={item.token} value={item.network} label={item.network}>
                <div className="text-[18px] flex items-center">
                  <img className="w-[40px] h-[40px] rounded-full mr-2" src={item.icon} alt="icon" />
                  <p>{item.token}</p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-5">
        <label className="heading">Total Reward</label>
        <Input placeholder="Number" className="!leading-[50px] placeholder:text-[18px] text-[18px]" />
      </div>

      <div className="mt-5">
        <label className="heading">Number Of Winner</label>
        <Input type="number" placeholder="Number" className="!leading-[50px] placeholder:text-[18px] text-[18px]" />
      </div>

      <div className="mt-5">
        <label className="heading">Amount per winner</label>
        <Input type="number" placeholder="Number" className="!leading-[50px] placeholder:text-[18px] text-[18px]" />
      </div>
      <button
        onClick={() => setValue("Deposit")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded relative left-[50%] -translate-x-[50%] mt-8 text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Reward;
