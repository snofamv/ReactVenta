import { Table, Nav, Button } from "react-bootstrap"
import { useState } from "react";



function Ganancias() {
    const [fechaDesde, setfechaDesde] = useState("");
    const [fechaHasta, setfechaHasta] = useState("");
    const [fechaIndividual, setfechaIndividual] = useState("");
    const [estado, setEstado] = useState(false);

    const tabla1 =
        (
            <>
                    <Table striped bordered hover className="table table-hover table-dark">
                        <thead>
                        <tr >
                            <th className="bg-success" colSpan={3}><center>DIARIO</center></th>
                        </tr>
                            <tr>
                                <th colSpan={2}>Seleccionar día: <input type="date" value={fechaIndividual} onChange={e => setfechaIndividual(e.target.value)} /></th>
                                <th><center><Button className="btn btn-warning" onClick={e => { setEstado(estado === false ? true : false) }}>{estado === true ? 'Buscar dia' : 'Buscar rango'}</Button></center></th>
                            </tr>
                            <tr>
                                <th>Fecha</th>
                                <th>N° Ventas</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>[ {fechaIndividual} ]</td>
                                <td>27</td>
                                <td>$128.000</td>
                            </tr>
                        </tbody>
                    </Table>
            </>

        );

    const tabla2 =

        (<>
                <Table striped bordered hover className="table table-hover table-dark p-5">
                    <thead>
                        <tr>
                            <th className="bg-success" colSpan={3}><center>SEMANAL</center></th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Desde <input type="date" value={fechaDesde} onChange={e => setfechaDesde(e.target.value)} /> Hasta <input type="date" value={fechaHasta} onChange={e => setfechaHasta(e.target.value)} /></th>

                            <th><center><Button className="btn btn-warning" onClick={e => { setEstado(estado === false ? true : false) }}>{estado === true ? 'Buscar dia' : 'Buscar rango'}</Button></center></th>

                        </tr>
                        <tr>
                            <th>Fecha</th>
                            <th>N° Ventas</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>[ {fechaDesde} ] / [ {fechaHasta} ]</td>
                            <td>243</td>
                            <td>$422.000</td>
                        </tr>
                    </tbody>
                </Table>
        </>);





    return (
        <>
            {estado === false ? tabla1 : undefined}
            {estado === true ? tabla2 : undefined}



        </>
    )
}

export default Ganancias