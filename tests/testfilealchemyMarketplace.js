const { ethers } = require("ethers");
const { Alchemy, Contract, Network } = require("alchemy-sdk");
const abi = require("../constants/mpabiGT.json");
const contractAddresses = "0x2c885b8C45D7412e738e501F9F58348ebf59d5F9";
const settings = {
    apiKey: "WQL2jKVDMOdHOEjHTzaD1qTTapXNVPX3", // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
const alchemy = new Alchemy(settings);


async function runAlchemy() {
    const ethersProvider = await alchemy.config.getProvider();
    return ethersProvider;
}

async function instantiateContract() {
    const provider = await runAlchemy();
    const lotteryContract = new ethers.Contract(contractAddresses, abi, provider);
    return lotteryContract;
}

async function getLotteryInfo() {
    const lotteryContract = await instantiateContract();
    const lotteryInfo = await lotteryContract.getAllListings();
    console.log(lotteryInfo);
}

getLotteryInfo();
