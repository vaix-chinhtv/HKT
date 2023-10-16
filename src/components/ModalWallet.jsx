import { useEffect } from "react";
import { useWallet, useAllWallets } from "useink";
import { routes } from "../routes";
import { hocApiPost } from "../services/api-connect-wallet";

export const ModalWallet = ({ setIsModal, setAccount }) => {
  const { account, connect } = useWallet();
  const wallets = useAllWallets();
  //   const contract = useContract(CONTRACT_ADDRESS, metadata);

  useEffect(() => {
    if (account?.address) {
      const shortAddress = account?.address.slice(0, 6) + "..." + account?.address.slice(-6);
      setAccount(shortAddress);
    }
    if (account?.address) {
      const body = {
        wallet_address: account?.address,
        wallet_name: account?.name,
      };

      const walletRegister = hocApiPost(routes.authentication.walletRegister, body)();
      const walletLogin = hocApiPost(routes.authentication.walletLogin, body)();
    }
  }, [account?.address]);

  const handleConnect = (wallet) => {
    connect(wallet.extensionName);
  };

  if (!account) {
    return (
      <div className="bg-[#00000099] fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-[#512B81] rounded-2xl absolute top-[25%] py-2 px-4">
          <div style={{ padding: "0 6px" }}>
            <h1 className="text-white text-[28px] font-semibold text-center mt-4">Connect Wallet</h1>
            <h2 className="text-white text-[20px] font-medium text-center py-2">
              Please install one of these supported wallets.
            </h2>
            {wallets.map((w) => (
              <div key={w.title} className="rounded-full bg-[#322653] mt-4 py-2 px-4">
                {w.installed ? (
                  <button
                    className="flex items-center bg-transparent outline-none border-none"
                    onClick={() => {
                      connect(w.extensionName);
                    }}
                  >
                    <img className="w-[44px] h-[44px]" src={w.logo.src} alt={w.logo.alt} />
                    <p className="text-white text-[18px] ml-4 mb-0 font-medium">Connnect to {w.title}</p>
                  </button>
                ) : (
                  <a href={w.installUrl} className="flex items-center opacity-50">
                    <img className="w-[44px] h-[44px]" src={w.logo.src} alt={w.logo.alt} />
                    <p className="text-white text-[18px] ml-4">Install {w.title}</p>
                  </a>
                )}
              </div>
            ))}

            <button
              onClick={() => setIsModal(false)}
              className=" rounded-full bg-[#201F37] mt-6 py-2 px-8 relative left-[40%] outline-none border-none text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
};
