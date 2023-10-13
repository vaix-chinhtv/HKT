import ButtonTwitter from "./ButtonTwitter";
import { useState } from "react";
import Follow from "./Twitter/Follow";
import Retweet from "./Twitter/Retweet";
import Like from "./Twitter/Like";
import HashTag from "./Twitter/HashTag";
import TemplateWeb3 from "./ActionWeb3/TemplateWeb3";
import ButtonNetwork from "./ButtonNetwork";

const ActiosTwitter = ["Follow", "Retweet", "Like", "Hashtag"];
const ActionWeb3 = ["Token Holder", "Transaction Activity"];

function Entries({ setValue }) {
  const [activeTwitter, setActionTwitter] = useState({
    Follow: false,
    Retweet: false,
    Like: false,
    Hashtag: false,
  });

  const [activeTemplate, setActiveTemplate] = useState({
    TokenHolder: false,
    Transaction: false,
  });

  console.log({ activeTemplate });

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {ActiosTwitter.map((item, index) => {
          return (
            <ButtonTwitter key={index} setActionTwitter={setActionTwitter}>
              {item}
            </ButtonTwitter>
          );
        })}
        {ActionWeb3.map((item, index) => {
          return (
            <ButtonNetwork key={index} setActiveTemplate={setActiveTemplate}>
              {item}
            </ButtonNetwork>
          );
        })}
      </div>
      {activeTwitter.Follow ? <Follow /> : ""}
      {activeTwitter.Retweet ? <Retweet /> : ""}
      {activeTwitter.Like ? <Like /> : ""}
      {activeTwitter.Hashtag ? <HashTag /> : ""}
      {activeTemplate.TokenHolder ? <TemplateWeb3 title="Token Holder" label="Minimum amount of tokens held" /> : ""}
      {activeTemplate.Transaction ? (
        <TemplateWeb3 title="Transaction Activity" label="Minimum number of transactions" />
      ) : (
        ""
      )}
      <button
        onClick={() => setValue("Reward")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded relative left-[50%] -translate-x-[50%] mt-2 mb-4 text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Entries;
