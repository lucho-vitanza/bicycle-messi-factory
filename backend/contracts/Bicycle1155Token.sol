// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Bicycle1155Token is ERC1155, Ownable {

    string[] public bicyclePartNames; //string array bicycle part names
    uint[] public ids; //uint array ids of part names
    string public baseMetadataURI; //URI metadata
    string public contractName; //the token mame
    uint public mintFee = 0 wei; //mintfee, 0 by default. only used in mint function, not batch.
    
    mapping(string => uint) public biciclePartNameToId ; //part name to id mapping
    mapping(uint => string) public idToBicyclePartName; //id to part name mapping

    /*
    constructor is executed when the factory contract calls its own deployERC1155 method
    */
    constructor(string memory _contractName, string memory _uri, string[] memory _bicyclePartNames, uint[] memory _ids) ERC1155(_uri) {
        bicyclePartNames = _bicyclePartNames;
        ids = _ids;
        createMapping();
        setURI(_uri);
        baseMetadataURI = _uri;
        contractName = _contractName;
        transferOwnership(tx.origin);
    }   

    /*
    creates a mapping of strings to ids (i.e ["one","two"], [1,2] - "one" maps to 1, vice versa.)
    */
    function createMapping() private {
        for (uint id = 0; id < ids.length; id++) {
            biciclePartNameToId[bicyclePartNames[id]] = ids[id];
            idToBicyclePartName[ids[id]] = bicyclePartNames[id];
        }
    }
    /*
    sets our URI and makes the ERC1155 OpenSea compatible
    */
    function uri(uint256 _tokenid) override public view returns (string memory) {
        return string(
            abi.encodePacked(
                baseMetadataURI,
                Strings.toString(_tokenid),".json"
            )
        );
    }

    function getNames() public view returns(string[] memory) {
        return bicyclePartNames;
    }

    /*
    used to change metadata, only owner access
    */
    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    /*
    set a mint fee. only used for mint, not batch.
    */
    function setFee(uint _fee) public onlyOwner {
        mintFee = _fee;
    }

    /*
    mint(address account, uint _id, uint256 amount)

    account - address to mint the token to
    _id - the ID being minted
    amount - amount of tokens to mint
    */
    function mint(address account, uint _id, uint256 amount) 
        public payable returns (uint)
    {
        require(msg.value == mintFee);
        _mint(account, _id, amount, "");
        return _id;
    }

    /*
    mintBatch(address to, uint256[] memory _ids, uint256[] memory amounts, bytes memory data)

    to - address to mint the token to
    _ids - the IDs being minted
    amounts - amount of tokens to mint given ID
    bytes - additional field to pass data to function
    */
    function mintBatch(address to, uint256[] memory _ids, uint256[] memory amounts, bytes memory data)
        public
    {
        _mintBatch(to, _ids, amounts, data);
    }
}