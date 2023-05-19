// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Bicycle1155Token.sol";

contract FactoryBicycle1155 {

    Bicycle1155Token[] public tokens; //an array that contains different Bicycle1155 tokens deployed
    mapping(uint256 => address) public indexToContract; //index to contract address mapping
    mapping(uint256 => address) public indexToOwner; //index to Bicycle1155 owner address

    event Bicycle1155Created(address owner, address tokenContract); //emitted when Bicycle1155 token is deployed
    event Bicycle1155Minted(address owner, address tokenContract, uint amount); //emmited when Bicycle1155 token is minted

    /*
    deployBicycle1155 - deploys a Bicycle1155 token with given parameters - returns deployed address

    _contractName - name of our Bicycle1155 token
    _uri - URI resolving to our hosted metadata
    _ids - IDs the Bicycle1155 token should contain
    _name - Names each ID should map to. Case-sensitive.
    */
    function deployBicycle1155(string memory _contractName, string memory _uri, uint[] memory _ids, string[] memory _partNames) public returns (address) {
        Bicycle1155Token t = new Bicycle1155Token(_contractName, _uri, _partNames, _ids);
        tokens.push(t);
        indexToContract[tokens.length - 1] = address(t);
        indexToOwner[tokens.length - 1] = tx.origin;
        emit Bicycle1155Created(msg.sender,address(t));
        return address(t);
    }

    /*
    mintBicycle1155 - mints a Bicycle1155 token with given parameters

    _index - index position in our tokens array - represents which Bicycle1155 you want to interact with
    _name - Case-sensitive. Name of the token (this maps to the ID you created when deploying the token)
    _amount - amount of tokens you wish to mint
    */
    function mintBicycle1155(uint _index, string memory _partName, uint256 amount) public {

        uint id = getIdByName(_index, _partName);
        tokens[_index].mint(indexToOwner[_index], id, amount);
        emit Bicycle1155Minted(tokens[_index].owner(), address(tokens[_index]), amount);
    }

    /*
    Helper functions below retrieve contract data given an ID or name and index in the tokens array.
    */
    function getCountBicycle1155byIndex(uint256 _index, uint256 _id) public view returns (uint amount) {
        return tokens[_index].balanceOf(indexToOwner[_index], _id);
    }

    function getCountBicycle1155byName(uint256 _index, string calldata _partName) public view returns (uint amount) {
        uint id = getIdByName(_index, _partName);
        return tokens[_index].balanceOf(indexToOwner[_index], id);
    }

    function getIdByName(uint _index, string memory _partName) public view returns (uint) {
        return tokens[_index].biciclePartNameToId(_partName);
    }

    function getNameById(uint _index, uint _id) public view returns (string memory) {
        return tokens[_index].idToBicyclePartName(_id);
    }

    function getBicycle1155byIndexAndId(uint _index, uint _id)
        public
        view
        returns (
            address _contract,
            address _owner,
            string memory _uri,
            uint supply
        )
    {
        Bicycle1155Token token = tokens[_index];
        return (address(token), token.owner(), token.uri(_id), token.balanceOf(indexToOwner[_index], _id));
    }
}