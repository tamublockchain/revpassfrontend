import React, { useEffect, useState } from "react";
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import { ethers } from "ethers";
import abi from "../constants/mpabiHH.json";

export default function Rent() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const { address } = useAccount({});
  const ownUIN = 2;
  const tokenID = 1;
  const value = 1;

  const {
    config,
  } = usePrepareContractWrite({
    address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    abi: abi,
    functionName: "rentNFT",
    args: ['0x5FbDB2315678afecb367f032d93F642f64180aa3', tokenID, ownUIN],
    from: address,
    overrides: {
      value: 1,
      gasLimit: 500000,
    },
  });

  const { write } = useContractWrite(config);
  

  return (
    <div>
      <button onClick={() => write?.()}>
        Rent NFT
      </button>
    </div>
  );
}