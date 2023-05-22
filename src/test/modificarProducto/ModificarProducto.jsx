import { Container, Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Tarjeta from "./Tarjeta";
function ModificarProducto() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState("126");
    const [nombre, setNombre] = useState("bebida 3Lt");
    const [valor, setValor] = useState("1500");
    const [url, setUrl] = useState("https://www.camelchile.cl/wp-content/uploads/2022/06/FANTA_RETORNABLE-2L.png");

    return (

        <>

            <hr />
            <Container >
                {/* Aca va el modal */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editando [{nombre.toUpperCase()}][${valor}]</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ padding: "1rem" }}>
                        <Form onSubmit={ev => {
                            ev.preventDefault();
                            //let datos = { nombre: ev.target.inputNombre.value, valor: ev.target.inputValor.value, url: ev.target.inputImagen.value }
                            setNombre(ev.target.inputNombre.value)
                            setValor(ev.target.inputValor.value)
                            setUrl(ev.target.inputImagen.value == "" ? url : ev.target.inputImagen.value)
                            let a = ev.target.inputImagen.value == "" ? url : ev.target.inputImagen.value
                            alert("cambios realizados");
                            setShow(false);
                            redirect("/lista")
                            
                        }}>
                            <Form.Label htmlFor="inputNombre">Nuevo Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputNombre"
                                name="inputNombre"
                                placeholder="Escribe un nombre para producto"
                                onChange={(e) => { setNombre(e.target.value) }}
                                required
                            />
                            <Form.Text muted>
                                Se recomienda escribir un nombre breve y descriptivo para el producto.<br />
                            </Form.Text>
                            <Form.Label htmlFor="inputValor">Nuevo valor</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputValor"
                                placeholder="Escriba un nombre breve para su producto"
                                name="inputValor"
                                onChange={(e) => { setValor(e.target.value) }}
                                required
                            />
                            <Form.Text muted>
                                Se debe escribir los valores en numeros  <b>enteros</b>.<br />
                            </Form.Text>
                            <Form.Label htmlFor="inputImagen">Nueva imagen</Form.Label>
                            <Form.Control
                                type="txt"
                                id="inputImagen"
                                name="inputImagen"
                                placeholder="Escriba una ruta para la imagen de producto"
                                onChange={(e) => { setUrl(e.target.value) }}
                            />
                            <Form.Text muted>
                                Se debe escribir una <b>URL o RUTA</b>, donde se ubique la imagen, de lo contrario dejar el campo <b>VACIO.</b><br />
                            </Form.Text>
                            <Button className="mt-4" variant="primary" type="submit">
                                Guardar cambios
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Salir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container >

            <Container>
                <Tarjeta id={id} imagen={url} valor={valor} nombre={nombre} />
                <Button onClick={() => { setShow(true) }} style={{ display: show === true ? "none" : "" }}>Editar</Button>
            </Container>
        </>
    )

}

export default ModificarProducto