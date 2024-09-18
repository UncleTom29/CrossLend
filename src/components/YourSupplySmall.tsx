// import { todp } from "@utils/todp";
import { useState } from "react";
import Skeleton from "./Skeleton";
import SupplyRow from "./SupplyRow";
import useDefi from "../hooks/useDefi";
import { inCurrencyFormat } from "../utils/helper";
import { DetailedSuppliedToken } from "../types";
import ModalWithdraw from "./ModalWithdraw";
import ModalSupply from "./ModalSupply";
import SupplyItem from "./SupplyItem";

interface IYourSupply {
  tokens: DetailedSuppliedToken[];
}

export default function YourSupplySmall({ tokens }: IYourSupply) {
  const [selectedTokenToSupply, setSelectedTokenToSupply] = useState(null);
  const [selectedTokenToWithdraw, setSelectedTokenToWithdraw] =
    useState<DetailedSuppliedToken | null>();
  const { userTotalCollateralInUsd } = useDefi();

  const handleCloseModal = () => {
    setSelectedTokenToWithdraw(null);
    setSelectedTokenToSupply(null);
  };

  return (
    <div className="text-white">
      <div className="relative flex flex-col min-w-0 break-words bg-gray-800 border border-slate-700 w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-2 py-3 border border-t-0 border-r-0 border-l-0 border-slate-700">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-1 max-w-full">
              <h3 className="font-bold sm:text-lg">Your Supplies</h3>
              {Number(userTotalCollateralInUsd) != 0 && (
                <div className="mt-4 flex space-x-2">
                  <div className="text-[12px] border border-slate-600 font-normal px-2">
                    <p className="text-gray-400">
                      Balance {"  "}
                      <span className="font-normal text-gray-300">
                        $
                        {inCurrencyFormat(
                          Number(userTotalCollateralInUsd) / 10 ** 18
                        )}
                      </span>
                    </p>
                  </div>
                  <div className="text-[12px] border  border-slate-600 font-normal px-2">
                    <p className="text-gray-400">
                      Collateral {"  "}
                      <span className="font-normal text-gray-300">
                        $
                        {inCurrencyFormat(
                          Number(userTotalCollateralInUsd) / 10 ** 18
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
          </div>
        </div>
        <div className="block w-full divide-solid divide-slate-600 divide-y overflow-x-auto space-y-3">
          {tokens?.length == 0 || (
            <div className="w-full flex flex-col items-center justify-center p-2 space-y-2 text-sm">
              No Supplies yet
            </div>
          )}

          {tokens?.map((token: any) => {
            return (
              <SupplyItem
                key={token.tokenAddress}
                token={token}
                Withdraw={() => {
                  return (
                    <button
                      onClick={() => setSelectedTokenToWithdraw(token)}
                      className="w-full bg-gray-300 text-gray-700 text-base p-2 rounded-md hover:bg-gray-400"
                    >
                      Withdraw
                    </button>
                  );
                }}
                Supply={() => {
                  return (
                    <button
                      onClick={() => setSelectedTokenToSupply(token)}
                      className="w-full ml-2 border border-gray-400 bg-slate-800 text-base font-medium p-2 px-4 rounded-md hover:bg-gray-500"
                    >
                      Supply
                    </button>
                  );
                }}
              />
            );
          })}
     
          <div className="justify-center items-center text-center sm:block sm:p-0 mt-2">
            {selectedTokenToWithdraw && (
              <ModalWithdraw
                token={selectedTokenToWithdraw}
                closeModal={handleCloseModal}
              />
            )}

            {selectedTokenToSupply && (
              <ModalSupply
                token={selectedTokenToSupply}
                closeModal={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
