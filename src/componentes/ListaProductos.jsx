import { Container, Table, Button, Form, InputGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import {datosJSON} from '../datos/datos'
function ListaProductos() {

    useEffect(() => {
        setListaProductos(datosJSON);

        //localStorage.setItem("lista", JSON.stringify(datos));
    }, [])



    const [listaProductos, setListaProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const cls = () => {
        console.clear()
        setBusqueda("");
        document.getElementById("inputProducto").value = "";
        document.getElementById("inputProducto").focus();

    }

    const controlStock = (idParam, op) => {
        // let arr = [];
        // listaProductos.map((producto, index) => {
        //     arr[index] = producto;
        //     if (idParam == index + 1) {
        //         if (arr[index].stock < 999 & op === "+") {
        //             arr[index].stock += 1;
        //             console.log(`PRODUCTO: +1 - TOTAL(${producto.stock})`);
        //         }
        //         if (arr[index].stock > 0 & op === "-") {
        //             arr[index].stock -= 1;
        //             console.log(`PRODUCTO: -1 - TOTAL(${producto.stock})`);
        //         }
        //     }
        // })
        // setListaProductos(arr);
        var nuevoArray = listaProductos.filter((producto) => {
            if (producto.id === idParam) {
                if (op === '+') {
                    producto.stock += 1;
                }
                if (op === '-') {
                    producto.stock -= 1;
                }
            }
            return producto;
        });
        setListaProductos(nuevoArray);
        console.log(nuevoArray); // Resultado: [1, 2, 4, 5]
    }
    const eliminar = (codigoParam) => {
        console.log("BORRANDO #ID: " + codigoParam)
        var nuevoArray = listaProductos.filter((producto) => {
            return producto.codigo !== codigoParam;
        });
        setListaProductos(nuevoArray);
    }
    return (
        <>
            <Container className='mt-3' style={{ height: "550px", overflow: "auto" }}>
                <InputGroup className="mb-3">
                    <Form.Label style={{ marginRight: '1rem', background: 'grey', padding: '1rem' }}><b>{busqueda}</b></Form.Label>
                    <Form.Control
                        id="inputProducto"
                        placeholder="Buscar"
                        aria-label="Buscar"
                        aria-describedby="basic-addon1"
                        onChange={e => setBusqueda(e.target.value)}
                        value={busqueda}
                        required
                    />
                    <Button className='btn-warning' onClick={cls}>CLS</Button>
                </InputGroup>
                <Table striped bordered hover id='tabla_productos' className='mt-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Codigo</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Stock Disponible</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductos.filter((producto) => {
                            return busqueda.toLowerCase() === '' ? producto : producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
                        }).map(producto => {
                            return (

                                <tr key={producto.id} id={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.codigo}</td>
                                    <td>{producto.nombre}</td>
                                    <td>$ {producto.valor}</td>
                                    <td style={{ backgroundColor: producto.stock >= 10 ? "green" : "red" }}>{producto.stock}</td>
                                    <td width={'230px'}>
                                        <Button className='btn btn-success m-1' onClick={() => controlStock(producto.id, '+')} ><b>+</b></Button>
                                        <Button className='btn btn-danger m-1' onClick={() => controlStock(producto.id, '-')}><b>-</b></Button>
                                        |
                                        <Button className='btn btn- m-1'  ><b>Editar</b></Button>
                                        <Button className='btn btn-danger m-1' onClick={e => { eliminar(producto.codigo) }}><b>X</b></Button>
                                    </td>
                                </tr >
                            );
                        })}

                    </tbody>
                </Table>
            </Container >


        </>
    )

}

export default ListaProductos