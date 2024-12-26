const ethers = require("ethers");
const abi = require("./abi");
const { Wallet } = require("ethers");
require("dotenv").config();

async function writeContract() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-sepolia-rpc.publicnode.com"
  );
  const contractAddress = "0xbB9B132595234BBf32d6652564a7F42344D0a7bF";
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new Wallet(privateKey, provider);
  const contractInstance = new ethers.Contract(contractAddress, abi, wallet);
  await contractInstance.store(100);
  console.log("Transaction Successful ");
}
writeContract();
