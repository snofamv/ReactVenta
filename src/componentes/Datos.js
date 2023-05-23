
export const guardarDatoJSON = (objProducto) => {
    const fs = require('fs');
    let datosArchivo = fs.readFileSync('./archivo.json');
    let productos = JSON.parse(datosArchivo);
    productos.productos.push(objProducto)
    console.log(JSON.stringify(productos))


    fs.writeFileSync('./archivo.json', JSON.stringify(productos), 'utf-8', (error) => {
        if (error) {
            console.log(error.message)
        } else {
            console.log("Archivo generado correctamente.");
            console.log(arr)

        }

    })
}
export const Leer = () => {
    const fs = require('fs');
    const datosArchivo = fs.readFileSync('./archivo.json');
    const res = JSON.parse(datosArchivo);
    return res;

}
function buscarIdJSON(id) {
    const fs = require('fs');

    let datosArchivo = fs.readFileSync('./archivo.json');
    let parseo = JSON.parse(datosArchivo);
    parseo.productos.map((producto) => {
        if (String(id) === String(producto.id)) {
            console.log(`ID: ${producto.id}  -  PRODUCTO: ${producto.nombre}`);
        }
    })


}
function actualizarPorIdJSON(id, nuevoObjeto) {
    const fs = require('fs');

    let datosArchivo = fs.readFileSync('./archivo.json');
    let parseo = JSON.parse(datosArchivo);
    parseo.productos.map((producto, index) => {
        if (String(id) === String(producto.id)) {
            parseo.productos[index] = nuevoObjeto;
            console.log(`ACTUALIZANDO:      ID: ${producto.id}  -  PRODUCTO: ${producto.nombre}`);
            console.log(`NUEVA INFORMACION EN:    ID: ${parseo.productos[index].id}  -  PRODUCTO: ${parseo.productos[index].nombre}`);
        }
    })

    fs.writeFileSync('./archivo.json', JSON.stringify(parseo), 'utf-8', (error) => {
        if (error) {
            console.log(error.message)
        } else {
            console.log("Archivo generado correctamente.");

        }

    })

}
