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
      <header className="px-8 py-2 mx-auto max-w-screen-2xl border-2 border-[#0802A3] mt-10 rounded-[48px] bg-[#27005D] bg-opacity-60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div>
              <a href="/" className="flex items-center">
                <img src={LogoQuest} className="mr-3 h-8 sm:h-[72px]" alt="Flowbite Logo" />
              </a>
            </div>
            <div className="text-[24px] font-semibold text-white">Home</div>
            <Button className="rounded-full bg-[#B575AB] text-white text-[18px] font-semibold px-8 py-6 flex items-center border-none outline-none !hover:text-white">
              Campaign
            </Button>
          </div>
          <div className="flex items-start gap-10">
            <Button
              onClick={() => navigate("/quest/create")}
              className="rounded-full bg-[#B575AB] text-white text-[18px] font-semibold px-8 py-6 flex items-center border-none outline-none hover:bg-none"
            >
              <FaPlus className="mr-2" /> Create Campaign
            </Button>
            <Button
              onClick={() => buttonAlert()}
              text
              className="rounded-full bg-[#B575AB] text-white text-[18px] font-semibold px-8 py-6 flex items-center border-none outline-none !hover:"
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
