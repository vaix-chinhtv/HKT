import { LogoQuest } from "../asset/img";
import { Button } from "antd";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ModalWallet } from "./ModalWallet";

function Header() {
  const [isModal, setIsModal] = useState(false);
  const [account, setAccount] = useState();
  const buttonAlert = () => {
    setIsModal(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <header className="px-2 md:px-8 py-1 md:py-2 mx-auto max-w-screen-2xl border-2 border-[#0802A3] mt-2 md:mt-10 rounded-[48px] bg-[#27005D] bg-opacity-60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-10">
            <div>
              <a href="/" className="flex items-center">
                <img src={LogoQuest} className="mr-3 w-[36px] h-[36px] md:h-[56px] md:w-[56px]" alt="Flowbite Logo" />
              </a>
            </div>
            <div className="hidden md:flex text-[24px] font-semibold text-white">Home</div>
            <Button className="hidden md:flex rounded-full bg-[#B575AB] text-white text-[18px] font-semibold px-8 py-6 items-center border-none outline-none !hover:text-white">
              Campaign
            </Button>
          </div>
          <div className="flex items-start gap-2 md:gap-10">
            <Button
              onClick={() => navigate("/quest/create")}
              className="rounded-full bg-[#279EFF] text-white text-[12px] px-4 md:text-[18px] font-semibold md:px-8 md:py-6 flex items-center border-none outline-none hover:bg-none"
            >
              <FaPlus className="mr-2" /> Create Campaign
            </Button>
            <Button
              onClick={() => buttonAlert()}
              className="rounded-full bg-[#B575AB] text-white text-[12px] md:text-[18px] font-semibold px-4 py-2 md:px-8 md:py-6 flex items-center border-none outline-none !hover:"
            >
              {account ? account : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </header>
      {isModal && <ModalWallet setIsModal={setIsModal} setAccount={setAccount} />}
    </>
  );
}

export default Header;
