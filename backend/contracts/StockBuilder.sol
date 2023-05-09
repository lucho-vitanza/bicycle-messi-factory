// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./StructDeclaration.sol";

interface IBuilder {
    function buildFrame(uint8 _model, uint8 _mark, uint8 _color) external returns (uint);
    function buildWheel() external;
    function buildDrivetrain() external;
    function buildCabling() external;
    function buildPeripheral() external;
    function reset() external;
}

contract Stock {
    using Strings for uint256;

    Part[] private _parts;

    function AddParts(Part memory _part) public 
    {
        _parts.push(_part);
    }

    function ListParts() public view returns(string memory)
    {
        string memory str;
       for (uint i = 0; i < _parts.length; i++) {
            str = string.concat(_parts[i].id.toString(), " - ", uint256(_parts[i].kind).toString(), "\n");
        }
        return str;
    }

    function getAtrributesByPart(uint idx) public view returns (uint8 [3] memory){
        uint8 [3] memory atrr;
        atrr[0] = _parts[idx].model;
        atrr[1]= _parts[idx].mark;
        atrr[2]= _parts[idx].color;

        return atrr;
    }
}

contract StockBuilder is IBuilder {

    Stock private _stock = new Stock();

    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;

    function reset() public override 
    {
        _stock = new Stock();
    }

    function buildFrame( uint8 _model, uint8 _mark, uint8 _color) public override returns (uint)
    {   
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _stock.AddParts(Part(newItemId, Kind.Frame, _model, _mark, _color, State.Available));
        return newItemId;
    }

    function buildWheel() external override {}

    function buildDrivetrain() external override {}

    function buildCabling() external override {}

    function buildPeripheral() external override {}

    function getStock () public view returns (Stock){
        Stock result = _stock;
        return result;
    }
}

contract Director {
    IBuilder private _builder;

    function setBuilder(IBuilder value) public {
        _builder = value;
    }

    function BuildMinimalViableProduct(uint8 _model, uint8 _mark, uint8 _color) public returns (uint){
        uint tokenId = _builder.buildFrame(_model, _mark, _color);
        return tokenId;
    }

    function BuildFullFeatureProduct(uint8 _model, uint8 _mark, uint8 _color) public{
        _builder.buildFrame(_model, _mark, _color);
        _builder.buildDrivetrain();
        _builder.buildWheel();
        _builder.buildCabling();
        _builder.buildPeripheral();
    }
}