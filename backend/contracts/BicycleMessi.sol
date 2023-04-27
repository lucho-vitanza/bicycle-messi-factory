// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface LineaProduccion {

    function armarComponente(uint _idComponente) external returns (bool);
    function setTiempoStandard(uint _minutos) external returns (bool);
    
}
/// @custom:security-contact bicyclemessi@gmail.com
contract BicycleMessi is ERC1155, Ownable {
    constructor() ERC1155("") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

}