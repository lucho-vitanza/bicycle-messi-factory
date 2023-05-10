// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

import "./Base64.sol";
import "./AtrributeDeclaration.sol";
import "./StockBuilder.sol";

/// @custom:security-contact bicyclemessi@gmail.com
contract Warehouse is ERC1155, ERC1155Supply, StockBuilder, Stock{
    using Strings for uint256;

    constructor() ERC1155("") {}
    
    /**
    State variables 
    */
    // Stock
    // Parts


    // Bicycles
   // Bicycle[] public bicycles;


    /**
    *   Events
    */

    /**
    *   Function Modifiers
    */

    /**
    *   Struct, Arrays or Enums
    */

    /**
    *   Constructor
    */

    /**
    *   Callback — Receive function
    */

    /**
    *   External visible functions
    */
    
    /**
    *   Public visible functions
    */
    
    function createStockNFT(uint _quantity, uint8 _model, uint8 _mark, uint8 _color)
        public
    {
        Director director = new Director();
        IBuilder builder = new StockBuilder();
        director.setBuilder(builder);

        uint tokenId = director.BuildMinimalViableProduct(_model, _mark, _color);
        
        // Creamos el mint de los NFT 
        _mint(msg.sender, tokenId, _quantity, "" );
    }

    function uri (uint256 tokenId) public view override returns (string memory){
        require(exists(tokenId), "ERC1155 Metadata: URI query for nonexistent token");

        string memory jsonURI = Base64.encode(
            abi.encodePacked(
                '{',
                    '"name" : "Frame #', tokenId.toString(),'",',
                     '"description": "A bicycle frame is the main component of a bicycle, onto which wheels and other components are fitted",',
                     '"image": "https://gateway.pinata.cloud/ipfs/QmPdguRipf1Cey5k39DmA1DpEtYgnRZ72oRfRK1ayL6aeC?_gl=1*1bmrf7i*rs_ga*YzdkYmMyNmUtNGNjOS00MWE0LWEyMTAtOTEwMzU2OGNmMzM5*rs_ga_5RMPXG14TE*MTY4MzM5NzE0My41LjEuMTY4MzM5NzE0Ny41Ni4wLjA.",',
                    getMetadataAttributes(tokenId),
                '}'
            )
        );
        return string(abi.encodePacked("data:application/json;base64,", jsonURI));
    }

    function getMetadataAttributes (uint tokenId)
        internal
        view
        returns (string memory) {
            string memory attributes;
            Attribute  scAtrr;
            uint8[3] memory atrr = getAtrributesByPart(tokenId);

            attributes = string(
                abi.encodePacked(
                    '"attributes": [',
                        '{',
                            '"trait_type": "Model",'
                            '"value": "',
                            scAtrr.getModel(atrr[0]),
                        '"},',
                        '{',
                            '"trait_type": "Mark",'
                            '"value": "',
                            scAtrr.getMark(atrr[1]),
                        '"},',
                        '{',
                            '"trait_type": "Color",'
                            '"value": "',
                            scAtrr.getColor(atrr[2]),
                        '"}',
                    ']'
                )
            );
        return attributes;
    }

    /**
     * 

    // Ensamblar Ruedas
    function setWheel(uint256 initialSupply, string memory _model, string memory _mark ) public {
        // Minteamos el token del marco
        uint256 lote = batches[uint256(BICYCLE.WHEELS)]++;
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
        uint256 lote = batches[uint256(BICYCLE.DRIVETRAIN)]++;
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
        uint256 lote = batches[uint256(BICYCLE.CABLING)]++;
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
        uint256 lote = batches[uint256(BICYCLE.PERIPHERALS)]++;
        _mint(msg.sender, lote, initialSupply, "");

        // Creamos la struct asociada al Token
        for (uint count= 0; count < initialSupply; count++) {
            peripherals.push(PeripheralItem(count, lote, _model, _mark, State.Available, msg.sender));
        }
        // ToDo
        // Faltar hacer la relación entre el object y el NFT  
    }
    */

    //function getAllFrames() public view returns (Frame[] memory){
    //    return frames;
    //}

    /**
     * 

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
    */

    // Override required
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    /**
    *   Internal visible functions
    */

    /**
    *   Private visible functions
    */
}
