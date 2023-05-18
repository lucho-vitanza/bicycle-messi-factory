// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @custom:security-contact luciano.vitanza@gmail.com


contract BiciToken is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, AccessControl {

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC721("biciToken", "BTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);// debe ir en la funcion 
        _grantRole(MINTER_ROLE, msg.sender);//
    }

    /****************************Author: GrupoMessi*********************************/
    /*******************Deployed: *******/
    /*
        New addresses deployments --/-/----
        ERC721=0x0DE0361092D5d14BC1166ce6464bDFFFd14c9Eee
        NFT factory=0x65b7981712F0CC653176CE7707fbE04f08987e44
        Marketplace=0x6e0bD3D1751563a16E7b0949De9932a45596900d
    */

    // Fixed wallets set in the constructor

    //address private NftDAO; // wallet of the DAO---No va
    //address private NftCompany; //wallet of our company---No va
    //address private Marketplace; //address of marketplace---
    




    address private NftUser; //wallet for who will get a bike
    address private Developer; // our wallet/admin  (maybe a withelist)
    address private Operators; // wallets of whom will build a bike
    address private Gestor; //address of who will get responsibilities to manage information to build bike



// modifiers
    modifier onlyDeveloper() 
    {
        require(msg.sender==Developer,"Your are not the owner");
        _;
    }
    modifier onlyNftFactory() 
    {
        require(msg.sender==NftFactory,"Your are not the NFT Factory");
        _;
    }


    // Set and get addresses --- a que seteamos? para que?

//------------------------get--------------------//

    function getUserAddresses() external view returns(address _each)
    
    function getOperatorsAddresses() external view returns(address _each)
    {
        Operators=_each;
    } 
    function getGEstorAddresses() external view returns(address _each)
    {
        Gestor=_each;
    } 
    function getDeveloperAddresses() external view returns(address _each)
    {
        Developer=_each;
    } 
    



//------------------------set-------------------------------//

    function setNftUserAddresses(address _each) external onlyRole(DEFAULT_ADMIN_ROLE)
    {
        NftUser=_each;
    } 
    
    function setDeveloperAddresses(address _each) external onlyRole(DEFAULT_ADMIN_ROLE)
    {
        Developer = _each;
    } 
   
    function setOperatorsAddresses(address _each) external onlyRole(DEFAULT_ADMIN_ROLE)
    {
        Operators=_each; // ¿TAL VEZ UNA LINSTA HERE?
    }    

    function setGestorAddresses(address _each) external onlyRole(DEFAULT_ADMIN_ROLE)
    {
        Gestor=_each;
    }

//----------------------functiones del contrato--------------
    address[] public lista;

    function guardarRoles() internal{

    lista[].push=msg.sender;

    }



    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        onlyRole(MINTER_ROLE)
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) //what
    
        public
        view
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }


    function getQuantity(uint256 block, )  
    {
        
    }
    function approve(address spender, uint256 amount) public override returns (bool)
    {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        if( vestingQuantity(owner) < allowance(owner,NftCompany) )
        {
            set_allowances( owner, NftCompany, vestingQuantity(owner));
        }
        return true;
    }
}