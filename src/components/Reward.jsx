import { Input, Select } from "antd";
import "antd/dist/antd";
import { NetWorks, Tokens } from "./ActionWeb3/TemplateWeb3";
import { useState } from "react";
function Reward({ setValue, setValueReward }) {
  const [rewardType, setRewardType] = useState("Token");
  const [network, setNetwork] = useState("Phala");
  const [categoryToken, setCategoryToken] = useState("PHA");
  const [totalReward, setTotalReward] = useState("");
  const [numberWinner, setNumberWinner] = useState("");
  const [amountPerWinner, setAmountPerWinner] = useState("");

  const handleNext = () => {
    setValueReward({
      rewardType,
      network,
      categoryToken,
      totalReward,
      numberWinner,
      amountPerWinner,
    });
    setValue("Deposit");
  };

  return (
    <div className="px-2 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
        <div className="w-full">
          <label className="heading">Network</label>
          <Select className="w-full h-[40px] md:!h-[54px]" size="large" defaultValue="Phala" onChange={setNetwork}>
            {NetWorks.map((item) => (
              <Select.Option key={item.network} value={item.network} label={item.network}>
                <div className="text-[14px] md:text-[18px] flex items-center">
                  <img
                    className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] rounded-full mr-2"
                    src={item.icon}
                    alt="icon"
                  />
                  <p>{item.network}</p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="w-full">
          <label className="heading">Reward Type</label>
          <Select
            className="w-full h-[40px] md:!h-[54px]"
            size="middle"
            defaultValue="Token"
            onChange={setCategoryToken}
            options={[
              { value: "Token", label: "Token" },
              { value: "NFT", label: "NFT" },
            ]}
          />
        </div>

        <div className="w-full">
          <label className="heading">Category Token</label>
          <Select className="w-full h-[40px] md:!h-[54px]" size="large" defaultValue="PHA" onChange={setCategoryToken}>
            {Tokens.map((item) => (
              <Select.Option key={item.token} value={item.network} label={item.network}>
                <div className="text-[14px] md:text-[18px] flex items-center">
                  <img
                    className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-full mr-2"
                    src={item.icon}
                    alt="icon"
                  />
                  <p>{item.token}</p>
                </div>
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-2 md:mt-5">
        <label className="heading">Total Reward</label>
        <Input
          onChange={(e) => setTotalReward(e.target.value)}
          placeholder="Number"
          className="!leading-9 md:!leading-[50px] placeholder:text-[18px] text-[18px]"
        />
      </div>

      <div className="mt-5">
        <label className="heading">Number Of Winner</label>
        <Input
          onChange={(e) => setNumberWinner(e.target.value)}
          type="number"
          placeholder="Number"
          className="!leading-9 md:!leading-[50px] placeholder:text-[18px] text-[18px]"
        />
      </div>

      <div className="mt-5">
        <label className="heading">Amount per winner</label>
        <Input
          onChange={(e) => setAmountPerWinner(e.target.value)}
          type="number"
          placeholder="Number"
          className="!leading-9 md:!leading-[50px] placeholder:text-[18px] text-[18px]"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium md:font-bold py-1 px-3 md:py-3 md:px-8 rounded relative left-[50%] -translate-x-[50%] mt-8 text-[16px] md:text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Reward;
