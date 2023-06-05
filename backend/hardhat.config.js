/** 
 * @type import('hardhat/config').HardhatUserConfig 
 */

require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { POKT_GOERLY_KEY, ALCHEMY_SEPOLIA_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.9",
    paths: {
      sources: "./contracts",
      artifacts: "./artifacts",
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks:{
    hardhat:{
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    goerli:{     
      url: `https://eth-goerli.g.alchemy.com/v2/${POKT_GOERLY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY
    }
  }
};