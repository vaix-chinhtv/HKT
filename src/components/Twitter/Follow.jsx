import { Input } from "antd";

function Follow({ setFollow }) {
  return (
    <div className="border-[1px] md:border-2 rounded-lg p-2 md:py-4 md:px-6 mb-4">
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
    </div>
  );
}

export default Follow;
