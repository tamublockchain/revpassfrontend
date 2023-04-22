import React, { useEffect, useState } from "react";
import { useAccount, usePrepareContractWrite, useContractWrite, } from "wagmi"
import { ethers } from "ethers";
import abi from "../constants/mpabiHH.json";
import nftAbi from "../constants/rpabiHH.json";
import { approve } from "./RPHH";


export default function List() {
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const { address } = useAccount({});
    const ownUIN = 1;
    const tokenID = 1;
    const price = 1;
    const begTime = 1682185400;
    const endTime = 1682186360;

    const {
        config
    } = usePrepareContractWrite({
        address: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
        abi: abi,
        functionName: "listNFT",
        args: ["0x5FbDB2315678afecb367f032d93F642f64180aa3", tokenID, price, begTime, endTime]
    });

    const { write } = useContractWrite(config);


    function ListIt() {
        write?.();
    }

    return (
        <div className="flex">
            <div className="bg-white px-5 py-3 border rounded-xl hover:bg-blue-600 border-black pr-4 mr-[50%]">
            <button onClick={() => approve?.()}>Approve</button>
            </div>
            <div className='bg-white px-5 py-3 border rounded-xl hover:bg-blue-600 border-black'>
            <button onClick={ListIt}>List</button>
            </div>
        </div>
    );
}