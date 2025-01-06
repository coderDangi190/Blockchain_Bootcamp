import {useContext} from "react";
import { Web3Context } from "./context/web3Context";
const Demo=()=>{
    const{contractInstance,selectedAccount,chainId} = useContext(Web3Context);
    console.log(contractInstance,selectedAccount,chainId);
    return(
        <>
            <h1> Connect Your Wallet!! </h1>
        </>
    )
}

export default Demo