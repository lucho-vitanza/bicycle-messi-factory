import React, { useState } from 'react';
import Web3 from 'web3';
import {ContractWarehouse} from "../abi/ContractWarehouse"


const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
    ContractWarehouse,
  "0x5b69d5c4066c55ec87A29A0BeA8F4935E30b0caf"
);

function Warehouse() {

    const getAllCablings = async e => {
        RemixContract.methods
          .getAllCablings()
          .call()
          .then(console.log);
      };

  return (
    <div>
        <button onClick={getAllCablings}>getAllCablings</button>
    </div>
  )
}

export default Warehouse