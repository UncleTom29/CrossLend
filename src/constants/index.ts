import diamondAbi from "./diamondAbi.json";
import erc20Abi from "./erc20Abi.json";
import getterAbi from "./getterAbi.json";
import erc20PermitAbi from "./erc20PermitAbi.json";

export const DEPLOYER = "0x51a3faa325787dDD9a5EB1Dc996471A4051Ac51D";

const diamondAddress = "0x18B7fa65fC28a3Be154120702f45B6f8D712Cf8c";
const larAddress = "0xA893930f4a47ea709525924C445f83444a852e9b";
const getterAddress = "0xFA80Da1CABb54aF57F36F7AFde1aD5D7dF8E1091";



export const xft = "0xdb5c548684221ce2f55f16456ec5cf43a028d8e9"; // 18
export const xusd = "0xc692e6ede21ec911d9e35c6a52bdd31b2d4b4425"; // 18
export const usdt = "0x83e9a41c38d71f7a06632de275877fca48827870"; // 18
export const wxfi = "0x28cc5edd54b1e4565317c3e0cfab551926a4cd2a"; // 18
export const eMPX = "0x54764b050f1129b22e365744fe3f440bc3aad292"; // 

export const addressToImage: { [key: string]: string } = {
};


// set the Permit type parameters
export const types = {
  Permit: [
    {
      name: "owner",
      type: "address",
    },
    {
      name: "spender",
      type: "address",
    },
    {
      name: "value",
      type: "uint256",
    },
    {
      name: "nonce",
      type: "uint256",
    },
    {
      name: "deadline",
      type: "uint256",
    },
  ],
};

export {
  diamondAddress,
  larAddress,
  getterAddress,
  diamondAbi,
  erc20Abi,
  getterAbi,
  erc20PermitAbi,
};

export const supportedChainId = 4157;

// const types = {
//   Person: [
//     { name: "name", type: "string" },
//     { name: "wallet", type: "address" },
//   ],
//   Mail: [
//     { name: "from", type: "Person" },
//     { name: "to", type: "Person" },
//     { name: "contents", type: "string" },
//   ],
// } as const;

// const types2 = {
//   Mail: [
//     { name: "owner", type: "string" },
//     { name: "spender", type: "string" },
//     { name: "value", type: "string" },
//     { name: "nonce", type: "string" },
//     {name: "deadline", type: "number"}
//   ]
// }





// const message = {
//   from: {
//     name: "Cow",
//     wallet: "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
//   },
//   to: {
//     name: "Bob",
//     wallet: "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
//   },
//   contents: "Hello, Bob!",
// } as const;

// // const message2 = {
// //   owner: signerAddress,
// //   spender: diamondAddress,
// //   value: ethers.parseUnits("5", 18), // Amount to approve
// //   nonce: nonce.toHexString(),
// //   deadline,
// // };
