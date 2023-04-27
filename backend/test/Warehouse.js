const { expect } = require("chai");
const { ethers } = require("hardhat");

let warehouse;
describe ("Create Warehouse's Tokens Tests", ()=>{
    before (async () => {
        const [owner, addr1] = await ethers.getSigners();

        const Warehouse = await ethers.getContractFactory("Warehouse");
        warehouse = await Warehouse.deploy();
        await warehouse.deployed();

        console.log('WareHouse Contract Address: ' + warehouse.address);
    });

    it('Assemble 2 bicycle frames', async ()=>{
        let setFrame = await warehouse.setFrame(
            2,
            'Urbana',
            'BiMEX'
        );

        let frames = await warehouse.getAllFrames();
        expect(frames.length).to.equal(2);
    })

    it('Assemble 4 bicycle wheels', async ()=>{
        let setWheel = await warehouse.setWheel(
            4,
            'Cama Alta',
            'Goodyear'
        );

        let wheels = await warehouse.getAllWheels();
        expect(wheels.length).to.equal(4);
    })

    it('Assemble 2 bicycle drivetrain', async ()=>{
        let setWheel = await warehouse.setDrivetrain(
            2,
            '18 Velocidades',
            'Shimano'
        );

        let wheels = await warehouse.getAllDrivetrains();
        expect(wheels.length).to.equal(2);
    })
});