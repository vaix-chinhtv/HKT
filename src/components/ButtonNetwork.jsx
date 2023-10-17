import { Button } from "antd";

const Map = {
  "Token Holder": "TokenHolder",
  "Transaction Activity": "TransactionActivity",
};

function ButtonNetwork({ children, setActiveTemplate, countRef }) {
  const handleClick = () => {
    const scrollHeight = 500 * countRef.current;
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
    setActiveTemplate((prev) => {
      return {
        ...prev,
        [Map[children]]: true,
      };
    });
    countRef.current = 2;
  };
  return (
    <Button
      onClick={() => handleClick()}
      className="bg-[#FD8D14] p-2 md:p-6 flex items-center text-[14px] md:text-[18px] text-white font-semibold hover:bg-transparent"
    >
      {children}
    </Button>
  );
}

export default ButtonNetwork;
