const { expect } = require("chai");
const { ethers } = require("hardhat");


describe ("Bicycle Messi Factory", () => {
    const setup = async () => {
        const [owner] = await ethers.getSigners();
    
        const Warehouse = await ethers.getContractFactory("Warehouse");
        const warehouse = await Warehouse.deploy();
    
        return {
            owner,
            warehouse,
        };
    };

    describe ("Frames", ()=>{
        it('Build 2 bicycle frames', async ()=>{
    
            const maxSupply = 2;
            const model = 0;
            const mark = 0;
            const color = 0;
    
            const { owner, warehouse } = await setup();
    
            console.log('Smart Contract Warehouse Address: '+ warehouse.address);
            //console.log('Owner Address: '+  owner.address);
    
            //await warehouse.createStockNFT( maxSupply, model, mark, color);
    
            //const amountFrame = await warehouse.balanceOf(owner.address, 1);
    
            //expect(amountFrame).to.equal(2);
        })
    })
    
    /**
     * 
   
    describe("tokenURI", ()=>{
        it ('returns valid metadata', async () => {
            const { warehouse } = await setup();
    
            const maxSupply = 2;
            const model = 1;
            const mark = 0;
            const color = 0;
            await warehouse.createStockNFT( maxSupply, model, mark, color);
    
            const tokenURI = await warehouse.uri(1);
    
            const stringifiedTokenURI = await tokenURI.toString();
    
            const [prefix, base64JSON] = stringifiedTokenURI.split(
                "data:application/json;base64,"
            );
    
            const stringifiedMetadata = await Buffer.from(base64JSON, "base64").toString("ascii");
    
            const metadata = JSON.parse(stringifiedMetadata);
            
            console.log(metadata); 
            expect(metadata).to.have.all.keys("name", "description", "image", "attributes");
    
        })
    })
      */
})
