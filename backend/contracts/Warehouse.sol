// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact bicyclemessi@gmail.com
contract Warehouse is ERC1155, Ownable {
    
    
    constructor() ERC1155("https://bicyclemessi.example/api/item/{id}.json") {}
    
    /**
    State variables 
    */
    // Stock
    FrameItem[] private frames;
    WheelItem[] private wheels;
    DrivetrainItem[] private drivetrains;
    CablingItem[] private cablings;
    PeripheralItem[] private peripherals;
    BicycleItem[] public bicicletas;

    // Almacenamos el ultimo lote del enum BICYCLE
    // enum BICYCLE --> ultimo lote
    mapping (uint => uint) public lotes;

    /**
    *   Events
    */

    /**
    *   Function Modifiers
    */

    /**
    *   Struct, Arrays or Enums
    */
    // Partes de la bicicleta obtenido de https://en.wikipedia.org/wiki/List_of_bicycle_parts
    enum BICYCLE {
        FRAME,
        WHEELS,
        DRIVETRAIN,
        CABLING,
        PERIPHERALS
    }

    struct FrameItem {
        uint id;
        uint batch;
        string model;
        string mark;
        State state;
        address owner;
    }
    
    struct WheelItem {
        uint id;
        uint batch;
        string model;
        string mark;
        State state;
        address owner;
    }
    
    struct DrivetrainItem {
        uint id;
        uint batch;
        string model;
        string mark;
        State state;
        address owner;
    }

    struct CablingItem {
        uint id;
        uint batch;
        string model;
        string mark;
        State state;
        address owner;
    }
    
    struct PeripheralItem {
        uint id;
        uint batch;
        string model;
        string mark;
        State state;
        address owner;
    }

    struct BicycleItem{
        uint id;
        uint idFrame;
        uint[2] idWheels;
        uint idDriveTrain;
        uint[4] idCabling;
        uint idPeripherals;
        address owner;
    }

    enum State { Available, UnderConstruction, Unavailable }


    /**
    *   Constructor
    */

    /**
    *   Fallback — Receive function
    */

    /**
    *   External visible functions
    */
    
    /**
    *   Public visible functions
    */
    // Armar Marcos
    function setFrame(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = lotes[uint256(BICYCLE.FRAME)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            frames.push(FrameItem(count, lote, _model, _mark, State.Available, msg.sender));
        } 

        // ToDo
        // Faltar hacer la relación entre el object y el NFT     
    }

    // Ensamblar Ruedas
    function setWheel(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = lotes[uint256(BICYCLE.WHEELS)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            wheels.push(WheelItem(count, lote, _model, _mark, State.Available, msg.sender));
        }
         // ToDo
        // Faltar hacer la relación entre el object y el NFT  
    }


     // Ensamblar Transmisiones
    function setDrivetrain(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = lotes[uint256(BICYCLE.DRIVETRAIN)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            drivetrains.push(DrivetrainItem(count, lote, _model, _mark, State.Available, msg.sender));
        }
         // ToDo
        // Faltar hacer la relación entre el object y el NFT  
    }

     // Ensamblar Cables
    function setCabling(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = lotes[uint256(BICYCLE.CABLING)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            cablings.push(CablingItem(count, lote, _model, _mark, State.Available, msg.sender));
        }
        // ToDo
        // Faltar hacer la relación entre el object y el NFT  
    }

    // Ensamblar Perifericos
    function setPeripheral(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = lotes[uint256(BICYCLE.PERIPHERALS)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            peripherals.push(PeripheralItem(count, lote, _model, _mark, State.Available, msg.sender));
        }
        // ToDo
        // Faltar hacer la relación entre el object y el NFT  
    }

    function getAllFrames() public view returns (FrameItem[] memory){
        return frames;
    }
    function getAllWheels() public view returns (WheelItem[] memory){
        return wheels;
    }
    function getAllDrivetrains() public view returns (DrivetrainItem[] memory){
        return drivetrains;
    }
    function getAllCablings() public view returns (CablingItem[] memory){
        return cablings;
    }
    function getAllPeriphericals() public view returns (PeripheralItem[] memory){
        return peripherals;
    }
    /**
    *   Internal visible functions
    */

    /**
    *   Private visible functions
    */


}
