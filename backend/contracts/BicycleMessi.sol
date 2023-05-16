// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//to do

//informacion de cuanto hay de cada nft

//debo crear los tokens a enviar a la wallet STOCK
    //Somos NOSOTROS quienes creamos los tokens y los dejamos en lista de espera

//la wallet del stock debe enviar al usuario los tokens 
//el usuario realiza operaciones y modifica variables

    ///////////////////////////////// Rolls /////////////////////////////////////////////////////////// 
    //nftUserLiberate= User of company that liberates production order 
    //nftUserProduction = Worker that will build bycicle
    //nftOwner= current owner of the NFTbicycle
    //nftEmbasador= Client who demans article.
    //nftDeveloper= The team developing the project ------ es necesario?
    //NftDao= Investoland that will be our entry to production
    //nftCompany= The company we will be creating.
    //////////////////////////////// End of Rolls /////////////////////////////////////////////////////


contract CNFTSTOCK {

    struct SSTOCK{

        uint256 timeStamp; // puede servir para la rastreabilidad
        int32 amount; //puede ser negativo el stock pero siempre entero
        uint64 tokenId; //¿ahorra espacio una variable de 64 a 256 bytes
        uint265 owner;

    }
    ///////////////////////// NFT Information //////////////////////////////////////////////////////////
    mapping (address => mapping (uint256 => SSTOCK) private sStock);// nos olvidamos del mapping del adress address -> NFT_number_in_wallet -> sStock
    Sstock[adress][__counter].timestamp  //investigar que es counter
    mapping (uint256 => address) public nftUserLiberate; // tokenId -> Address of nftUserLiberate
    mapping (uint256 => address) public Owner;


    function mintNftBicycle(int32 _amount, uint256 _tokenID) external returns(bool success)  
    {
        
        //If the function is external only, e.g. #1 above doesn't apply to you, 
        //then you don't need to do this true/false anymore and you can just use the REVERT opcode (the "require" function in Solidity).
        
        // VALIDAR IDENTIFICACION DE QUIEN VA A AMINTEAR   

        if adress is Owner then:

            int32 __counter = nftAmount; //porque doble guion bajo?
            sStock[__counter].timeStamp= block.timestamp;
            sStock[__counter].amount= _amount;
            sStock[__counter].tokenId= _tokenID;
            nftAmount[__counter]++;
            success=true;
            return(success);

        elif adress is not Owner then: 
        
            "Solo la empresa puede mintear"


    }

     function getVestingDates(address _of, uint256 _position) external view returns (uint256 _myVesting, uint256 _myTiemstamp)
    {

        _myVesting=sVesting[_of][_position].amount;
        _myTiemstamp=sVesting[_of][_position].timeStamp;
        return(_myVesting, _myTiemstamp);
    
    }


    }

    function stockQuantity(address _of) public view returns (int32 _stockQuantity)
    {
        for(int32 __counter = nftAmount[_of]; __counter>=0; __counter--) //recomendable es no usar bucle for
        {
            _vestingQuantity+=sVesting[_of][__counter].amount;
            if(__counter==0)
                break;
        }
        return(_vestingQuantity);
    }
  


 
    } 

    // Control de stock
    







}

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

