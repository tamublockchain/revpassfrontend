const { ethers } = require("ethers");
const abi = require("../constants/rpabiHH.json");
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const revpassContract = new ethers.Contract(contractAddress, abi, signer);

async function getSupply() {
    const supply = await revpassContract.maxSupply();
    console.log(supply);
}

async function getId() {
    const id = await revpassContract.getOwnerUIN(1);
    let convertId = ethers.BigNumber.from(id);

    console.log(convertId.toString());
}

async function approve() {
    const marketContract = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const tx = await revpassContract.approve(marketContract, 1);
    const receipt = await tx.wait();
    console.log(receipt);
}

getId();