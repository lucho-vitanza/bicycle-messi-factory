# Backend Factory 

Factoria de contratos inteligentes, cada producto fabricado por ejemplo una bicicleta es creado/minteado por el contrato (ERC1155Token.sol). Y la fabrica de contratos (FactoryERC1155.sol) es el que maneja todos los contratos que se crean, ejemplo crear multiples lotes de bicicletas


## Tecnologias

- Hardhat
- Solidity
- OpenZeppelin

## Comandos 

- Compilar 
```sh
npx hardhat compile
```

- Test unitarios 

```sh
npx hardhat test
```

- Deploy 

Set environment variables: 
POKT_GOERLY_KEY, ALCHEMY_SEPOLIA_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY

```sh
npx hardhat run scripts/deploy.js --network goerli
```

## Siguientes pasos
  
- Agregar Push protocol para envio de notificationes a la hora de finalizar la produccion de un pedido de bicicleta al comprador

