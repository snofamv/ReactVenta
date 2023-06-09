import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import ListaProductos from "./ListaProductos"
import AgregarProducto from "./AgregarProducto"
import Ganancias from "./Ganancias"
import Venta from "./Venta"
function Panel() {
    const [showLista, setShowLista] = useState(false)
    const [showGanancias, setShowGanancias] = useState(false)
    const [showAgregarProd, setShowAgregarProd] = useState(false)
    const [showVenta, setShowVenta] = useState(false)

    function venta() {
        setShowVenta(true);
        setShowLista(false);
        setShowAgregarProd(false);
        setShowGanancias(false);

    }
    function lista() {
        setShowVenta(false);
        setShowLista(true);
        setShowAgregarProd(false);
        setShowGanancias(false);

    }
    function agregar() {
        setShowVenta(false);
        setShowLista(false);
        setShowAgregarProd(true);
        setShowGanancias(false);

    }
    function ganancias() {
        setShowVenta(false);
        setShowLista(false);
        setShowAgregarProd(false);
        setShowGanancias(true);

    }


    return (
        <>

            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/128/4464/4464976.png"
                                width="70"
                                height="70"
                                className="d-inline-block align-top"
                            />{' '}
                            REACTPOS v1.0
                        </Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link style={{ color: showVenta === true?'lightgreen':'white' }} onClick={venta}>{showVenta === true ? '* Venta *' : 'Venta'}</Nav.Link>
                            <Nav.Link style={{ color: showLista === true ? 'lightgreen' : 'white' }} onClick={lista}>{showLista === true ? '* Lista productos *' : 'Lista productos'}</Nav.Link>
                            <Nav.Link style={{ color: showAgregarProd === true ? 'lightgreen' : 'white' }} onClick={agregar}>{showAgregarProd === true ? '* Nuevo producto *' : 'Nuevo producto'}</Nav.Link>
                            <Nav.Link style={{ color: showGanancias === true ? 'lightgreen' : 'white' }} onClick={ganancias}>{showGanancias === true ? '* Ganancias *' : 'Ganancias'}</Nav.Link>


                        </Nav>
                    </Container>
                </Navbar>
            </header>

            <main className="vh-100" style={{ backgroundColor: '#AAC8A7' }}>

                {showLista === true ? <ListaProductos /> : undefined}
                {showGanancias === true ? <Ganancias /> : undefined}
                {showAgregarProd === true ? <AgregarProducto /> : undefined}
                {showVenta === true ? <Venta /> : undefined}
            </main>



        </>
    )
}
export default Panel