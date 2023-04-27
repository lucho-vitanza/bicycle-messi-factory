const { ethers } = require("hardhat");

async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", deployer);

    const Warehouse = await ethers.getContractFactory("Warehouse");
    const warehouse = await Warehouse.deploy();

    console.log("Warehouse Contract Address: ", warehouse.address);
}

main ()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });