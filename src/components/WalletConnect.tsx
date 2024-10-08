import { useState } from "react";

import { useAccount, useDisconnect } from "wagmi";
import { getAccount, getNetwork, switchNetwork } from "@wagmi/core";
import { useWeb3Modal } from "@web3modal/react";
import { supportedChainId } from "../constants";
import useWallet from "../hooks/useWallet";
import { displayToast } from "./Toast";
import { ConnectButton } from "@rainbow-me/rainbowkit";




export default function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="w-[140px] flex-nowrap mr-5 px-3 py-1 bg-red-800 hover:bg-red-700  rounded-md hover:bg-amber-800 hover:text-white"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported || chain.id != supportedChainId) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="w-[170px] mr-5 px-3 py-1 bg-red-800 hover:bg-red-700  rounded-md hover:bg-amber-800 hover:text-white"
                  >
                    Switch To CrossFi
                  </button>
                );
              }
              return (
                <div
                  style={{ display: "flex", gap: 5 }}
                  className="w-[135px] mr-5 px-3 py-1 bg-red-800 hover:bg-red-700  rounded-md hover:bg-amber-800 hover:text-white "
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {/* {chain.name} */}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {/* <span  className='text-xs'> 
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                              </span> */}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}



// export default function WalletConnect() {
//   const { open } = useWeb3Modal();
//   const { isConnected, status } = useAccount();
//   const { disconnect } = useDisconnect();
//   const [loading, setLoading] = useState(false);
//   const label = isConnected ? "Disconnect" : "Connect Wallet";
//   const { chainId } = useWallet();

//   // console.log('Is it connected: ', isConnected);

//   //   const { account?.address, chainId, switchToAppNetwork, loadBalance } = useWeb3();
//   const account = getAccount();
//   const { chain, chains } = getNetwork();

//   console.log("Chain: ",chain)


//   async function onOpen() {
//     setLoading(true);
//     await open();
//     setLoading(false);
//   }

//   function onClick() {
//     if (isConnected) {
//       disconnect();
//     } else {
//       onOpen();
//     }
//   }

//   return (
//     <>
//       <div>{status == "connected"}</div>
//       {status == "connected" && account.address ? (
//         chainId == 80001 ? (
//           <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
//             {isConnected ? (
//               <div className="mr-5 px-3 bg-red-800 hover:bg-red-700  rounded-md hover:bg-amber-800 hover:text-white ">
//                 <div
//                   className="flex cursor-pointer items-center gap-3 rounded-md py-1.5 px-2 text-[12px] sm:text-sm font-medium text-white transition"
//                   onClick={() => {
//                     disconnect();
//                   }}
//                 >
//                   <span className="grow uppercase">
//                     {account?.address.slice(0, 6)}
//                     {"...."}
//                     {account?.address.slice(account?.address.length - 4)}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <button
//                   onClick={onClick}
//                   disabled={loading}
//                   className="rounded-md border text-amber-100  p-1 px-2 hover:text-amber-800"
//                 >
//                   {loading ? "Loading..." : label}
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div>
//             <button
//               className="rounded-full bg-red-800 hover:bg-red-700 text-white w-40 p-2 mr-3"
//               onClick={async () => {
//                 try {
//                   await switchNetwork({
//                     chainId: supportedChainId,
//                   });
//                 } catch (error) {
//                   displayToast(
//                     "failure",
//                     "Error encountered. If the error persists, you can try connecting to Mumbai manually."
//                   );
//                 }
//               }}
//             >
//               Switch to Mumbai
//             </button>
//           </div>
//         )
//       ) : (
//         <div>
//           <ConnectButton />
//         </div>
//       )}
//     </>
//   );
// }
