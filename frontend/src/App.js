import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
import BiciCard from './components/BiciCard';


function  App() {   
  
  return (
    <div>
    <Login/>
    <BiciCard texto="Bicicleta 1"/>
    </div>
   
  );
  }

    


export default App;


// import React, { useState } from "react";
// import Web3 from "web3";
// import { ContractABI } from "./abi/ContractABI";

// import "./App.css";

// const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// web3.eth.defaultAccount = web3.eth.accounts[0];

// const RemixContract = new web3.eth.Contract(
//   ContractABI,
//   "0x9Ab60476c94a0E2f98A6E741b9E726AEBd6B4c5f"
// );

// function App() {
//   const [message, setMessage] = useState("");

//   const setData = async e => {
//     e.preventDefault();
//     const accounts = await window.ethereum.enable();
//     const account = accounts[0];

//     const gas = await RemixContract.methods.setMessage(message).estimateGas();
//     const result = await RemixContract.methods
//       .setMessage(message)
//       .send({ from: account, gas });
//     console.log(result);
//   };

//   const getDefaultData = async e => {
//     RemixContract.methods
//       .defaultMessage()
//       .call()
//       .then(console.log);
//   };

//   const getData = async e => {
//     RemixContract.methods
//       .getMessage()
//       .call()
//       .then(console.log);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onSubmit={setData}>
//           <label>
//             Set Message:
//             <input
//               type="text"
//               name="message"
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//             />
//           </label>
//           <input type="submit" value="Set Message" />
//         </form>
//         <br />
//         <button onClick={getData} type="button">
//           Get Message
//         </button>
//         <button onClick={getDefaultData} type="button">
//           Get Default Message
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;
