import React from "react";
import { Button } from "antd";

const Map = {
  "Token Holder": "TokenHolder",
  "Transaction Activity": "Transaction",
};

function ButtonNetwork({ children, setActiveTemplate }) {
  const handleClick = () => {
    setActiveTemplate((prev) => {
      return {
        ...prev,
        [Map[children]]: true,
      };
    });
  };
  return (
    <Button
      onClick={() => handleClick()}
      className="bg-[#FD8D14] p-6 flex items-center  text-[18px] text-white font-semibold hover:bg-transparent"
    >
      {children}
    </Button>
  );
}

export default ButtonNetwork;
