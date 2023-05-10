// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./StructDeclaration.sol";


// TO DO 

//funcion enviar el stock a la wallet de de grupo messi 
// calculo de tiempos
//impl,entar whitelist para el minteo


interface IBuilder {
    function buildFrame(uint8 _model, uint8 _mark, uint8 _color) external returns (uint);   //conjunto cuadro
    function buildWheel() external;                                                         //conjunto ruedas
    function buildDrivetrain() external;                                                    //conjunto manubrio
    function buildchain() external;                                                         //conjunto trans. movimiento
    function reset() external;
}

contract Stock {

    using Strings for uint256; //biblioteca de open para hacer concatenacionacion en el for

    Part[] private _parts;

    function AddParts(Part memory _part) public 
    {
        Parts.push(_part);
    }

    function ListParts() public view returns(string memory)
    {
        string memory str;
       for (uint i = 0; i < _parts.length; i++) {
            str = string.concat(_parts[i].id.toString(), " - ", uint256(_parts[i].kind).toString(), "\n"); // no entiendo
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

contract StockBuilder is IBuilder { //con is builder, que significa?

    Stock private _stock = new Stock(); //instancias la clase stock

    using Counters for Counters.Counter; //no entiendo para que lo usamos
    Counters.Counter private currentTokenId; //que hace?

    function reset() public override // si reset es llamada, resetea la lista de stock?
    {
        _stock = new Stock(); 
    }

    function buildFrame( uint8 _model, uint8 _mark, uint8 _color, uint256 _tiempo) public override returns (uint)
    {   
        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        uint256 tiempo = _tiempo
        _stock.AddParts(Part(newItemId, Kind.Frame, _model, _mark, _color, State.Available));
        return newItemId, tiempo;
    }

    function calculotiempo(uint256 _tiempoSTD, uint256 tiempo) external private returns (uint256 _tiempoSTD)
    {
        tiempoSTD = _tiempoSTD + tiempo
        return tiempoSTD;

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
        _builder.buildchain();
        
    }


 








}