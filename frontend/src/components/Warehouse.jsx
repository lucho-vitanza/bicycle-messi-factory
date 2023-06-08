import React, { useState } from 'react';
import Web3 from 'web3';
import {ContractWarehouse} from '../abi/ContractWarehouse'


const web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
//web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
    ContractWarehouse,
  '0x5b69d5c4066c55ec87A29A0BeA8F4935E30b0caf'
);

function Warehouse() {

    const getAllCablings = async e => {
        RemixContract.methods
          .getAllCablings()
          .call()
          .then(console.log);
      };

  return (
    <div className='bg-azul-800  bottom-0 left-0 top-0 ps-4 bg-gradient-to-r from-green-100 to-green-200'>
        <button  onClick={getAllCablings}>getAllCablings</button>
    </div>
  )
}

export default Warehouse