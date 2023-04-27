require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 1337
    },
    goerli:{     
      url: process.env.STAGING_POKT_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
