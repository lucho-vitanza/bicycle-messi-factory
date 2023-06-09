import React,  {useState}from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "../../components/login/Login";


import Web3 from 'web3';
import { ContractABI } from '../../abi/ContractABI';

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/2fc5b79cc7cd444a972f5bf92e54b9e7'));
//web3.eth.defaultAccount = web3.eth.accounts[0];

const contractInstance = new web3.eth.Contract(
  ContractABI,
  "0x48A3C684890629a80e8DF4993506Ffe31675E66F"
);

function Usuario() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { form, setForm} = useState({})
  // const onSubmit = data => console.log(data);

  const sendData1 = (data) => {
    console.log(typeof watch("contractName")); // watch input value by passing the name of it
    console.log(typeof watch("ids")); // watch input value by passing the name of it
    console.log(watch("names")); // watch input value by passing the name of it

    let arIDS = (watch("ids").split(","));
    let arNames = (watch("names").split(","));

    console.log(arIDS, arIDS)
    console.log(arIDS, arNames)
  }


  const getContracTByID = async () => {
    let cuenta = localStorage.getItem("account");
    if(!cuenta) {
      await connectToMetaMask()
    }
    const result = await contractInstance.methods.tokens(1).call({ from: cuenta });
    console.log("result" + result)
  };
  const crearLote = async () => {
    let arIDS = (watch("ids").split(","));
    let arNames = (watch("names").split(","));
    let cuenta = localStorage.getItem("account");
    if(!cuenta) {
      await connectToMetaMask()
    }
    cuenta = localStorage.getItem("account");
    console.log('2', cuenta)
    const result = await contractInstance.methods.deployERC1155(watch("contractName"), 'http://images', arIDS, arNames).send({ 
      from: cuenta,
       gas: 3000000, 
       value: web3.utils.toWei('1', 'ether') 
      });
    console.log("result lote" + result)
  };

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        // Aquí puedes acceder a la cuenta del usuario
        const userAccount = accounts[0];
        console.log(userAccount)
        localStorage.setItem("account", userAccount);
        
      }).catch(error => {
        // Maneja el error de conexión con Metamask
        console.error('Error al conectar con Metamask:', error);
      });
    } else {
      // Maneja el caso en el que Metamask no esté instalado o disponible
      alert('Metamask no está instalado o disponible');
      console.error('Metamask no está instalado o disponible');
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="w-full">

<div class="grid grid-cols-2 mt-60">
  <div class="bg-gray-200">
  <h2 className="text-2xl font-bold mb-4">Crear nuevo lote </h2>
    <form onSubmit={handleSubmit(handleShow)} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="contractName" className="block text-gray-700 text-sm font-bold mb-2">
          Nombre del lote
        </label>
        <input
          defaultValue="Lote #"
          {...register("contractName", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="ids" className="block text-gray-700 text-sm font-bold mb-2">
          Id piezas
        </label>
        <input
          defaultValue="1,2,3"
          {...register("ids", { required: true })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.exampleRequired ? "border-red-500" : ""}`}
        />
        {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="names" className="block text-gray-700 text-sm font-bold mb-2">
          Nombres Piezas
        </label>
        <input
        defaultValue="rueda,cuadro,maniubro"
        {...register("names", { required: true })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.exampleRequired ? "border-red-500" : ""}`}
        />
        {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
      </div>
      
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
          Se creara un nuevo contrato ERC1155 para el lote con los siguientes detalles:

          </Row>

          <Row>
          - Nombre : {watch("contractName")}
          </Row>
          <Row>
          - IDs: {watch("ids")}
          </Row>
          <Row>
          - Nombres: {watch("names")}
          </Row>
        </Container>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={crearLote}>
            Crear Contrato
          </Button>
        </Modal.Footer>
      </Modal>

  </div>
  <div class="bg-gray-300">Celda 2</div>
  <div class="bg-gray-400">Celda 3</div>
  <div class="bg-gray-500">Celda 4</div>
</div>


    </div>
  );
};

export default Usuario;
