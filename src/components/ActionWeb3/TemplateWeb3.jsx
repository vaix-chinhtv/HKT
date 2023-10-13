import React from "react";
import { Input, Select } from "antd";
import { Aleph, Phala } from "../../asset/img";

export const NetWorks = [
  {
    icon: Aleph,
    network: "Aleph Zero",
  },
  {
    icon: Phala,
    network: "Phala",
  },
];

export const Tokens = [
  {
    icon: Aleph,
    token: "AZERO",
  },
  {
    icon: Phala,
    token: "PHA",
  },
];

function TemplateWeb3({ title, label }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="border-2 rounded-lg py-4 px-6 mb-4">
      <h1 className="text-[24px] font-semibold text-white">{title}</h1>
      <div className="flex items-start justify-between gap-10">
        <div className="flex flex-col w-full">
          <label className="heading">NetWork</label>
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
        <div className="flex flex-col  w-full">
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
        <div className="w-full">
          <label className="heading">{label}</label>
          <Input type="number" placeholder="100" />
        </div>
      </div>
    </div>
  );
}

export default TemplateWeb3;
