import React,  {useState}from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Boton() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { form, setForm} = useState({})
  // const onSubmit = data => console.log(data);

  const sendData1 = (data) => {
  
    console.log(watch("contractName")); // watch input value by passing the name of it
    console.log(watch("ids")); // watch input value by passing the name of it
    console.log(watch("names")); // watch input value by passing the name of it

  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="w-full text-white">

<div class="grid grid-cols-2">
  <div class="bg-gray-200">Celda 1</div>
  <div class="bg-gray-300">Celda 2</div>
  <div class="bg-gray-400">Celda 3</div>
  <div class="bg-gray-500">Celda 4</div>
</div>

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
          defaultValue="[1,2,3]"
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
        defaultValue="['rueda','cuadro','maniubro']"
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
          Se creara un nuevo contrato para el lote

          </Row>

          <Row>
          Se creara un nuevo contrato para \n el lote

          </Row>
        </Container>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendData1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Boton;
