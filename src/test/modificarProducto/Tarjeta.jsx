import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tarjeta(props) {

    return (


        <>
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={props.imagen} style={{ width: '10rem', margin:"auto"}}/>
                    <Card.Body>
                        <Card.Title>{props.nombre}</Card.Title>
                        <Card.Text>
                            #ID: <b>{props.id}</b><br/>
                            Valor actual: <b>{props.valor}</b><br/>
                            Nombre actual: <b>{props.nombre}</b><br/>
                            Imagen: <b>{props.imagen}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </>
    )

}

export default Tarjeta