import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login(props) {

  const [isLogged, setIsLogged] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [show, setShow] =useState(true);
  const validarSesion = (evento) => {
    evento.preventDefault();
    //console.clear()
    setUsuario(evento.target.txtusuario.value)
    setClave(evento.target.txtclave.value)


    if (usuario.length === 0 || clave.length === 0) {
      alert("Complete los datos faltantes.");

    } else {
      if (usuario === "adm" && clave === "1") {
        setIsLogged(true);
        setShow(false);
        console.log("credenciales correctas");
        console.log("Estado login: " + isLogged)
      } else {
        setIsLogged(false);
        setClave("");
        setUsuario("");
        document.getElementById("txtusuario").value = "";
        document.getElementById("txtclave").value = "";
        document.getElementById("txtusuario").focus();
        alert("Error, usuario y/o contraseña incorrectas.");
        console.log("Error de credenciales.");
      }

    }
    console.log("Estado login: " + isLogged)
  }

  return (
    <>
      <Container style={{ width: "400px", padding: "2rem", border: "1px solid", marginTop: "1rem", display: show===true?"":"none"}}>
        <div >
          <Form onSubmit={validarSesion}>
            <h3 >SistemaPOS v1.0</h3>
            <div >

              <Form.Label htmlFor="txtusuario">Usuario</Form.Label>
              <Form.Control
                name="txtusuario"
                id="txtusuario"
                type="text"
                className="form-control mt-1"
                placeholder="Ingresar usuario"
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <Form.Label htmlFor="txtclave">Contrasena</Form.Label>
              <Form.Control
                type="password"
                name="txtclave"
                id="txtclave"
                className="form-control mt-1"
                placeholder="Ingresar Contraseña"
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button variant="primary" type="submit">
                Acceder
              </Button>
            </div>
          </Form>
        </div>
      </Container>



    </>

  )
}

export default Login