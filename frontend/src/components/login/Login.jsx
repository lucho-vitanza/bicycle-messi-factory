import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ContractABI } from '../../abi/ContractABI';
import './index.css'

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/2fc5b79cc7cd444a972f5bf92e54b9e7'));
//web3.eth.defaultAccount = web3.eth.accounts[0];

const contractInstance = new web3.eth.Contract(
  ContractABI,
  "0x48A3C684890629a80e8DF4993506Ffe31675E66F"
);

function Login() {

  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState();
  const [message, setMessage] = useState('');
  useEffect(() => {
    let accLS = localStorage.getItem("account");
    if (accLS) {
      setAccount(accLS);
      setConnected(true)
    } 
  }, []);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        // Aquí puedes acceder a la cuenta del usuario
        const userAccount = accounts[0];
        console.log(userAccount)
        setAccount(userAccount)
        localStorage.setItem("account", userAccount);
        
        setConnected(true)
        // Realiza las acciones necesarias con la cuenta del usuario, como interactuar con el contrato
        // ...
      }).catch(error => {
        // Maneja el error de conexión con Metamask
        console.error('Error al conectar con Metamask:', error);
      });
    } else {
      // Maneja el caso en el que Metamask no esté instalado o disponible
      alert('Metamask no está instalado o disponible');
      console.error('Metamask no está instalado o disponible');
    }
  };

  //function to buy
  const buy = () => {
    alert('Función de compra');
  };

  //function to disconnect from metamask
  const disconnectFromMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        window.ethereum.disconnect();
        console.log('Successfully disconnected from MetaMask');
        setConnected(false);
      } catch (error) {
        window.ethereum?.currentProvider?.disconnect();
        console.log(error);
      }
    }
  };

  const setData = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];

    const gas = await contractInstance.methods.setMessage(message).estimateGas();
    console.log('Costo de gas: ', gas);
    const result = await contractInstance.methods
      .setMessage(message)
      .send({ from: account, gas });
    console.log(result);
  };

  const getDefaultData = async (e) => {
    contractInstance.methods.defaultMessage().call().then(console.log);
  };

  const getData = async (e) => {
    contractInstance.methods.getMessage().call().then(console.log);
  };
  const getContracTByID = async () => {
    const result = await contractInstance.methods.tokens(1).call({ from: account });
    console.log("result" + result)
  };



  return (
    <div >
      <div >
        {connected ? (
          <div>
            <button className='bg-green-500 text-white py-2 px-4 rounded shadow  hover:bg-blue-600 top-30' onClick={disconnectFromMetaMask}> <b>{account.substr(0,5)}...  |  </b> Discconect Metamask</button>
          </div>
        ) : (
          <div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded shadow  hover:bg-blue-600 top-30' onClick={connectToMetaMask}>Connect to MetaMask</button>
            </div>
        )}
      </div>
    </div>
  );
}

export default Login;
