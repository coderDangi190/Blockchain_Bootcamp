const ethers = require("ethers");
const abi = require("./abi");

async function ReadContract() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-sepolia-rpc.publicnode.com"
  );
  const contractAddress = "0xbB9B132595234BBf32d6652564a7F42344D0a7bF";
  const contractInstance = new ethers.Contract(contractAddress, abi, provider);
  const value = await contractInstance.retrieve();

  const nonce = await provider.getTransactionCount(
    "0xbB9B132595234BBf32d6652564a7F42344D0a7bF"
  );
  console.log(value);
  console.log(nonce);
}
ReadContract();
