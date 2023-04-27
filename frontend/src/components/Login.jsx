import React, { useState } from 'react';
import Web3 from 'web3';
import { ContractABI } from '../abi/ContractABI';


const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ContractABI,
  "0x9Ab60476c94a0E2f98A6E741b9E726AEBd6B4c5f"
);

function  Login() {
 
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  
  const connectToMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });        
        const accounts = await web3.eth.getAccounts();
        console.log('Successfully connected to MetaMask!', accounts);        
        setConnected(true);
      
      } catch (error) {
        console.log(error);
        console.log('User denied account access');
      }
    } else {
      console.log('MetaMask is not installed');
    }
  };

  //function to buy
  const buy = ()=>{
    alert("Función de compra")
  }

      //function to disconnect from metamask
    const disconnectFromMetaMask = async()=>{
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.disconnect();
          console.log('Successfully disconnected from MetaMask');
          setConnected(false);          
        } catch (error) {
          console.log(error);
     
        }
      }
    };

    const setData = async e => {
      e.preventDefault();
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
  
      const gas = await RemixContract.methods.setMessage(message).estimateGas();
      console.log("Costo de gas: ",gas)
      const result = await RemixContract.methods
        .setMessage(message)
        .send({ from: account, gas });
      console.log(result);
    };
  
    const getDefaultData = async e => {
      RemixContract.methods
        .defaultMessage()
        .call()
        .then(console.log);
    };
  
    const getData = async e => {
      RemixContract.methods
        .getMessage()
        .call()
        .then(console.log);
    };

  return (
    <div>
       <div>
      {connected ? (
        <div>
        <p>Connected to MetaMask</p>
        <button onClick={buy}>Buy</button>
        <button onClick={disconnectFromMetaMask}>Logout MetaMask</button>
        </div>
      ) : (
        <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      )}
    </div>

    <div>
    <header className="App-header">
        <form onSubmit={setData}>
          <label>
            Set Message:
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Message" />
        </form>
        <br />
        <button onClick={getData} type="button">
          Get Message
        </button>
        <button onClick={getDefaultData} type="button">
          Get Default Message
        </button>
      </header>
    </div>
    </div>
   
  );
  }

    


export default Login;
