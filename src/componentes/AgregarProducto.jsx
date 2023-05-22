import { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

function AgregarProducto() {
    const [idProd, setIdProd] = useState(1);
    const [codigo, setCodigo] = useState("");
    const [nomProducto, setNomProducto] = useState("");
    const [valProducto, setValProducto] = useState(0);
    const [lista, setLista] = useState([]);

    const agregar = () => {
        event.preventDefault();
        if ((nomProducto.length == 0 || valProducto.length == 0)) {
            setCodigo("")
            setNomProducto("")
            setValProducto("")
            document.getElementById("inputCodigo").value = ""
            document.getElementById("inputNombre").value = ""
            document.getElementById("inputValor").value = ""
            document.getElementById("inputCodigo").focus()
            console.log("ERROR, CAMPOS VACIOS.")
        } else {
            if (nomProducto.length > 1 && valProducto.length > 1) {
                setIdProd(idProd + 1);
                let auxObj = { id: idProd, codigo: codigo, nombre: nomProducto, valor: valProducto, stock: 0 };
                setLista([...lista, auxObj])
                setCodigo("")
                setNomProducto("")
                setValProducto("")
                document.getElementById("inputCodigo").value = ""
                document.getElementById("inputNombre").value = ""
                document.getElementById("inputValor").value = ""
                document.getElementById("inputCodigo").focus()
                console.log("PRODUCTO CREADO CON EXITO.")
            } else {
                document.getElementById("inputCodigo").focus()
                console.log("ERROR, CAMPOS VACIOS.")
            }
        }
    }

    function guardar() {
        localStorage.setItem("arrayProdTmp", JSON.stringify(lista))
        console.log("*DATOS GUARDADOS EN LOCAL STORAGE:\n*DATOS: " + JSON.stringify(lista))
    }

    const cls = () => {
        setCodigo("");
        setNomProducto("");
        setValProducto("");
        setLista([]);
        document.getElementById("inputCodigo").focus();
    }
    const tabla = lista.map(e => {
        return (
            <tr id={`td${e.id}`} key={e.id} >
                <td id={`tdId${e.id}`}>{e.id}</td>
                <td id={`tdCod${e.id}`}>{e.codigo}</td>
                <td id={`tdNom${e.id}`}>{e.nombre}</td>
                <td id={`tdVal${e.id}`}>{e.valor}</td>
            </tr>
        )
    })
    const tablaVacia = (
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>)



    return (
        <>
            <Container className='d-flex  text-center'>

                <Container className='mt-4'>
                    <fieldset className="border p-3">
                        <legend className="w-auto">PRODUCTO NUEVO</legend>
                        <form className='d-flex'>
                            <div className='d-inline'>
                                <input className='mt-2' type="number" id="inputCodigo" placeholder='Codigo' value={codigo} onChange={e => { setCodigo(e.target.value) }} required />
                                <input className='mt-2' type="text" id="inputNombre" placeholder='Nombre' value={nomProducto} onChange={e => { setNomProducto(e.target.value) }} required />
                                <input className='mt-2' type="number" id="inputValor" placeholder='Valor' value={valProducto === 0 ? '' : valProducto} onChange={e => { setValProducto(e.target.value) }} required />
                            </div>
                            <div className='d-inline'>
                                <Button className='mt-1' onClick={agregar}>Agregar</Button>
                                <Button className='mt-1 btn btn-danger' onClick={cls}>Limpiar</Button>
                                {lista.length!==0&&<Button className='mt-1 btn btn-success' onClick={guardar}>Subir a servidor</Button>}
                            </div>
                        </form>
                    </fieldset>


                </Container>
                <Container className='mt-4'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>#CODIGO#</th>
                                <th>PRODUCTO</th>
                                <th>VALOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.length!==0? tabla : tablaVacia}
                        </tbody>
                    </Table>
                </Container>
            </Container >

        </>
    );
}

export default AgregarProducto;