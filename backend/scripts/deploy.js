const { ethers } = require("hardhat");
const fs = require("fs");



async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", deployer);

    const Warehouse = await ethers.getContractFactory("Warehouse");
    const warehouse = await Warehouse.deploy();

    console.log("Warehouse Contract Address: ", warehouse.address);

    let config = `export const abiWarehouseAddress = "${warehouse.address}"`;

    let data = JSON.stringify(config);

    fs.writeFileSync("../frontend/utils/config.js", JSON.parse(data))

    fs.copyFile(
        './artifacts/contracts/Warehouse.sol/Warehouse.json',
        '../frontend/utils/abi/Warehouse.json',
        (err) => {
            if (err)
                console.log('Error Ocurred: ', err);
        }
    );
}

main ()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });