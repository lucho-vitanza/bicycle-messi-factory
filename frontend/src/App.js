import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Web3 from "web3";
import { ContractABI } from "./abi/ContractABI";
import Login from "../src/components/login/Login";
import Warehouse from "../src/components/Warehouse";
import Home from "../src/Pages/Home";
import MyAccount from "../src/Pages/MyAccount";
import MyOrder from "../src/Pages/MyOrder";
import MyOrders from "../src/Pages/MyOrders";
import Usuario from "./Pages/Usuario";
import SignIn from "../src/Pages/SignIn";
import Navbar from "../src/components/Navbar";
import NotFound from "../src/Pages/Notfound";
import "./App.css";
import { initializeApp } from "firebase/app";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

const RemixContract = new web3.eth.Contract(
  ContractABI,
  process.env.REACT_APP_ADDRESS_SMART_CONTRACT
); 

function App() {
  const [message, setMessage] = useState("");

  const setData = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];

    const gas = await RemixContract.methods.setMessage(message).estimateGas();
    const result = await RemixContract.methods
      .setMessage(message)
      .send({ from: account, gas });
    console.log(result);
  };

  const getDefaultData = async (e) => {
    RemixContract.methods.defaultMessage().call().then(console.log);
  };

  const getData = async (e) => {
    RemixContract.methods.getMessage().call().then(console.log);
  };



  return (
    <Router  >
      <Login />
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/usuarios" element={<Usuario />} />
     </Routes>
   
     <Warehouse />
    </Router>
   
  );
}



export default App;
