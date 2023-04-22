const { ethers } = require("ethers");
const abi = require("../constants/mpabiHH.json");
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const provider = new ethers.providers.JsonRpcProvider();
const marketContract = new ethers.Contract(contractAddress, abi, provider);

async function getListings() {
    const listings = await marketContract.getAllListings();
    console.log(listings);
}

async function getBalance() {
    const listing = await provider.getBalance(contractAddress);
    console.log(listing);
}

async function rentNFT(nftContract, tokenId, expires, userUIN, priceToRent) {
    const overrides = {
      value: priceToRent,
    };
    await contract.rentNFT(nftContract, tokenId, expires, userUIN, overrides);
  }

getListings();