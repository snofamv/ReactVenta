import { Container, Button, Table } from "react-bootstrap"
import { useState } from "react";

export default function Venta() {
    //USE STATES
    const [ventaIniciada, setVentaIniciada] = useState(false);
    const [listaProductos, setListaProductos] = useState([]);
    const [codigo, setCodigo] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [totalVenta, setTotalVenta] = useState(0);

    const agregarProductos = () => {
        let auxObj = { id: (listaProductos.length + 1), codigo: codigo, nombre: "PRUEBA", valor: 1500, cantidad: 0, total: 0 }
        if (ventaIniciada == true) {
            document.getElementById("inputCodigo").focus();
            if (codigo !== '') {
                auxObj.codigo = codigo;
                document.getElementById("inputCantidad").focus();
                if (parseInt(cantidad) != 0 & parseInt(cantidad) > 0) {
                    auxObj.cantidad = parseInt(cantidad);
                    auxObj.total = auxObj.valor * auxObj.cantidad;
                    setTotalVenta(parseInt(totalVenta + auxObj.total))
                    setListaProductos([...listaProductos, auxObj])
                    setCantidad("")
                    setCodigo("")
                    console.log("+"+auxObj.total)
                }


            }
        }
        if (ventaIniciada == false) {

        }

    }
    const detener = () => {
        console.clear();
        setVentaIniciada(false);
        console.log("* DETENIENDO COLA DE PRODUCTOS *");
        console.log("LARGO DE ARRAY: " + listaProductos.length);
        console.log("OBJETOS: " + JSON.stringify(listaProductos))

    }
    const iniciar = () => {
        setVentaIniciada(true);
        document.getElementById("inputCodigo").focus();
        console.log("* INICIANDO COLA DE PRODUCTOS *");
    }
    const cls = () => {
        console.clear();
        setListaProductos([]);
        setCantidad("");
        setCodigo("");
        setTotalVenta(0);
        document.getElementById("inputCodigo").focus();
        console.log("CLS.")
    }

    const eliminar = (parametro) => {
        console.clear();
        console.log("BORRANDO #ID: " + parametro)
        var elemento = parametro; // Elemento que deseas eliminar

        var nuevoArray = listaProductos.filter((valor) => {
            return valor.id !== parametro;
        });
        setListaProductos(nuevoArray);
        console.log(nuevoArray); // Resultado: [1, 2, 4, 5]
    }
    return (
        <>
            {ventaIniciada && agregarProductos()}

            <Container className='d-flex'>

                <Container className='mt-4'>
                    <fieldset className="border p-3">
                        <legend className="w-auto">VENTA</legend>
                        <form className=''>

                            <input className='m-1' type="text" id="inputCodigo" placeholder='CODIGO PRODUCTO' value={codigo} onChange={e => setCodigo(e.target.value)} required/>
                            <input className='m-1' type="number" id="inputCantidad" placeholder='CANTIDAD' value={cantidad === 0 ? '':cantidad} onChange={e => setCantidad(e.target.value)} required />

                            {ventaIniciada === true ? <Button className='m-1 mt-3 btn btn-danger' onClick={() => { setVentaIniciada(false) }}>FINALIZAR</Button> : <Button className='m-1 mt-3 btn btn-success' onClick={() => { setVentaIniciada(true) }}>INICIAR</Button>}
                            <Button className='m-1 mt-3 btn btn-primary' onClick={cls}>CLS</Button>
                        </form>
                    </fieldset>


                </Container>
                <Container className='mt-4'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CODIGO</th>
                                <th>NOMBRE</th>
                                <th>CANTIDAD</th>
                                <th>UNITARIO</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaProductos.map((producto) => {
                                    return (

                                        <tr key={producto.id} className="text-center">
                                            <td>{producto.id}</td>
                                            <td>{producto.codigo}</td>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.valor}</td>
                                            <td>{producto.total}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan={6}><p className="text-end"><b>TOTAL: <span  style={{color:'red'}}>$ {totalVenta}</span></b></p></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container >



        </>)

}