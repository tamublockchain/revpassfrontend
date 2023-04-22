import React, { useEffect, useState } from "react";
import { useAccount, usePrepareContractWrite, useContractWrite, } from "wagmi"
import { ethers } from "ethers";
import abi from "../constants/rpabiHH.json";

export default function Mint() {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const { address } = useAccount({});
    const ownUIN = 1;

    const {
        config
      } = usePrepareContractWrite({
        address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        abi: abi,
        functionName: "mint",
        args: [address, ownUIN]
      });
  
    const { write } = useContractWrite(config);


    return (
        <div>  
            <button onClick={() => write?.()}>Mint</button>
        </div>
    )

}
