const { ethers } = require("hardhat");
const fs = require("fs");


async function main(){
    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", deployer);

    const FactoryERC1155 = await ethers.getContractFactory("FactoryBicycle1155");
    const factoryERC1155 = await FactoryERC1155.deploy();

    console.log("FactoryBicycle1155 Contract Address: ", factoryBicycle1155.address);

    let config = `export const factoryBicycle1155Address = "${factoryBicycle1155.address}"`;

    let data = JSON.stringify(config);

    fs.writeFileSync("../frontend/utils/config.js", JSON.parse(data))

    fs.copyFile(
        './artifacts/contracts/FactoryBicycle1155.sol/FactoryBicycle1155.json',
        '../frontend/utils/abi/FactoryBicycle1155.json',
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