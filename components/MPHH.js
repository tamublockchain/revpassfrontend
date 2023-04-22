const { ethers } = require("ethers");
const abi = require("../constants/mpabiHH.json");
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const marketContract = new ethers.Contract(contractAddress, abi, signer);

export async function rentNFT(nftContract, tokenId, expires, userUIN, priceToRent) {
    const overrides = {
      value: priceToRent,
    };
    await marketContract.rentNFT(nftContract, tokenId, userUIN);
}
