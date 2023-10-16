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

function Quest({ setValue, setValueQuest }) {
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

  const [follow, setFollow] = useState("");
  const [retweet, setRetweet] = useState("");
  const [like, setLike] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [tokenHolder, setTokenHolder] = useState({
    network: "Phala",
    categoryToken: "PHA",
    minimumAmount: "",
  });

  const [transactionActivity, setTransactionActivity] = useState({
    network: "Phala",
    categoryToken: "PHA",
    minimumAmount: "",
  });
  const handleNext = () => {
    setValueQuest({
      twitterFollow: follow,
      twitterRetweet: retweet,
      twitterLike: like,
      twitterHashtag: hashtag,
      tokenHolder: tokenHolder,
      transactionActivity: transactionActivity,
    });
    setValue("Reward");
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 mb-8 px-2 md:px-0">
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
      <div className="px-2 md:px-0">
        {activeTwitter.Follow ? <Follow setFollow={setFollow} /> : ""}
        {activeTwitter.Retweet ? <Retweet setRetweet={setRetweet} /> : ""}
        {activeTwitter.Like ? <Like setLike={setLike} /> : ""}
        {activeTwitter.Hashtag ? <HashTag setHashtag={setHashtag} /> : ""}
        {activeTemplate.TokenHolder ? (
          <TemplateWeb3 setTokenHolder={setTokenHolder} title="TokenHolder" label="Minimum amount of tokens held" />
        ) : (
          ""
        )}
        {activeTemplate.Transaction ? (
          <TemplateWeb3
            setTransactionActivity={setTransactionActivity}
            title="TransactionActivity"
            label="Minimum number of transactions"
          />
        ) : (
          ""
        )}
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-3 md:px-8 rounded relative left-[50%] -translate-x-[50%] mt-2 mb-4 text-[16px] md:text-[20px]"
      >
        Next
      </button>
    </div>
  );
}

export default Quest;
