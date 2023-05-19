const { expect } = require("chai");
const { ethers } = require("hardhat");


let BikeFactory, Bike;
let bikeFactory, bike;


describe ("Bicycle Messi Factory", () => {
    beforeEach(async function () {
        const [owner] = await ethers.getSigners();
        const overrides = { gasLimit: 8000000 };
        BikeFactory = await ethers.getContractFactory("FactoryBicycle1155");
        Bike = await ethers.getContractFactory("Bicycle1155Token");
        bikeFactory = await BikeFactory.deploy();
    })

    it("Should deploy BikeFactory", async function () {
        expect(bikeFactory.address).to.not.equal(0);
    });

    it("Should create a new Bike factory", async function () {
        await bikeFactory.deployBicycle1155('LOTEBicicletas1', 'http://testing', [1,2,3,4], ['CUADRO', 'MANIUBRO', 'LLANTA', 'TRANSMISSION-CABLEADO']);
        expect(bikeFactory.address).to.not.equal(0);
    });

    it("Should minting bike parts", async function () {
        // Crear un lote de bicicletas
        await bikeFactory.deployBicycle1155('LOTEBicicletas1', 'http://testing', [1,2,3,4], ['CUADRO', 'MANIUBRO', 'LLANTA', 'TRANSMISSION-CABLEADO']);
        // minteando cuadros
        const bik = await bikeFactory.mintBicycle1155(0, 'CUADRO', 2)
        const bike = await bikeFactory.getBicycle1155byIndexAndId(0,1)
        expect(bik.hash).not.to.equal(null);
        expect(bike).to.have.lengthOf.above(0);

    });

    /*
    describe ("Test deployERC1155", ()=>{
        it('Create Factory', async ()=>{
            
            const { owner, factory } = await setup();
            console.log('Smart Contract Factory Address: '+ factory.address);
            console.log('Owner Address: '+  owner.address);
    

    
            //await warehouse.createStockNFT( maxSupply, model, mark, color);
    

    
            //const amountFrame = await warehouse.balanceOf(owner.address, 1);
    

    
            //expect(amountFrame).to.equal(2);
    
        })
    
    })
*/
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
