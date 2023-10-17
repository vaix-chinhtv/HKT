import { Input } from "antd";
import { FaWindowClose } from "react-icons/fa";

function Follow({ setFollow, setActionTwitter }) {
  return (
    <div className="borderBlue rounded-lg p-2 md:py-4 md:px-6 mb-4 relative">
      <h1 className="text-[16px] md:text-[24px] font-semibold text-white">Twitter Follow</h1>

      <div className="mt-4">
        <label className="heading" htmlFor="follow">
          User Name
        </label>
        <Input
          onChange={(e) => setFollow("https://twitter.com/" + e.target.value)}
          id="follow"
          addonBefore="https://twitter.com/"
        />
      </div>
      <div
        onClick={() => setActionTwitter((prev) => ({ ...prev, Follow: !prev.Follow }))}
        className="absolute top-4 right-4 z-10"
      >
        <FaWindowClose className="w-[40px] h-[40px] text-white cursor-pointer hover:text-yellow-300 active:opacity-40" />
      </div>
    </div>
  );
}

export default Follow;
