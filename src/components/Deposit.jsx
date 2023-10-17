import metadata from "../utils/contract.json";
import { useTx, useContract } from "useink";

function DepositPayout({ amount, setValue }) {
  const CONTRACT_ADDRESS_ALPHE = import.meta.env.VITE_CONTRACT_ADDRESS_ALEPH;
  const alpheContract = useContract(CONTRACT_ADDRESS_ALPHE, metadata, "aleph-testnet");
  const alpheDeposit = useTx(alpheContract, "deposit");
  const handleDeposit = async () => {
    const res = alpheDeposit.signAndSend([], { value: amount });
  };
  return (
    <div className="px-2 md:px-0">
      <p className="text-[16px] md:text-[20px] text-white py-4 px-4 rounded-lg borderBlue">
        You have to deposit {amount} to the smartcontact
      </p>

      <button
        onClick={handleDeposit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium md:font-bold py-1 px-3 md:py-3 md:px-8 rounded relative left-[50%] -translate-x-[50%] mt-8 text-[16px] md:text-[20px]"
      >
        Deposit
      </button>
    </div>
  );
}

export default DepositPayout;
