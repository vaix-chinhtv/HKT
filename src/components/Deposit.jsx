function DepositPayout({ amount, setValue }) {
  const handleClick = () => {
    setValue("Leaderboard");
  };

  return (
    <div>
      <p className="text-[20px] text-white py-4 px-4 rounded-lg border-[1px]  border-[#279EFF]">
        You have to deposit {amount} to the smartcontact
      </p>

      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded relative left-[50%] -translate-x-[50%] mt-8 text-[20px]"
      >
        Deposit
      </button>
    </div>
  );
}

export default DepositPayout;
